import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="w-full bg-[#f5f0e8] px-4 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="text-3xl"><Image src={"/gouda.png"} width={64} height={64} alt='logo'/></div>
          <span className="text-2xl font-bold text-[#64401e]">Gouda AI</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link 
            href="/about" 
            className="px-4 py-2 text-[#64401e] hover:bg-[#d7c3aa] rounded-lg transition-colors font-medium"
          >
            About
          </Link>
          <Link 
            href="/updates" 
            className="px-4 py-2 text-[#64401e] hover:bg-[#d7c3aa] rounded-lg transition-colors font-medium"
          >
            Updates
          </Link>
          <Link 
            href="/account" 
            className="p-2 text-[#64401e] hover:bg-[#d7c3aa] rounded-lg transition-colors"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
              />
            </svg>
          </Link>
          {/* Theme toggle placeholder */}
          <button className="p-2 text-[#64401e] hover:bg-[#d7c3aa] rounded-lg transition-colors">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}