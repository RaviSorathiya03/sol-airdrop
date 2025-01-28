import React from "react"
import { motion } from "framer-motion"
import { BackgroundGradient } from "./ui/BackgroundGradient"

const steps = [
  {
    title: "Connect Your Wallet",
    description: "Link your Solana wallet to our platform with a single click.",
  },
  {
    title: "Enter SOL Amount",
    description: "Specify the amount of SOL you need for your devnet project.",
  },
  {
    title: "Request Airdrop",
    description: 'Click the "Get Airdrop" button to initiate the token transfer.',
  },
  {
    title: "Receive Tokens",
    description: "Watch as the SOL tokens are instantly credited to your wallet.",
  },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BackgroundGradient className="p-6 rounded-lg">
                <div className="text-3xl font-bold mb-4">{index + 1}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

