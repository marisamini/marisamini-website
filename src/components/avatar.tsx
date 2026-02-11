"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Avatar() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="flex flex-col items-center gap-4">
      <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-emerald-500/50 bg-gray-800">
        {!imgError ? (
          <Image
            src="/headshot.jpeg"
            alt="Marisa Mini"
            fill
            className="object-cover"
            sizes="128px"
            priority
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-3xl font-bold text-emerald-400">
            MM
          </span>
        )}
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-100">Marisa Mini</h1>
        <p className="text-emerald-400">Microsoft Dynamics Consultant</p>
      </div>
    </section>
  );
}
