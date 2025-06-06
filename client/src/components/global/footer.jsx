import React from 'react'
import Logo from './logo'






export default function Footer() {
    return (
      <footer className="py-8 px-6 bg-green-900 text-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Logo />
              <p className="mt-4">Connecting experts with clients who need their specialized knowledge.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">IT Consulting</a></li>
                <li><a href="#" className="hover:underline">Ecommerce</a></li>
                <li><a href="#" className="hover:underline">Legal</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">How It Works</a></li>
                <li><a href="#" className="hover:underline">Sign Up</a></li>
                <li><a href="#" className="hover:underline">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <p>info@parrotconsult.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Parrot Consult. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }