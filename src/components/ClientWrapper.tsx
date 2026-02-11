"use client";

import React, { useState, useEffect, ReactElement } from "react";
import useIntersectionObserver from "@/utils/useIntersectionObserver";
import type { ChartData } from "@/lib/definitions";

interface ClientWrapperProps {
  children: ReactElement;
  totalVisitors?: number;
  avgLoadTime?: number | null;
  chartData?: ChartData[];
}

export default function ClientWrapper({
  children,
  totalVisitors = 0,
  avgLoadTime = null,
  chartData = [],
}: ClientWrapperProps) {
  const [activeSection, setActiveSection] = useState("");
  const [activeItem, setActiveItem] = useState("");

  useIntersectionObserver(setActiveSection);

  useEffect(() => {
    setActiveItem(window.location.hash);
    const handleHashChange = () => setActiveItem(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    setActiveItem(activeSection);
  }, [activeSection]);

  const handleClick = (item: string) => setActiveItem(item);

  return React.cloneElement(children, {
    activeItem,
    handleClick,
    totalVisitors,
    avgLoadTime,
    chartData,
  });
}
