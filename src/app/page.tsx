'use client'

import { Header } from '@/components/Header'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* メインコンテンツ */}
      <main>
        {/* ヒーローセクション */}
        <section className="pt-16 pb-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="pt-20 pb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                {/* Hello, I'm{' '} */}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Soki Kokado
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Software Engineer
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                2025年現在、大阪公立大学 工学部 情報科学科 4年生<br />
              </p>
              
              {/* CTAボタン */}
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    const element = document.getElementById('about')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  ↓詳しく見る↓
                </button>
              </div>
            </div>
          </div>
        </section>

        <About />
        <Skills />

        {/* お問い合わせセクション */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              お問い合わせ
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              ご質問やお仕事のご依頼など、お気軽にお問い合わせください。
            </p>
            <a
              href="mailto:k.souki1101@gmail.com"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              メールでお問い合わせ
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
