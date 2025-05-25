import React from 'react'
import { Menu, X } from "lucide-react";
import { useState } from "react";
import img from "../assets/logo.png"
import { navItems } from "../constants";
export default function Navbar() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

    return (
        <>
            <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg bg-neutral-900/50 border-b border-neutral-700/80">
  <div className="container px-4 mx-auto relative text-sm">
    <div className="flex justify-between items-center">
      
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <img src={img} alt="logo" className="w-10 h-10 m-3" />
        <span className="text-xl tracking-tight text-white">VirtualR</span>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex ml-14 space-x-12 text-white">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.href} className="hover:text-orange-500 transition">{item.label}</a>
          </li>
        ))}
      </ul>

      {/* Auth Links */}
      <div className="hidden lg:flex justify-center space-x-6 items-center">
        <a href="#" className="py-2 px-4 border border-white/20 text-white rounded-md hover:bg-white/10 transition">Sign In</a>
        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 text-white px-4 py-2 rounded-md hover:opacity-90 transition">
          Create Account
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden md:flex flex-col justify-end">
        <button onClick={toggleNavbar} className="text-white">
          {mobileDrawerOpen ? <X /> : <Menu />}
        </button>
      </div>
    </div>

    {/* Mobile Drawer */}
    {mobileDrawerOpen && (
      <div className="fixed top-0 right-0 z-50 bg-neutral-900 w-full h-screen p-12 flex flex-col justify-center items-center lg:hidden">
        <ul className="text-white space-y-6 text-xl mb-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} onClick={() => setMobileDrawerOpen(false)}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex space-x-6">
          <a href="#" className="py-2 px-4 border border-white/20 text-white rounded-md hover:bg-white/10 transition">Sign In</a>
          <a href="#" className="py-2 px-4 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white hover:opacity-90 transition">
            Create Account
          </a>
        </div>
      </div>
    )}
  </div>
</nav>


        </>
    )
}
