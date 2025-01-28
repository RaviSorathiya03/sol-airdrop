import React from "react"
import { WalletProvider, ConnectionProvider } from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import { clusterApiUrl } from "@solana/web3.js"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import { BackgroundBeams } from "./components/ui/BackgroundBeams"
import "@solana/wallet-adapter-react-ui/styles.css"
import "./index.css"

const App = () => {
  const network = "devnet"
  const endpoint = clusterApiUrl(network)
  const wallets = [new PhantomWalletAdapter()]

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen bg-black text-white overflow-hidden">
            <BackgroundBeams />
            <div className="relative z-10">
              <Header />
              <Hero />
              <Features />
              <HowItWorks />
              <Testimonials />
              <FAQ />
              <Footer />
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App

