import { FaGithub, FaEnvelope } from 'react-icons/fa'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* 著作権 */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {currentYear} あなたの名前. All rights reserved.
            </p>
          </div>

          {/* 外部リンク */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center space-x-2"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
              <span className="text-sm">GitHub</span>
            </a>

            <a
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center space-x-2"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
              <span className="text-sm">Contact</span>
            </a>
          </div>
        </div>

        {/* 追加メッセージ */}
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            このサイトは Next.js と Tailwind CSS で作成されています
          </p>
        </div>
      </div>
    </footer>
  )
} 