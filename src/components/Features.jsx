import React from "react"
import { motion } from "framer-motion"
import { LampContainer } from "./ui/LampContainer"

const features = [
  {
    title: "Instant Airdrops",
    description: "Get SOL tokens instantly credited to your wallet.",
    icon: "🚀",
  },
  {
    title: "User-Friendly",
    description: "Simple interface for seamless token requests.",
    icon: "😊",
  },
  {
    title: "Secure Transactions",
    description: "Your transactions are always safe and secure.",
    icon: "🔒",
  },
  {
    title: "Devnet Support",
    description: "Perfect for testing and development on Solana devnet.",
    icon: "🛠️",
  },
]

const Features = () => {
  return (
    <LampContainer>
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose SolDrop?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </LampContainer>
  )
}

export default Features

