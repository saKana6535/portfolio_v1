'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FaGithub, FaSun, FaMoon } from 'react-icons/fa'

export function Header() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills']
      const scrollPosition = window.scrollY + 100 // ヘッダーの高さを考慮

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = window.scrollY + rect.top
          const elementBottom = elementTop + rect.height

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section)
            break
          }
        }
      }

      // ページの一番上にいる場合は何も選択しない
      if (window.scrollY < 100) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初期状態をチェック

    return () => window.removeEventListener('scroll', handleScroll)
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
          {/* ナビゲーションメニュー（左側） */}
          <nav className="flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`relative transition-colors duration-200 ${
                activeSection === 'about'
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              About Me
              {activeSection === 'about' && (
                <div className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`relative transition-colors duration-200 ${
                activeSection === 'skills'
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Skills
              {activeSection === 'skills' && (
                <div className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          </nav>

          {/* 外部リンクとダークモード切り替え（右側） */}
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

            {/* ダークモード切り替え */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 p-2 rounded-md hover:bg-accent"
              aria-label="テーマを切り替え"
            >
              {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 