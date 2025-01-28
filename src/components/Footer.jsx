import React from "react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img src="/solana-logo.svg" alt="Solana Logo" className="h-8 w-8 inline-block mr-2" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            SolDrop
          </span>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
          <a href="#features" className="text-gray-400 hover:text-white transition">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-400 hover:text-white transition">
            How It Works
          </a>
          <a href="#testimonials" className="text-gray-400 hover:text-white transition">
            Testimonials
          </a>
          <a href="#faq" className="text-gray-400 hover:text-white transition">
            FAQ
          </a>
        </nav>
      </div>
      <div className="mt-8 text-center text-gray-400 text-sm">
        © 2025 SolDrop. All rights reserved. |
        <a href="#" className="hover:text-white transition">
          Privacy Policy
        </a>{" "}
        |
        <a href="#" className="hover:text-white transition">
          Terms of Service
        </a>
      </div>
    </footer>
  )
}

export default Footer

