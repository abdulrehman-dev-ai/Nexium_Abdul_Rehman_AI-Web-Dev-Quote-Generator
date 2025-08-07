"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";

const CATEGORIES = [
  "inspiration",
  "life", 
  "success",
  "motivation",
  "wisdom",
  "humor",
  "love",
  "mindfulness",
  "creativity",
  "leadership",
  "perseverance",
  "happiness",
  "growth",
  "courage",
  "friendship"
];

export default function Assignment1Page() {
  const [customTopic, setCustomTopic] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("inspiration");
  const [quotes, setQuotes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const quotesPerPage = 3;

  const handleGenerate = async () => {
    const topic = customTopic.trim() || selectedCategory;
    
    if (!topic) {
      setError("Please enter a topic or select a category");
      return;
    }

    setIsLoading(true);
    setError("");
    setQuotes([]);
    setCurrentPage(0);

    try {
      const response = await fetch('/api/generate-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: topic,
          category: customTopic ? selectedCategory : undefined
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate quotes');
      }

      setQuotes(data.quotes);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate quotes');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-gray-900">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0 opacity-30"
      >
        <source src="/images/mylivewallpapers-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main content */}
      <main className="relative z-10 flex-grow px-4 py-6 sm:py-10">
        <div className="container mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent tracking-tight mb-6 leading-tight">
                AI Quote Generator
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
                Harness the power of artificial intelligence to create
                <span className="text-purple-300 font-medium"> inspiring quotes </span>
                tailored to any topic you desire.
              </p>
            </motion.div>
          </div>

          {/* Input Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"></div>
                <CardContent className="relative p-10 space-y-8">
                  <div className="space-y-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="block text-sm font-semibold text-white/90 mb-3 tracking-wide uppercase">
                          ✨ Custom Topic
                        </label>
                        <Input
                          type="text"
                          placeholder="Enter any topic... (e.g., innovation, mindfulness)"
                          value={customTopic}
                          onChange={(e) => setCustomTopic(e.target.value)}
                          className="w-full bg-white/30 backdrop-blur-xl border border-white/60 text-white placeholder-white/200 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 rounded-2xl px-6 py-5 shadow-2xl transition-all duration-300 text-lg font-medium hover:bg-white/40"
                        />
                      </div>
                      
                      <div className="space-y-3">
                         <label className="block text-sm font-semibold text-white/90 mb-3 tracking-wide uppercase">
                           🎯 Quick Categories
                         </label>
                         <select
                           className="w-full bg-white/15 backdrop-blur-xl border border-white/40 text-white focus:outline-none focus:ring-2 focus:ring-purple-400/70 focus:border-purple-400/50 rounded-2xl px-2 py-2 shadow-xl transition-all duration-300 text-lg font-medium hover:bg-white/20 cursor-pointer"
                          style={{
                            WebkitTextFillColor: "white",
                          }}
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                          {CATEGORIES.map((category) => (
                            <option
                              key={category}
                              className="bg-gray-900/95 text-white font-medium"
                              value={category}
                            >
                              {category.charAt(0).toUpperCase() + category.slice(1)}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-center pt-6">
                      <Button
                        onClick={handleGenerate}
                        disabled={isLoading}
                        className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 disabled:from-purple-400 disabled:via-pink-400 disabled:to-blue-400 border-0 text-white font-bold px-12 py-6 rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-purple-500/25 disabled:transform-none text-xl flex items-center gap-3 overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10 flex items-center gap-3">
                          {isLoading ? (
                            <>
                              <RefreshCw className="w-6 h-6 animate-spin" />
                              <span className="animate-pulse">Generating AI Quotes...</span>
                            </>
                          ) : (
                            <>
                              <span className="text-2xl">🚀</span>
                              <span>Generate AI Quotes</span>
                            </>
                          )}
                        </div>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Error Display */}
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-3xl mx-auto mb-12"
            >
              <Card className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-xl border border-red-400/40 rounded-2xl shadow-xl">
                <CardContent className="p-8 text-red-200 text-center text-xl font-medium">
                  <span className="text-3xl mb-4 block">⚠️</span>
                  {error}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Quotes Display Section */}
          <AnimatePresence mode="wait">
            {quotes.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Header */}
                <div className="text-center mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
                      ✨ AI Generated Quotes
                    </h2>
                    {customTopic && (
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-lg border border-white/30 rounded-full px-6 py-3">
                        <span className="text-2xl">🎯</span>
                        <p className="text-xl text-purple-200 font-medium">
                          About &ldquo;{customTopic}&rdquo;
                        </p>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Quotes Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {quotes
                    .slice(currentPage * quotesPerPage, (currentPage + 1) * quotesPerPage)
                    .map((quote, idx) => (
                      <motion.div
                        key={quote + idx + currentPage}
                        initial={{ opacity: 0, scale: 0.8, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          delay: idx * 0.15,
                          duration: 0.6,
                          ease: "easeOut",
                        }}
                        className="h-full group"
                      >
                        <Card className="relative bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl overflow-hidden h-full hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 hover:border-purple-400/50 group-hover:bg-gradient-to-br group-hover:from-white/25 group-hover:via-white/15 group-hover:to-white/10">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <CardContent className="relative p-10 flex items-center justify-center h-full min-h-[280px]">
                            <blockquote className="text-white text-center space-y-6">
                              <div className="text-4xl mb-4 opacity-60">💭</div>
                              <p className="text-xl leading-relaxed font-medium text-gray-100 group-hover:text-white transition-colors duration-300">
                                &ldquo;{quote}&rdquo;
                              </p>
                              <div className="flex justify-center">
                                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full group-hover:w-20 transition-all duration-300"></div>
                              </div>
                              <div className="text-sm text-gray-400 font-light tracking-wider uppercase">
                                AI Generated
                              </div>
                            </blockquote>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                </div>

                {/* Pagination */}
                {quotes.length > quotesPerPage && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="flex justify-center items-center gap-6 mt-12"
                  >
                    <Button
                      onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                      disabled={currentPage === 0}
                      variant="outline"
                      className="bg-white/15 backdrop-blur-xl border-white/40 text-white hover:bg-white/25 hover:border-purple-400/50 disabled:opacity-40 disabled:cursor-not-allowed px-6 py-3 rounded-2xl flex items-center gap-3 font-medium transition-all duration-300 hover:scale-105 disabled:hover:scale-100 shadow-lg"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Previous
                    </Button>
                    
                    <div className="flex items-center gap-2">
                      {Array.from({ length: Math.ceil(quotes.length / quotesPerPage) }, (_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            i === currentPage
                              ? 'bg-gradient-to-r from-purple-400 to-blue-400 scale-125'
                              : 'bg-white/30 hover:bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <Button
                      onClick={() => setCurrentPage(Math.min(Math.ceil(quotes.length / quotesPerPage) - 1, currentPage + 1))}
                      disabled={currentPage >= Math.ceil(quotes.length / quotesPerPage) - 1}
                      variant="outline"
                      className="bg-white/15 backdrop-blur-xl border-white/40 text-white hover:bg-white/25 hover:border-purple-400/50 disabled:opacity-40 disabled:cursor-not-allowed px-6 py-3 rounded-2xl flex items-center gap-3 font-medium transition-all duration-300 hover:scale-105 disabled:hover:scale-100 shadow-lg"
                    >
                      Next
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
       <div className="relative z-20 mt-20 text-center p-8">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8, duration: 0.6 }}
           className="text-sm text-white/60"
         >
           Developed with dedication by{" "}
           <a
             href="https://abdulrehmansarwar.vercel.app/"
             target="_blank"
             rel="noopener noreferrer"
             className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300 hover:underline"
           >
             Abdul Rehman
           </a>{" "}
           as part of a{" "}
           <a
             href="https://www.nexium.ltd/"
             target="_blank"
             rel="noopener noreferrer"
             className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300 hover:underline"
           >
             Nexium Software Internship Project
           </a>.
         </motion.div>
       </div>
    </div>
  );
}
