import { Search, User } from 'lucide-react'

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="text-sm text-[#800000]">
        Pages / <span className="font-semibold">Dashboard</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Type here..."
            className="px-4 py-2 pl-10 text-sm border rounded-full focus:outline-none border-gray-300 bg-white text-[#800000] placeholder-[#800000]"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#800000]" />
        </div>
        <div className="flex items-center gap-2 text-sm cursor-pointer text-[#800000] hover:text-red-700">
          <User className="w-4 h-4" />
          Sign In
        </div>
      </div>
    </header>
  )
}

export default Header
