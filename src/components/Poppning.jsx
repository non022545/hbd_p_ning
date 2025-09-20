import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function Poppning() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)          // เก็บรูปที่ถูกกด
  const [isOpen, setIsOpen] = useState(false)             // เปิด/ปิดกริด
  const [showTip, setShowTip] = useState(false)           // แถบ tips

  const handlehome = () => navigate('/')

  const handleOpen = () => {
    setIsOpen(v => !v)
    setShowTip(v => !v)
  }

  // ล็อกสกอร์ลตอนเปิดโมดัล (ลื่นขึ้น)
  useEffect(() => {
    if (selected) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = prev }
    }
  }, [selected])

  // รูป
  const images = [
    { id: 1, src: '/images/n1.jpeg', caption: '💖✨🌸✨💖' },
    { id: 2, src: '/images/n2.jpeg', caption: '💖✨🌸✨💖' },
    { id: 3, src: '/images/n3.jpeg', caption: '💖✨🌸✨💖' },
    { id: 4, src: '/images/n4.jpeg', caption: '💖✨🌸✨💖' },
    { id: 5, src: '/images/n5.jpeg', caption: '💖✨🌸✨💖' },
    { id: 6, src: '/images/n6.jpeg', caption: '💖✨🌸✨💖' },
    { id: 7, src: '/images/n7.jpg', caption: '💖✨🌸✨💖' },
    { id: 8, src: '/images/n8.jpg', caption: '💖✨🌸✨💖' },
    { id: 9, src: '/images/n9.jpg', caption: '💖✨🌸✨💖' },
    { id: 10, src: '/images/n10.jpg', caption: '💖✨🌸✨💖' },
    { id: 11, src: '/images/n11.jpg', caption: '💖✨🌸✨💖' },
    { id: 12, src: '/images/n12.jpg', caption: '💖✨🌸✨💖' },
    { id: 13, src: '/images/n13.jpg', caption: '💖✨🌸✨💖' },
    { id: 14, src: '/images/n14.jpg', caption: '💖✨🌸✨💖' },
  ]

  const gridVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: 8, transition: { duration: 0.25 } }
  }

  return (
    <div className="min-h-screen w-full py-4 px-2 bg-gradient-to-br from-purple-400 via-pink-500 to-pink-300 bg-[length:200%_200%] animate-gradient">
      {/* ปุ่มกลับ */}
      {/* <div className="flex justify-end mb-4">
        <button
          className="bg-white/60 text-pink-900 font-bold px-4 py-2 rounded-lg shadow hover:bg-white/80 transition"
          onClick={handlehome}
        >
          Home
        </button>
      </div> */}

      {/* ปุ่มเปิดกริด */}
      <div className="flex justify-center">
        <button
          className="bg-white/60 text-pink-900 font-bold px-4 py-2 rounded-lg shadow hover:bg-white/80 transition mb-2 active:scale-[0.99]"
          onClick={handleOpen}
        >
          &#128073; กดเลยยย &#128072;
        </button>
      </div>

      {/* แถบ Tip (ลื่น ๆ) */}
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="flex justify-center"
          >
            <div className="bg-white/60 px-4 py-2 rounded-full text-pink-900 font-bold mb-2 shadow">
              &#128522; จิ้มที่รูปได้ด้วยน้าาา &#128522;
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* กริดรูป (เปิด/ปิดสมูท) */}
      <AnimatePresence mode="popLayout">
        {isOpen && (
          <motion.div
            key="grid"
            variants={gridVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white/60 p-2 rounded-2xl"
          >
            {images.map((img) => (
              <motion.div
                key={img.id}
                layout
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 160, damping: 14 }}
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl"
                onClick={() => {
                  setSelected(img)
                }}
              >
                {/* ใช้ layoutId เพื่อทำ shared element transition กับ modal */}
                <motion.img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-64 object-cover object-center"
                  layoutId={`photo-${img.id}`}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <p className="text-white font-bold text-lg">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal รูปเดี่ยว (ซูมต่อเนื่องจากกริด) */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              key="modal"
              className="relative bg-white rounded-2xl overflow-hidden shadow-xl max-w-3xl w-[92vw]"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.25 } }}
              exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
              onClick={(e) => e.stopPropagation()} // กันคลิกทะลุ
            >
              {/* รูปใช้ layoutId เดียวกับกริด → ลื่นมาก */}
              <motion.img
                src={selected.src}
                alt={selected.caption}
                layoutId={`photo-${selected.id}`}
                className="w-full max-h-[78vh] object-contain bg-black"
              />

              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.05 }}
                className="p-3 text-center font-semibold text-pink-900"
              >
                {selected.caption}
              </motion.p>

              <button
                className="absolute top-2 right-2 bg-pink-600 text-white rounded-full px-3 py-1 shadow hover:bg-pink-700 transition active:scale-95"
                onClick={() => setSelected(null)}
              >
                ✖
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Poppning
