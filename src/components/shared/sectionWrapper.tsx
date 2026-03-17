"use client";
import { motion } from "framer-motion";

const SectionWrapper = ({
  children,
  variant,
  id,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  id?: string;
}) => {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }} // 👈 important
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      style={{
        backgroundColor:
          variant === "primary"
            ? "var(--col-200)"
            : variant === "secondary"
              ? "var(--body-color)"
              : "transparent",
      }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
