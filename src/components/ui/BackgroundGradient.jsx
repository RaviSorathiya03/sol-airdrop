import React from "react"
import { motion } from "framer-motion"

export const BackgroundGradient = ({ children, className, containerClassName, animate = true }) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  }
  return (
    <div className={`relative ${containerClassName} p-[4px] group`}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={`absolute inset-0 rounded-3xl opacity-60 group-hover:opacity-100 blur-xl transition duration-500 ${
          animate
            ? "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent)]"
            : "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent)]"
        }`}
      />
      <div className={`relative ${className} bg-slate-900 rounded-3xl p-8`}>{children}</div>
    </div>
  )
}

