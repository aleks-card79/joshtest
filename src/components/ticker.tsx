"use client"

import { useEffect, useRef } from "react"

export default function Ticker({ text }: { text: string }) {
  const tickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ticker = tickerRef.current
    if (ticker) {
      const tickerWidth = ticker.offsetWidth
      const textWidth = ticker.scrollWidth

      if (textWidth > tickerWidth) {
        ticker.style.animationDuration = `${(textWidth / tickerWidth) * 10}s`
      } else {
        ticker.style.animation = "none"
      }
    }
  }, [text])

  return (
    <div className="w-full h-full overflow-hidden pt-[10px] pb-[18px]">
      <div ref={tickerRef} className="animate-ticker whitespace-nowrap text-[14px] text-[#2d2d2d] inline-block">
        {[...Array(2)].map((_, i) => (
          <span key={i} className="mr-6">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}

