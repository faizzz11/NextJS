import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link href="" className="hover:underline">Faizzzz</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link href="about" className="hover:underline me-4 md:me-6">About </Link>
        </li>
        <li>
            <Link href="/" className="hover:underline me-4 md:me-6">Home</Link>
        </li>
        <li>
            <Link href="/contact" className="hover:underline">Contact</Link>
        </li>
    </ul>
    </div>
</footer>
    </div>
  )
}

export default Footer
