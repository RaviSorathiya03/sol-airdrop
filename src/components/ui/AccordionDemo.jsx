import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const AccordionDemo = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-700">
          <button
            className="flex justify-between items-center w-full py-4 text-left"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-medium">{item.question}</span>
            <span className="text-2xl">{activeIndex === index ? "−" : "+"}</span>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="py-4 text-gray-400">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

