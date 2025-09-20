import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Imagepning() {
    const [cardimage, setCardimage] = useState(false)
    const navigate = useNavigate()

    const handlehome = () => {
        navigate('/')
    }


    return (
        <>
            <div className="min-h-screen w-full py-4 px-2 bg-gradient-to-br from-purple-400 via-pink-500 to-pink-300 bg-[length:200%_200%] animate-gradient">
                <div className='flex justify-end'>
                    <button className='bg-white/60 text-pink-900 font-bold px-4 py-2 rounded-lg' onClick={handlehome}>Home</button>
                </div>
            </div>
        </>
    )
}

export default Imagepning