import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function Imagepning() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)

  const handlehome = () => {    
    navigate('/')
  }

  // เพิ่มรูปที่อยากโชว์ที่นี่
  const images = [
    { id: 1, src: '/images/n1.jpeg', caption: '💖✨🌸✨💖' },
    { id: 2, src: '/images/n2.jpeg', caption: '💖✨🌸✨💖' },
    { id: 3, src: '/images/n3.jpeg', caption: '💖✨🌸✨💖' },
    { id: 4, src: '/images/n4.jpeg', caption: '💖✨🌸✨💖' },
    { id: 5, src: '/images/n5.jpeg', caption: '💖✨🌸✨💖' },
    { id: 6, src: '/images/n6.jpeg', caption: '💖✨🌸✨💖' },
  ]

  return (
    <div className="min-h-screen w-full py-4 px-2 bg-gradient-to-br from-purple-400 via-pink-500 to-pink-300 bg-[length:200%_200%] animate-gradient">
      {/* ปุ่มกลับ */}
      <div className="flex justify-end mb-4">
        <button
          className="bg-white/60 text-pink-900 font-bold px-4 py-2 rounded-lg shadow hover:bg-white/80 transition"
          onClick={handlehome}
        >
          Home
        </button>
      </div>

      {/* แกลเลอรีรูป */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <motion.div
            key={img.id}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 150, damping: 12 }}
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl"
            onClick={() => setSelected(img)}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <p className="text-white font-bold text-lg">{img.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal แสดงรูปเดี่ยวแบบใหญ่ */}
      {selected && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelected(null)}
        >
          <motion.div
            className="relative bg-white rounded-2xl overflow-hidden shadow-xl"
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.7 }}
          >
            <img
              src={selected.src}
              alt={selected.caption}
              className="w-[90vw] max-w-2xl h-auto object-cover"
            />
            <p className="p-3 text-center font-semibold text-pink-900">
              {selected.caption}
            </p>
            <button
              className="absolute top-2 right-2 bg-pink-600 text-white rounded-full px-3 py-1 shadow hover:bg-pink-700 transition"
              onClick={() => setSelected(null)}
            >
              ✖
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default Imagepning
