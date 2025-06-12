function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} NoteNest. All rights reserved.
          </p>
          <a
            href="https://github.com/yourusername/notesnest"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary mt-2 md:mt-0"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer 