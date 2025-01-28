import React from "react"
import { motion } from "framer-motion"
import { AccordionDemo } from "./ui/AccordionDemo"

const faqItems = [
  {
    question: "What is SolDrop?",
    answer:
      "SolDrop is a service that provides free SOL tokens for the Solana devnet, helping developers test and build their applications without using real funds.",
  },
  {
    question: "How much SOL can I request?",
    answer: "You can request up to 2 SOL per airdrop. This limit helps ensure fair distribution among developers.",
  },
  {
    question: "Can I use these tokens on the Solana mainnet?",
    answer:
      "No, the SOL tokens you receive from SolDrop are only for use on the Solana devnet. They have no real-world value and cannot be transferred to the mainnet.",
  },
  {
    question: "How often can I request an airdrop?",
    answer:
      "You can request an airdrop once every 24 hours. This helps prevent abuse of the service and ensures availability for all developers.",
  },
  {
    question: "Do I need a specific wallet to use SolDrop?",
    answer:
      "SolDrop works with most Solana-compatible wallets. We recommend using Phantom or Sollet for the best experience.",
  },
]

const FAQ = () => {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <AccordionDemo items={faqItems} />
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ

