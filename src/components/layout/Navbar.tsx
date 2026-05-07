import Link from 'next/link'
import { Button } from '../ui/Button'
import { Leaf, Calendar, StickyNote, BookOpen } from 'lucide-react'

export const Navbar = () => {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 text-green-700 font-bold text-xl">
              <Leaf className="w-6 h-6" />
              <span>Couleurs au potager</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/blog" className="flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors">
              <BookOpen className="w-4 h-4" />
              <span>Blog</span>
            </Link>
            <Link href="/notes" className="flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors">
              <StickyNote className="w-4 h-4" />
              <span>Notes</span>
            </Link>
            <Link href="/calendar" className="flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Calendrier</span>
            </Link>
            <Button variant="primary" className="text-sm">Connexion</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
