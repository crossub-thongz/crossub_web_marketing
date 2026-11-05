const PIXEL_ID = 'A79Jb1TcSMGyzyezmsPyo2';

/** Public ChatGPT ads tag. The pixel id is not a secret. The API key stays on the agent portal. */
export function OpenAiAdsPixel() {
  return (
    <script
      id="openai-ads-pixel"
      dangerouslySetInnerHTML={{
        __html: `!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];if(f&&f.parentNode)f.parentNode.insertBefore(j,f);else (d.head||d.documentElement).appendChild(j)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"${PIXEL_ID}"});`,
      }}
    />
  );
}
