'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Banner = () => {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      {/* Gambar banner dengan efek parallax */}
      <div
        className="absolute w-full h-full top-0 left-0 z-0 transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      >
        <Image
          src="/banner.jpg" // Ganti ke path dari CMS jika tersedia
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Teks di atas gambar */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white h-full text-center">
        <h1 className="text-4xl font-bold drop-shadow-md">Ideas</h1>
        <p className="text-sm mt-2 drop-shadow">Where all our great things begin</p>
      </div>

      {/* Elemen miring bawah: miring ke kanan */}
      <div
        className="absolute bottom-0 left-0 w-full h-16 bg-white z-20"
        style={{ clipPath: 'polygon(0 100%, 100% 0%, 100% 100%)' }}
      ></div>
    </div>
  )
}

export default Banner
