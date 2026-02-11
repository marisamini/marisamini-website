"use client";

import { useEffect } from "react";

export default function RecordVisit() {
  useEffect(() => {
    const loadTime =
      typeof performance !== "undefined" &&
      performance.timing &&
      performance.timing.loadEventEnd > 0
        ? performance.timing.loadEventEnd - performance.timing.navigationStart
        : 0;

    fetch("/api/record-visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ loadTime }),
    }).catch(() => {});
  }, []);

  return null;
}
