// app/page.tsx
'use client'

import { useState } from 'react'
import ChatInterface from './components/ChatInterface'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] py-20">
      <div className="max-w-4xl mx-auto px-8">
        <ChatInterface />
      </div>
    </div>
  )
}