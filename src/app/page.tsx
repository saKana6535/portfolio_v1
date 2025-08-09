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
                Hello, I&apos;m{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  あなたの名前
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                エンジニア・研究者・技術愛好家
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                アピアランスベースアイトラッキングの研究から始まり、
                Web開発、モバイルアプリ開発まで幅広い技術領域に取り組んでいます。
                新しい技術で価値のあるソリューションを創造することに情熱を注いでいます。
              </p>
              
              {/* CTAボタン */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const element = document.getElementById('about')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  詳しく見る
                </button>
                <a
                  href="mailto:your.email@example.com"
                  className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                >
                  お問い合わせ
                </a>
              </div>
            </div>
          </div>
        </section>

        <About />
        <Skills />
      </main>

      <Footer />
    </div>
  )
}
