'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FaGithub, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa'

export function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) return null

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-foreground">
              Soki Kokado
            </h1>
          </div>

          {/* ナビゲーションメニュー */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Skills
            </button>
          </nav>

          {/* 外部リンクとダークモード切り替え */}
          <div className="flex items-center space-x-4">
            {/* GitHub */}
            <a
              href="https://github.com/saKana6535"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            {/* メール */}
            <a
              href="k.souki1101@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>

            {/* ダークモード切り替え */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 p-2 rounded-md hover:bg-accent"
              aria-label="テーマを切り替え"
            >
              {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </div>

          {/* モバイル用ナビゲーション */}
          <div className="md:hidden">
            <div className="flex space-x-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Skills
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 