'use client';

import { Maximize2, Play, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

function isDemoPage(pathname: string) {
  return pathname.replace(/\/$/, '').endsWith('/book-a-demo');
}

const HEADER = 44;
const MIN_WIDTH = 240;
const MIN_HEIGHT = 180;

function fittedBox(width: number) {
  return { width, height: HEADER + Math.round((width * 9) / 16) };
}

function clampBox(width: number, height: number) {
  const maxWidth = Math.max(MIN_WIDTH, window.innerWidth - 32);
  const maxHeight = Math.max(MIN_HEIGHT, window.innerHeight - 96);
  return {
    width: Math.min(maxWidth, Math.max(MIN_WIDTH, width)),
    height: Math.min(maxHeight, Math.max(MIN_HEIGHT, height)),
  };
}

export function DemoWidget() {
  const pathname = usePathname() || '/';
  const videoRef = useRef<HTMLVideoElement>(null);
  const [preview, setPreview] = useState(false);
  const [enlarged, setEnlarged] = useState(false);
  const [armed, setArmed] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [box, setBox] = useState(() => fittedBox(280));
  const visible = preview || enlarged;

  useEffect(() => {
    if (!enlarged) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || document.fullscreenElement) return;
      videoRef.current?.pause();
      setEnlarged(false);
      setPreview(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [enlarged]);

  useEffect(() => {
    const node = videoRef.current;
    if (!node || !armed) return;
    if (!visible) {
      node.pause();
      return;
    }
    node.muted = false;
    const started = node.play();
    if (!started) return;
    started.catch(() => {
      node.muted = true;
      void node.play();
    });
  }, [armed, visible, enlarged]);

  if (isDemoPage(pathname)) return null;

  function showPreview() {
    setArmed(true);
    setPreview(true);
  }

  function hidePreview() {
    if (enlarged || dragging) return;
    setPreview(false);
  }

  function enlarge() {
    setArmed(true);
    setPreview(true);
    setEnlarged(true);
    setBox((current) => {
      const width = Math.max(current.width, Math.min(720, window.innerWidth - 32));
      return current.width >= 640 ? current : fittedBox(width);
    });
  }

  function onResizePointerDown(event: React.PointerEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
    const handle = event.currentTarget;
    handle.setPointerCapture(event.pointerId);
    setDragging(true);
    setEnlarged(true);
    setPreview(true);
    const startX = event.clientX;
    const startY = event.clientY;
    const startWidth = box.width;
    const startHeight = box.height;

    const move = (pointer: PointerEvent) => {
      setBox(clampBox(startWidth + (startX - pointer.clientX), startHeight + (startY - pointer.clientY)));
    };
    const stop = () => {
      handle.removeEventListener('pointermove', move);
      handle.removeEventListener('pointerup', stop);
      handle.removeEventListener('pointercancel', stop);
      setDragging(false);
    };
    handle.addEventListener('pointermove', move);
    handle.addEventListener('pointerup', stop);
    handle.addEventListener('pointercancel', stop);
  }

  function close() {
    videoRef.current?.pause();
    setEnlarged(false);
    setPreview(false);
  }

  async function enterFullscreen() {
    const node = videoRef.current;
    if (!node) return;
    const video = node as HTMLVideoElement & { webkitEnterFullscreen?: () => void };
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    if (video.requestFullscreen) {
      await video.requestFullscreen();
      return;
    }
    video.webkitEnterFullscreen?.();
  }

  function onLauncherClick() {
    setArmed(true);
    if (enlarged) {
      void enterFullscreen();
      return;
    }
    enlarge();
  }

  return (
    <div
      className="fixed right-4 bottom-4 z-[60] flex flex-col items-end gap-3 sm:right-6 sm:bottom-6"
      onMouseEnter={showPreview}
      onMouseLeave={hidePreview}
    >
      {armed ? (
        <section
          className={`relative flex flex-col overflow-hidden rounded-[22px] bg-white shadow-[0_24px_60px_rgba(23,30,75,0.22)] ring-1 ring-[#171E4B]/10 ${
            dragging ? '' : 'transition-[width,height] duration-300 ease-out'
          } ${visible ? '' : 'hidden'}`}
          style={{ width: box.width, height: box.height }}
          aria-label="Watch a demo"
          aria-hidden={!visible}
        >
          <button
            type="button"
            aria-label="Resize demo"
            onPointerDown={onResizePointerDown}
            className="absolute top-0 left-0 z-10 size-8 cursor-nwse-resize"
          >
            <span className="absolute top-2 left-2 size-2.5 border-t-2 border-l-2 border-[#171E4B]/45" />
          </button>
          <div className="flex items-center justify-between gap-3 px-3 py-2.5">
            <p className="text-[14px] font-semibold text-[#171E4B]">Watch a demo</p>
            {enlarged ? (
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => void enterFullscreen()}
                  className="inline-flex size-8 items-center justify-center rounded-full text-[#171E4B] hover:bg-[#F3FBF8]"
                  aria-label="Full screen"
                >
                  <Maximize2 className="size-4" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="inline-flex size-8 items-center justify-center rounded-full text-[#171E4B] hover:bg-[#F3FBF8]"
                  aria-label="Close demo"
                >
                  <X className="size-4" aria-hidden />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={enlarge}
                className="text-[12px] font-medium text-[#62697C] underline decoration-[#62697C]/40 underline-offset-2 hover:text-[#171E4B]"
              >
                Click to enlarge
              </button>
            )}
          </div>
          <video
            ref={videoRef}
            controls={enlarged}
            playsInline
            preload="none"
            className="min-h-0 w-full flex-1 bg-[#071012] object-contain"
            onClick={() => {
              if (enlarged) return;
              enlarge();
            }}
          >
            <source src="/demos/crossub-demo.mp4" type="video/mp4" />
          </video>
        </section>
      ) : null}

      <button
        type="button"
        onClick={onLauncherClick}
        onFocus={showPreview}
        className="inline-flex h-12 items-center gap-2 rounded-full bg-[#24C68D] px-5 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(36,198,141,0.35)] hover:bg-[#1AAB78]"
        aria-expanded={visible}
      >
        <Play className="size-4 fill-current" aria-hidden />
        Watch a demo
      </button>
    </div>
  );
}
