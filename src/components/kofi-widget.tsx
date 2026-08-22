"use client";

import Script from "next/script";

declare global {
  interface Window {
    kofiWidgetOverlay?: {
      draw: (username: string, options: Record<string, string>) => void;
    };
  }
}

function resizeWidget(attempt = 0) {
  const widgets = document.querySelectorAll<HTMLElement>(
    ".floatingchat-container-wrap, .floatingchat-container-wrap-mobi"
  );

  if (widgets.length === 0) {
    if (attempt < 10) window.setTimeout(() => resizeWidget(attempt + 1), 150);
    return;
  }

  widgets.forEach((widget) => {
    widget.style.setProperty("transform", "scale(0.7)", "important");
    widget.style.setProperty("transform-origin", "bottom left", "important");
  });
}

export function KofiWidget() {
  return (
    <Script
      src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        window.kofiWidgetOverlay?.draw("githubster", {
          type: "floating-chat",
          "floating-chat.donateButton.text": "Support",
          "floating-chat.donateButton.background-color": "#00b9fe",
          "floating-chat.donateButton.text-color": "#fff",
        });
        resizeWidget();
      }}
    />
  );
}
