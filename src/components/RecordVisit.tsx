"use client";

import { useEffect } from "react";

export default function RecordVisit() {
  useEffect(() => {
    // Wait a moment so the browser finishes loading, then measure load time
    const sendVisit = () => {
      let loadTime = 0;

      // Modern API (Navigation Timing Level 2)
      if (typeof performance !== "undefined" && performance.getEntriesByType) {
        const navEntries = performance.getEntriesByType(
          "navigation"
        ) as PerformanceNavigationTiming[];
        if (navEntries.length > 0 && navEntries[0].loadEventEnd > 0) {
          loadTime = navEntries[0].loadEventEnd;
        }
      }

      // Fallback to deprecated API if modern one returned 0
      if (
        loadTime === 0 &&
        typeof performance !== "undefined" &&
        performance.timing &&
        performance.timing.loadEventEnd > 0
      ) {
        loadTime =
          performance.timing.loadEventEnd -
          performance.timing.navigationStart;
      }

      fetch("/api/record-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ loadTime }),
      }).catch(() => {});
    };

    // Delay slightly to ensure loadEventEnd is populated
    if (document.readyState === "complete") {
      setTimeout(sendVisit, 100);
    } else {
      window.addEventListener("load", () => setTimeout(sendVisit, 100));
    }
  }, []);

  return null;
}
