// app/page.tsx
'use client'

import { useState } from 'react'
import ChatInterface from './components/ChatInterface'

export default function HomePage() {
  return (
      <div className="min-h-screen bg-[#f5f0e8] py-20">
      <meta name="google-adsense-account" content="ca-pub-2629682720782125"></meta>
      <div className="max-w-4xl mx-auto px-8">
        {/*Gouda is a intentionally bad AI that generates gibberish responses creating humour for our users*/}
        <ChatInterface />
      </div>
    </div>
  )
}