import { motion } from "framer-motion";
import { ReactNode } from "react";

interface EnterAnimationProps {
    children: ReactNode;
}

export default function EnterAnimation({ children }: EnterAnimationProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", bounce: 0.5 },
            }}
        >
            {children}
        </motion.div>
    );
}