import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-green-600">Wormstop</span>
        </Link>
        <Link 
          href="/news" 
          className="text-gray-700 hover:text-green-600 font-medium transition-colors"
        >
          Янгиликлар
        </Link>
      </div>
    </header>
  )
}
