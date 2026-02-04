'use client'

import { useEffect } from 'react'

export default function StopSaver({ stop }: { stop: string }) {
  useEffect(() => {
    if (stop) {
      localStorage.setItem('wormstop_stop_param', stop)
    }
  }, [stop])

  return null
}
