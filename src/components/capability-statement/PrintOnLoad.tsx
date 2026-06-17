"use client";

import { useEffect } from "react";

export function PrintOnLoad({ shouldPrint }: { shouldPrint: boolean }) {
  useEffect(() => {
    if (!shouldPrint) return;

    const timer = window.setTimeout(() => {
      window.print();
    }, 400);

    return () => window.clearTimeout(timer);
  }, [shouldPrint]);

  return null;
}
