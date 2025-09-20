import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

function Home() {
  const [cardShow, setCardShow] = useState(false)
  const [cardinShow, setCardinShow] = useState(false)
  const navigate = useNavigate()

  const handlecardShow = () => {
    setCardShow(prev => !prev)
    setCardinShow(false)
  }
  const handlecardinShow = () => {
    setCardinShow(prev => !prev)
  }
  const handleimageShow = () => navigate('/Imagepning')

  // ใช้ variants เพื่อจัดการอนิเมชันแบบรวม ๆ
  const containerVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    show: {
      opacity: 1,
      y: 0,
      height: 'auto',
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } // easeOutQuint-ish
    },
    exit: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } // easeIn
    }
  }

  const innerVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
    exit: { opacity: 0, y: 8, transition: { duration: 0.2 } }
  }

  return (
    <>
      <div className="flex flex-col justify-center min-h-screen w-full py-4 px-2 bg-gradient-to-br from-purple-400 via-pink-500 to-pink-300 bg-[length:200%_200%] animate-gradient">
        <div className="bg-white/50 p-2 rounded-3xl backdrop-blur-sm">
          <div className="bg-white/60 text-center text-xl text-pink-900 p-2 rounded-full font-bold">
            &#129392; HAPPY BIRTHDAY TO P.NING &#129392;
          </div>

          <div className="flex justify-center">
            <button
              className="bg-pink-800/60 hover:bg-pink-800/70 active:scale-[0.99] transition mt-4 p-2 w-auto text-white rounded-3xl shadow"
              onClick={handlecardShow}
            >
              <p className="text-xl font-bold">
                &#128073; กดเปิดอ่านตรงนี้นะคะ &#128072;
              </p>
            </button>
          </div>

          {/* กล่องแรก */}
          <AnimatePresence initial={false}>
            {cardShow && (
              <motion.div
                key="card-1"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="overflow-hidden"
              >
                <motion.div
                  variants={innerVariants}
                  className="bg-white/60 text-center mt-4 py-3 px-3 text-pink-900 rounded-3xl"
                >
                  <p className="text-xl mb-2 font-bold">
                    &#127881; สุขสันต์วันเกิดนะค๊าบบบบ &#127881;
                  </p>
                  <p>ปีนี้ก็อายุ 26 แล้วแถมมีเด็กชื่อนนท์เพิ่มมาอีกคน</p>
                  <p>ขอให้ปีนี้ของพี่เต็มไปด้วยความสุข ความสำเร็จ</p>
                  <p>สุขภาพร่างกายแข็งแรง มีความสุขมาก ๆ</p>
                  <p>และรอยยิ้มที่สวยเหมือนเดิมนะค๊าบบ</p>
                  <p>นนท์ดีใจที่ได้รู้จักพี่มาก ๆ เลย &#129392;</p>
                </motion.div>

                <div className="flex justify-center">
                  <button
                    className="bg-pink-800/60 hover:bg-pink-800/70 active:scale-[0.99] transition text-center mt-4 p-2 w-auto text-white rounded-3xl shadow"
                    onClick={handlecardinShow}
                  >
                    <p className="text-xl font-bold">
                      &#128150; มีอีกกกกกก &#128150;
                    </p>
                  </button>
                </div>

                {/* กล่องที่สอง */}
                <AnimatePresence initial={false}>
                  {cardinShow && (
                    <motion.div
                      key="card-2"
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="overflow-hidden"
                    >
                      <motion.div
                        variants={innerVariants}
                        className="bg-white/60 text-center mt-4 py-3 px-3 text-pink-900 rounded-3xl"
                      >
                        <p className="text-xl mb-2 font-bold">
                          &#128147; นนท์อยากจะบอกพี่ว่า &#128147;
                        </p>
                        <p>&#129392; นนท์รักพี่มาก ๆ นะคะ &#129392;</p>
                        <p>อยู่กับนนท์ไปนาน ๆ เลยน้าาาา</p>
                        <p>นนท์จะทำให้พี่เป็นคนที่ถูกรักอย่างดี</p>
                        <p>รักพี่ที่สุดเลยยยยย รักพี่แค่คนเดียวด้วย</p>
                        <p>&#128149; นนท์รักพี่หนิงนะคะ &#128149;</p>
                      </motion.div>

                      <div className="flex justify-center">
                        <button
                          className="bg-pink-800/60 hover:bg-pink-800/70 active:scale-[0.99] transition text-center mt-4 p-2 w-auto text-white rounded-3xl shadow"
                          onClick={handleimageShow}
                        >
                          <p className="text-xl font-bold">
                            &#129392; แล้วก็มีอีกกก &#129392;
                          </p>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default Home
