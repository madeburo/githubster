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
  const widget = document.querySelector<HTMLIFrameElement>(
    'iframe#kofi-widget-overlay, iframe[src*="ko-fi.com"]'
  );

  if (!widget) {
    if (attempt < 10) window.setTimeout(() => resizeWidget(attempt + 1), 150);
    return;
  }

  widget.style.transform = "scale(0.5)";
  widget.style.transformOrigin = "bottom left";
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
