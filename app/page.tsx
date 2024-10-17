"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Hero from "@/components/sections/Hero";

export default function Component() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLinks = () => (
    <>
      <a href="#" className="hover:text-gray-300">
        Components
      </a>
      <a href="#" className="hover:text-gray-300">
        Templates
      </a>
      <a href="#" className="hover:text-gray-300">
        Docs
      </a>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-black text-white flex flex-col">
      <Hero />
      {/* <div className="flex-1 flex flex-col items-center justify-center p-4">
        <main className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-24 h-24 bg-blue-500 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-white rounded-full" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 leading-tight">
            The next generation
            <br />
            of writing emails
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            A collection of high-quality, unstyled components for
            <br />
            creating beautiful emails using React and TypeScript.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-black hover:bg-gray-200">
              Explore components
            </Button>
            <Button variant="outline" className="bg-gray-800 text-white border-gray-700 hover:bg-gray-700">
              <code>npx create-email@latest</code>
              <Copy className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </main>
        <footer className="mt-16 text-sm text-gray-500">
          Brought to you by <span className="font-semibold">Lupleg</span>
        </footer>
      </div> */}
    </div>
  );
}
