"use client";

import { useEffect } from 'react';

export default function RemoveNextOverlay() {
  useEffect(() => {
    const removeOverlayElements = () => {
      try {
        // Remove script tag injected by Next dev overlay
        document.querySelectorAll('script[data-nextjs-dev-overlay], script[data-nextjs-dev-overlay="true"]').forEach((s) => {
          s.remove();
        });

        // Remove portal/overlay elements inserted by Next/Turbopack
        ['nextjs-portal', 'nextjs-portal-root', 'nextjs-overlay', 'nextjs-devtools', 'nextjs-portal-root'].forEach((tag) => {
          document.querySelectorAll(tag).forEach((el) => el.remove());
        });

        // Remove known attribute-based elements
        const attrSelectors = ['[data-nextjs-icon]', '[data-nextjs-overlay]', '[data-nextjs-toolbar]'];
        attrSelectors.forEach((sel) => document.querySelectorAll(sel).forEach((el) => el.remove()));

        // Remove small floating badge containing single letter 'N' — safer check: visible and bottom-left
        document.querySelectorAll('button, a, div, span').forEach((el) => {
          const txt = (el.textContent || '').trim();
          if (txt === 'N' || txt === 'n') {
            const rect = el.getBoundingClientRect();
            if (rect.width > 6 && rect.width < 80 && rect.height > 6 && rect.height < 80) {
              // Check if positioned near bottom-left
              const vpH = window.innerHeight || document.documentElement.clientHeight;
              const vpW = window.innerWidth || document.documentElement.clientWidth;
              if (rect.left < vpW * 0.25 && rect.top > vpH * 0.6) {
                el.remove();
              }
            }
          }
        });
      } catch (e) {
        // ignore
      }
    };

    // Initial removal
    removeOverlayElements();

    // Also run periodically for a short window in case overlay injects slightly later
    const interval = window.setInterval(removeOverlayElements, 500);

    // Watch for future insertions (overlay can be injected dynamically)
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.addedNodes && m.addedNodes.length) removeOverlayElements();
      }
    });
    mo.observe(document.documentElement || document.body, { childList: true, subtree: true });

    // Stop periodic runs after 8 seconds to avoid work
    const timeout = window.setTimeout(() => {
      clearInterval(interval);
    }, 8000);

    return () => {
      mo.disconnect();
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return null;
}
