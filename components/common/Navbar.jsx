"use client";
import { useTheme } from "next-themes";
import { Bot, LayoutDashboard, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { signInAction } from "@/actions/auth-action";
import { useSession } from "next-auth/react";
import Link from "next/link";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { data: session } = useSession();

  // useEffect(() => setMounted(true), []);
  // if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/70 dark:bg-[#1e2124]/70 shadow-lg sticky top-0 z-50 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex justify-between items-center h-20">
          <motion.div
            className="flex items-center group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <Bot className="h-8 w-8 text-[#7289da]" />
              <motion.div
                className="absolute -inset-2 bg-[#7289da]/20 rounded-full blur-md"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <div className="ml-3 relative">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7289da] to-[#424549] dark:from-[#7289da] dark:to-white">
                Todovex
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7289da]"
                animate={{ width: isHovered ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          <div className="flex items-center gap-6">
            <motion.label
              className="relative inline-block w-16 h-8 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="opacity-0 w-0 h-0"
              />
              <motion.span
                className={`
                  absolute inset-0 rounded-full transition-all duration-300 
                  ${
                    theme === "dark"
                      ? "bg-gray-900 shadow-inner shadow-gray-800"
                      : "bg-blue-500 shadow-inner shadow-blue-600"
                  }
                `}
              >
                <motion.span
                  className={`
                    absolute w-6 h-6 rounded-full top-1 left-1
                    transition-all duration-500 ease-in-out
                    ${
                      theme === "dark"
                        ? "translate-x-8 bg-gray-100 shadow-[inset_-3px_-2px_3px_0px_rgba(0,0,0,0.6)]"
                        : "translate-x-0 bg-yellow-300 shadow-[0_0_4px_rgba(0,0,0,0.2)]"
                    }
                  `}
                >
                  <motion.span
                    className={`
                      absolute inset-0 rounded-full
                      ${
                        theme === "dark"
                          ? "bg-gradient-to-br from-gray-100 to-gray-300"
                          : "bg-gradient-to-br from-yellow-200 to-yellow-400"
                      }
                    `}
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: theme === "dark" ? [0, 360] : [360, 0],
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                  />
                </motion.span>
              </motion.span>
            </motion.label>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {session ? (
                <Link href="/dashboard">
                  <Button
                    className="
                    bg-gradient-to-r from-[#7289da] to-[#7159da] 
                    hover:from-[#7159da] hover:to-[#7289da]
                    text-white px-6 py-2 rounded-lg 
                    transition-all duration-300
                    shadow-lg shadow-[#7289da]/20 
                    hover:shadow-xl hover:shadow-[#7289da]/30
                    font-semibold
                    "
                  >
                    <span className="flex items-center gap-2">
                      Dashboard <LayoutDashboard className="h-4 w-4" />
                    </span>
                  </Button>
                </Link>
              ) : (
                <form action={signInAction}>
                  <Button
                    className="
                    bg-gradient-to-r from-[#7289da] to-[#7159da] 
                    hover:from-[#7159da] hover:to-[#7289da]
                    text-white px-6 py-2 rounded-lg 
                    transition-all duration-300
                    shadow-lg shadow-[#7289da]/20 
                    hover:shadow-xl hover:shadow-[#7289da]/30
                    font-semibold
                    "
                  >
                    <span className="flex items-center gap-2">
                      Login With Google <Sparkles className="h-4 w-4" />
                    </span>
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
