import { Leaf } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-green-700 font-semibold">
            <Leaf className="w-5 h-5" />
            <span>Couleurs au potager</span>
          </div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Couleurs au potager. Tous droits réservés.
          </div>
          <div className="flex space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-green-600 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-green-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
