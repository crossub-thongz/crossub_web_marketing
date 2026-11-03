'use client';

import { useEffect, useRef } from 'react';

export function DemoVideo() {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const node = video.current;
    if (!node) return;
    node.muted = false;
    const started = node.play();
    if (!started) return;
    started.catch(() => {
      node.muted = true;
      void node.play();
    });
  }, []);

  return (
    <video
      ref={video}
      autoPlay
      controls
      playsInline
      preload="auto"
      className="mt-10 aspect-video w-full rounded-[28px] bg-[#071012] shadow-[0_24px_60px_rgba(23,30,75,0.12)]"
    >
      <source src="/demos/crossub-demo.mp4" type="video/mp4" />
    </video>
  );
}
