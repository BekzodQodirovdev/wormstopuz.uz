'use client'

import { useState, useRef, useEffect } from 'react'

interface VoiceMessageProps {
  src: string
  duration?: string // Display duration (e.g., "0:14")
}

export default function VoiceMessage({ src, duration = "0:30" }: VoiceMessageProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  
  // Create a randomized "waveform" visual pattern
  // We use a fixed seed-like pattern so it looks consistent but "audio-like"
  const [bars, setBars] = useState<number[]>([])

  useEffect(() => {
    // Generate ~25 bars (reduced for mobile fit) with varying heights
    const newBars = Array.from({ length: 25 }, () => {
      // Logic for "Telegram-like" shape: some high, some low, grouped together
      return Math.max(20, Math.random() * 100) 
    })
    setBars(newBars)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100)
      }
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setProgress(0)
      audio.currentTime = 0
    }

    audio.addEventListener('timeupdate', updateProgress)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', updateProgress)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="flex items-center gap-2 md:gap-3 bg-gray-100 rounded-full p-1.5 md:p-2 pr-3 w-full max-w-[220px] md:max-w-sm">
      <audio ref={audioRef} src={src} preload="metadata" />
      
      {/* Play/Pause Button */}
      <button 
        onClick={togglePlay}
        className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
      >
        {isPlaying ? (
          <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg className="w-4 h-4 md:w-5 md:h-5 fill-current ml-0.5" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* Waveform Visualizer */}
      <div className="flex-1 h-6 md:h-8 flex items-center gap-[2px] overflow-hidden relative cursor-pointer min-w-0"
           onClick={(e) => {
             // Seek functionality
             const rect = e.currentTarget.getBoundingClientRect()
             const x = e.clientX - rect.left
             const width = rect.width
             const percentage = x / width
             if (audioRef.current && audioRef.current.duration) {
               audioRef.current.currentTime = percentage * audioRef.current.duration
             }
           }}
      >
        {bars.map((height, i) => (
          <div 
            key={i}
            className="w-1 rounded-full transition-all duration-75 shrink-0"
            style={{
              height: `${height}%`,
              backgroundColor: (i / bars.length) * 100 < progress ? '#3b82f6' : '#d1d5db', 
            }}
          />
        ))}
      </div>

      {/* Duration */}
      <div className="text-[10px] md:text-xs text-gray-500 font-medium tabular-nums ml-1 flex-shrink-0">
        {duration}
      </div>
    </div>
  )
}
