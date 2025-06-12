import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            NoteNest
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-primary px-3 py-2 rounded-md"
            >
              Home
            </Link>
            {user ? (
              <>
                <Link
                  to="/my-notes"
                  className="text-gray-600 hover:text-primary px-3 py-2 rounded-md"
                >
                  My Notes
                </Link>
                <Link
                  to="/purchases"
                  className="text-gray-600 hover:text-primary px-3 py-2 rounded-md"
                >
                  Purchases
                </Link>
                <Link
                  to="/upload"
                  className="btn btn-primary"
                >
                  Upload Notes
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-primary px-3 py-2 rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-primary px-3 py-2 rounded-md"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-primary"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block text-gray-600 hover:text-primary px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              {user ? (
                <>
                  <Link
                    to="/my-notes"
                    className="block text-gray-600 hover:text-primary px-3 py-2 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Notes
                  </Link>
                  <Link
                    to="/purchases"
                    className="block text-gray-600 hover:text-primary px-3 py-2 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Purchases
                  </Link>
                  <Link
                    to="/upload"
                    className="block text-gray-600 hover:text-primary px-3 py-2 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Upload Notes
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsMenuOpen(false)
                    }}
                    className="block w-full text-left text-gray-600 hover:text-primary px-3 py-2 rounded-md"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block text-gray-600 hover:text-primary px-3 py-2 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block text-gray-600 hover:text-primary px-3 py-2 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation 