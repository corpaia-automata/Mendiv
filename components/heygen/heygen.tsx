"use client";

import { useEffect } from "react";

export default function HeygenEmbed() {
  useEffect(() => {
    const host = "https://labs.heygen.com";
    const url =
      host +
      "/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiI4ODdlMTJmZGI5Y2M0NjEzYTcwYjBjYjhh%0D%0AYzk2ZWZlOSIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3Yz%0D%0ALzg4N2UxMmZkYjljYzQ2MTNhNzBiMGNiOGFjOTZlZmU5L2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0%0D%0ALndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6IjUw%0D%0AODNiNjVhM2I4NDRkODRiNGNjZWVhMzE4NTEyOGUyIiwidXNlcm5hbWUiOiJlZjQ4ZWUyMjljZmI0%0D%0AM2MyYjRhZDdmMjViYThjZGI2NCJ9&inIFrame=1";

    const clientWidth = window.innerWidth;

    // wrapper
    const wrapDiv = document.createElement("div");
    wrapDiv.id = "heygen-streaming-embed";

    // container
    const container = document.createElement("div");
    container.id = "heygen-streaming-container";

    // stylesheet
    const stylesheet = document.createElement("style");
    stylesheet.innerHTML = `
      #heygen-streaming-embed {
        z-index: 9999;
        position: fixed;
        left: 20px;
        bottom: 20px;
        width: ${clientWidth < 540 ? "140px" : "200px"};
        height: ${clientWidth < 540 ? "140px" : "200px"};
        border-radius: 50%;
        border: 2px solid #fff;
        box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.12);
        transition: all linear 0.1s;
        overflow: hidden;
        opacity: 0;
        visibility: hidden;
      }
      #heygen-streaming-embed.show {
        opacity: 1;
        visibility: visible;
      }
      #heygen-streaming-embed.expand {
        ${
          clientWidth < 540
            ? "height: 240px; width: 96%; left: 50%; transform: translateX(-50%);"
            : "height: 366px; width: calc(366px * 16 / 9);"
        }
        border: 0;
        border-radius: 8px;
      }
      #heygen-streaming-container {
        width: 100%;
        height: 100%;
      }
      #heygen-streaming-container iframe {
        width: 100%;
        height: 100%;
        border: 0;
      }
    `;

    // iframe
    const iframe = document.createElement("iframe");
    iframe.allowFullscreen = false;
    iframe.title = "Streaming Embed";
    iframe.role = "dialog";
    iframe.allow = "microphone";
    iframe.src = url;

    // state
    let visible = false;
    let initial = false;

    const messageHandler = (e: MessageEvent) => {
      if (e.origin === host && e.data?.type === "streaming-embed") {
        if (e.data.action === "init") {
          initial = true;
          wrapDiv.classList.toggle("show", initial);
        } else if (e.data.action === "show") {
          visible = true;
          wrapDiv.classList.toggle("expand", visible);
        } else if (e.data.action === "hide") {
          visible = false;
          wrapDiv.classList.toggle("expand", visible);
        }
      }
    };

    window.addEventListener("message", messageHandler);

    // append
    container.appendChild(iframe);
    wrapDiv.appendChild(stylesheet);
    wrapDiv.appendChild(container);
    document.body.appendChild(wrapDiv);

    // cleanup
    return () => {
      window.removeEventListener("message", messageHandler);
      if (document.body.contains(wrapDiv)) {
        document.body.removeChild(wrapDiv);
      }
    };
  }, []);

  return null; // nothing to render directly
}
