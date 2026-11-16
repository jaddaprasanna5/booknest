import React from 'react'
import Link from 'next/link'
export default function Navbar() {
    return (
        <nav className="bg-slate-900 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold text-amber-400">BookNest</Link>
                    <div className="hidden md:flex items-center gap-8">
                        <Link href= "/" className="hover:text-amber-400 transition">Home</Link>
                        <Link href= "/about" className="hover:text-amber-400 transition">About</Link>
                        <Link href= "/books" className="hover:text-amber-400 transition">Books</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/login" className="hover:text-amber-400 transition">Login</Link>
                        <Link href="/register" className="bg-amber-400 text-slate-900 px-4 py-2 rounder-lg font-semibold hover:bg-amber-300 transition">Register</Link>

                    </div>
                </div>
            </div>
        </nav>
    )
}

