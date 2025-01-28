import React, { useEffect } from "react"
import { motion, useAnimate, stagger } from "framer-motion"

export const TextGenerateEffect = ({ words }) => {
  const [scope, animate] = useAnimate()
  const wordsArray = words.split(" ")

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      },
    )
  }, [animate])

  return (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => {
        return (
          <motion.span key={word + idx} className="opacity-0">
            {word}{" "}
          </motion.span>
        )
      })}
    </motion.div>
  )
}

