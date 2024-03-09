import { Home, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    <nav className="h-full flex flex-col bg-white rounded p-4 gap-4">
        <Link href="/" className="navIcon w-10 h-10 flex items-center justify-center hover:shadow-md rounded transition-all ease-in-out duration-200 cursor-pointer">
        <Home strokeWidth={1} />
        </Link>
        <Link href="/" className="navIcon w-10 h-10 flex items-center justify-center hover:shadow-md rounded transition-all ease-in-out duration-200 cursor-pointer">
        <User color="#000000" strokeWidth={1} />
        </Link>
        <Link href="/" className="navIcon w-10 h-10 flex items-center justify-center hover:shadow-md rounded transition-all ease-in-out duration-200 cursor-pointer">
        <User color="#000000" strokeWidth={1} />
        </Link>

       

    </nav>
  )
}

export default Sidebar