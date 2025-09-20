import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



function Home() {

    const [cardShow, setCardshow] = useState(false)
    const [cardinShow, setCardinshow] = useState(false)
    const navigate = useNavigate()

    const handlecardShow = () => {
        setCardshow(prev => !prev)
        setCardinshow(false)
    }
    const handlecardinShow = () => {
        setCardinshow(prev => !prev)
    }

    const handleimageShow = () => {
        navigate('/Imagepning')
    }


    return (
        <>
            <div className="flex flex-col justify-center min-h-screen w-full py-4 px-2 bg-gradient-to-br from-purple-400 via-pink-500 to-pink-300 bg-[length:200%_200%] animate-gradient">
                <div className='bg-white/50 p-2 rounded-3xl'>

                    <div className='bg-white/60 text-center text-xl text-pink-900 p-2 rounded-full font-bold'>&#129392; HAPPY BIRTHDAY TO P.NING &#129392;</div>
                    <div className='flex justify-center'
                        onClick={handlecardShow}>
                        <button className='bg-pink-800/60 text-center mt-4 p-2 w-auto text-white rounded-3xl'>
                            <p className='text-xl mb-2 font-bold'>&#128073; กดเปิดอ่านตรงนี้นะคะ &#128072;</p>

                        </button>
                    </div>
                    {cardShow && (
                        <>
                            <div className='bg-white/60 h-auto text-center mt-4 py-2 px-1 text-pink-900 rounded-3xl'>
                                <p className='text-xl mb-2 font-bold'>&#127881; สุขสันต์วันเกิดนะค๊าบบบบ &#127881;</p>
                                <p>ปีนี้ก็อายุ 26 แล้วแถมมีเด็กชื่อนนท์เพิ่มมาอีกคน</p>
                                <p>ขอให้ปีนี้ของพี่เต็มไปด้วยความสุข ความสำเร็จ</p>
                                <p>สุขภาพร่างกายแข็งแรง มีความสุขมาก ๆ</p>
                                <p>และรอยยิ้มที่สวยเหมือนเดิมนะค๊าบบ</p>
                                <p>นนท์ดีใจที่ได้รู้จักพี่มาก ๆ เลย &#129392;</p>
                            </div>
                            <div className='flex justify-center'>
                                <button className='bg-pink-800/60 text-center mt-4 p-2 w-auto text-white rounded-3xl' onClick={handlecardinShow}>
                                    <p className='text-xl mb-2 font-bold'>&#128150; มีอีกกกกกก &#128150;</p>
                                </button>
                            </div>
                            {cardinShow && (
                                <>
                                    <div className='bg-white/60 h-auto text-center mt-4 py-2 px-1 text-pink-900 rounded-3xl'>
                                        <p className='text-xl mb-2 font-bold'>&#128147; นนท์อยากจะบอกพี่ว่า &#128147;</p>
                                        <p>&#129392; นนท์รักพี่มาก ๆ นะคะ &#129392;</p>
                                        <p>อยู่กับนนท์ไปนาน ๆ เลยน้าาาา</p>
                                        <p>นนท์จะทำให้พี่เป็นคนที่ถูกรักอย่างดี</p>
                                        <p>รักพี่ที่สุดเลยยยยย รักพี่แค่คนเดียวด้วย</p>
                                        <p>&#128149; นนท์รักพี่หนิงนะคะ &#128149;</p>
                                    </div>
                                    <div className='flex justify-center'>
                                        <button className='bg-pink-800/60 text-center mt-4 p-2 w-auto text-white rounded-3xl' onClick={handleimageShow}>
                                            <p className='text-xl mb-2 font-bold'>&#129392; แล้วก็มีอีกกก &#129392;</p>
                                        </button>
                                    </div>
                                </>
                            )}

                        </>
                    )}

                </div>

            </div>
        </>
    )
}

export default Home