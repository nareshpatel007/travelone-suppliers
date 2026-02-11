"use client"

import { LogIn } from "lucide-react"

export function LoginPage() {
    return (
        <div className="max-w-2xl mx-auto px-5 md:px-0 flex flex-col justify-center py-30 space-y-6">
            <div className="text-center px-4 space-y-2">
                <h1 className="text-black text-5xl md:text-4xl leading-tight font-normal">
                    Log In to your supplier account
                </h1>
                <p className="text-gray-600 text-base md:text-lg">
                    Enter your email address and password to log in to your supplier account.
                </p>
            </div>
            <div className="rounded-xl p-8 border border-gray-200 space-y-5">
                <div>
                    <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 text-sm md:text-base border border-gray-300 rounded-sm outline-none transition-all resize-none focus:ring-1 focus:ring-[#333] focus:ring-opacity-50"
                        placeholder="Enter email Address"
                    />
                </div>

                <div>
                    <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">Password</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 text-sm md:text-base border border-gray-300 rounded-sm outline-none transition-all resize-none focus:ring-1 focus:ring-[#333] focus:ring-opacity-50"
                        placeholder="Enter password"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <button
                        type="button"
                        className="flex justify-center w-full md:w-auto px-8 py-1.5 bg-black text-white text-sm md:text-base font-medium border border-black rounded-sm hover:bg-white hover:text-black cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        <LogIn size={20} /> Log In
                    </button>
                </div>
            </div>
        </div>
    )
}
