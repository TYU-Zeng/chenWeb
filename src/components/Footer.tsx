export default function Footer() {
  return (
    <footer className="bg-transparent text-white/60 py-20 mt-32 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm">
            © {new Date().getFullYear()} Chen Photography. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="mailto:chen@example.com"
              className="hover:text-white transition-colors text-sm"
            >
              Email
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors text-sm"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors text-sm"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

