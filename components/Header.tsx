'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import classNames from 'classnames'

const menuItems = [
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Ideas', href: '/ideas' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
]

const Header = () => {
    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const pathname = usePathname()

    const controlHeader = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setShow(false)
            } else {
                setShow(true)
            }
            setLastScrollY(window.scrollY)
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlHeader)
            return () => window.removeEventListener('scroll', controlHeader)
        }
    }, [lastScrollY])

    return (
        <header
            className={classNames(
                'fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4',
                {
                    '-translate-y-full': !show,
                    'bg-[#f26821]/90 backdrop-blur-sm shadow-sm': show,
                }
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/">
                    <Image src="/suitmedia-logo.png" alt="Suitmedia Logo" width={100} height={30} />
                </Link>
                <nav className="hidden md:flex space-x-6 text-white font-medium text-sm">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={classNames('hover:underline text-white', {
                                'underline': pathname === item.href,
                                'text-[#f26821]': pathname === item.href && item.label !== 'Ideas',
                            })}
                        >
                            {item.label}
                        </Link>

                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Header
