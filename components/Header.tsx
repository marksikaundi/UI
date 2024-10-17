"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4 sticky top-0 z-50 px-6 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Lupleg
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/blog" className="hover:text-gray-300">
            Blog
          </Link>
          <Link href="/customers" className="hover:text-gray-300">
            Customers
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:text-gray-300">
              Resources <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Resource 1</DropdownMenuItem>
              <DropdownMenuItem>Resource 2</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:text-gray-300">
              Docs <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>API Reference</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/pricing" className="hover:text-gray-300">
            Pricing
          </Link>
        </nav>

        {/* Desktop sign in and get started */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/signin" className="hover:text-gray-300">
            Sign in
          </Link>
          <Button
            variant="default"
            className="bg-white hover:bg-white text-black rounded-full "
          >
            Get Started
          </Button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
              <Link href="/blog" className="hover:text-gray-300">
                Blog
              </Link>
              <Link href="/customers" className="hover:text-gray-300">
                Customers
              </Link>
              <Link href="/resources" className="hover:text-gray-300">
                Resources
              </Link>
              <Link href="/docs" className="hover:text-gray-300">
                Docs
              </Link>
              <Link href="/pricing" className="hover:text-gray-300">
                Pricing
              </Link>
              <Link href="/signin" className="hover:text-gray-300">
                Sign in
              </Link>
              <Button
                variant="default"
                className="bg-white text-black rounded-full "
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
