import React from "react"
import { motion } from "framer-motion"
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards"

const testimonials = [
  {
    quote: "SolDrop made testing my dApps on Solana devnet a breeze. Highly recommended!",
    name: "Alex Johnson",
    title: "Blockchain Developer",
  },
  {
    quote: "The instant airdrops saved me countless hours during development. It's a game-changer!",
    name: "Sarah Lee",
    title: "Solana Project Manager",
  },
  {
    quote: "I love how easy it is to get test SOL. SolDrop is now an essential part of my workflow.",
    name: "Michael Chen",
    title: "Smart Contract Engineer",
  },
  {
    quote: "The user interface is intuitive, and the airdrops are lightning-fast. Great service!",
    name: "Emily Taylor",
    title: "DeFi Researcher",
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">What Developers Say</h2>
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>
    </section>
  )
}

export default Testimonials

