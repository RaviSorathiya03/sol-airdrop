import React, { useState } from "react"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { motion } from "framer-motion"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"

const Hero = () => {
  const { connection } = useConnection()
  const { publicKey } = useWallet()
  const [amount, setAmount] = useState("")
  const [message, setMessage] = useState(null)

  const handleAirdrop = async () => {
    if (!publicKey) {
      setMessage({ type: "error", text: "Please connect your wallet first." })
      return
    }

    const amountToAirdrop = Number.parseFloat(amount)
    if (isNaN(amountToAirdrop) || amountToAirdrop <= 0) {
      setMessage({ type: "error", text: "Please enter a valid amount." })
      return
    }

    try {
      const signature = await connection.requestAirdrop(publicKey, amountToAirdrop * LAMPORTS_PER_SOL)
      setMessage({ type: "success", text: `Airdrop successful! Signature: ${signature}` })
    } catch (error) {
      setMessage({ type: "error", text: `Airdrop failed: ${error.message}` })
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <TextGenerateEffect words="Get Free SOL for Your Devnet Adventures" />
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Jumpstart your Solana development with our easy-to-use airdrop service.
          </p>
        </motion.div>
        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex mb-4">
            <input
              type="number"
              placeholder="Amount of SOL"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-grow px-4 py-2 rounded-l-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={handleAirdrop}
              className="px-6 py-2 rounded-r-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition"
            >
              Get Airdrop
            </button>
          </div>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-3 rounded-lg ${message.type === "success" ? "bg-green-800" : "bg-red-800"}`}
            >
              {message.text}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

