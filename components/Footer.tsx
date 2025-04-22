import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Brand Section */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 space-y-3">
            <h2 className="text-xl font-bold text-primary">EmoTrack</h2>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Empowering mental health through innovative technology and compassionate care.
            </p>
            <div className="flex space-x-3">
              <Link href="https://facebook.com" className="text-gray-600 hover:text-primary transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href="https://twitter.com" className="text-gray-600 hover:text-primary transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="https://instagram.com" className="text-gray-600 hover:text-primary transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-600 hover:text-primary transition-colors">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-muted-foreground hover:text-primary transition-colors">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-primary">Resources</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-primary">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin size={16} />
                <span>123 Mental Health Street, WC 12345</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail size={16} />
                <span>support@moodmap.com</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone size={16} />
                <span>(123) 456-7890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-center text-muted-foreground text-xs">
            © {new Date().getFullYear()} MoodMap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 