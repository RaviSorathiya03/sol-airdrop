import React from "react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"

const Header = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/solana-logo.svg" alt="Solana Logo" className="h-8 w-8" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            SolDrop
          </span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-300 hover:text-white transition">
            How It Works
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition">
            Testimonials
          </a>
          <a href="#faq" className="text-gray-300 hover:text-white transition">
            FAQ
          </a>
        </nav>
        <WalletMultiButton className="!bg-gradient-to-r from-purple-500 to-pink-500 !rounded-full" />
      </div>
    </header>
  )
}

export default Header

