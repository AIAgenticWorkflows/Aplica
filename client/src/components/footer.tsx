import { Link } from "wouter";
import { Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Aplica</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Building AI-powered tools that make everyday decisions easier and smarter. 
              Thoughtful design, privacy-aware AI, and continuous learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/collaborate" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Collaborate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Aplica. All rights reserved. Building the future of AI-assisted decision making.</p>
        </div>
      </div>
    </footer>
  );
}
