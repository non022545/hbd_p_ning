// components/MusicToggle.jsx
import React, { useEffect, useImperativeHandle, useRef, useState, forwardRef } from 'react'
import { motion } from 'framer-motion'

const MusicToggle = forwardRef(function MusicToggle(
  { src = '/audio/hbd.mp3', title = 'Happy Birthday 🎂', initialVolume = 0.7 },
  ref
) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(initialVolume)

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.volume = volume
    a.load()
  }, [src])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  const fadeTo = async (target, ms = 500) => {
    const a = audioRef.current
    if (!a) return
    const steps = 20
    const start = a.volume
    const diff = target - start
    for (let i = 1; i <= steps; i++) {
      await new Promise(r => setTimeout(r, ms / steps))
      a.volume = Math.min(1, Math.max(0, start + (diff * i) / steps))
    }
  }

  const play = async () => {
    const a = audioRef.current
    if (!a) return
    try {
      const prevVol = volume
      a.volume = 0
      await a.play()
      setIsPlaying(true)
      await fadeTo(prevVol, 500)
    } catch (e) {
      console.warn('Cannot play:', e)
    }
  }

  const pause = async () => {
    const a = audioRef.current
    if (!a) return
    const cur = a.volume
    await fadeTo(0, 400)
    a.pause()
    a.volume = cur // เก็บไว้ให้กลับไปใช้ตอนเล่นใหม่
    setIsPlaying(false)
  }

  const toggle = async () => (isPlaying ? pause() : play())

  useImperativeHandle(ref, () => ({ play, pause, toggle }), [isPlaying, volume])

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <audio ref={audioRef} src={src} loop preload="auto" playsInline />
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2">
        <div className="hidden sm:flex items-center gap-3 bg-white/80 backdrop-blur px-3 py-2 rounded-2xl shadow">
          <span className="text-pink-900 font-semibold">{title}</span>
          <input
            type="range" min={0} max={1} step={0.01} value={volume}
            onChange={(e) => {
              const v = parseFloat(e.target.value)
              setVolume(v)
              if (audioRef.current) audioRef.current.volume = v
            }}
            className="accent-pink-600 w-28"
            aria-label="ปรับเสียง"
          />
        </div>
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={toggle}
          aria-label={isPlaying ? 'หยุดเพลง' : 'เล่นเพลง'}
          className={`w-12 h-12 rounded-full shadow flex items-center justify-center text-white ${
            isPlaying ? 'bg-pink-600' : 'bg-pink-800/80 hover:bg-pink-700'
          }`}
          title={isPlaying ? 'หยุดเพลง' : 'เล่นเพลง'}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </motion.button>
      </motion.div>
    </div>
  )
})

export default MusicToggle
