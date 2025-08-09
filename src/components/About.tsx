interface Experience {
  period: {
    start: string
    end: string | null // nullの場合は「現在」
  }
  title: string
  subtitle?: string
  description?: string
  tags?: string[]
}

interface ExperienceItemProps {
  experience: Experience
}

function ExperienceItem({ experience }: ExperienceItemProps) {
  const formatPeriod = () => {
    const end = experience.period.end || '現在'
    return `${experience.period.start} 〜 ${end}`
  }

  return (
    <div className="relative">
      {/* タイムライン円 */}
      <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md" style={{top: '20px'}}></div>
      
      <div className="ml-20">
        {/* 統合されたコンテンツタイル */}
        <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
          {/* ヘッダー部分（期間表示） */}
          <div className="bg-primary text-primary-foreground px-6 py-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <span className="font-bold text-sm">{formatPeriod()}</span>
            </div>
          </div>
          
          {/* コンテンツ部分 */}
          <div className="p-6">
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-foreground">
                {experience.title}
              </h4>
              {experience.subtitle && (
                <span className="text-sm text-muted-foreground">
                  {experience.subtitle}
                </span>
              )}
            </div>
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                {experience.description}
              </p>
              {experience.tags && experience.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {experience.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function About() {
  // 経歴データ（新しい経歴を追加するにはここに追加）
  const experiences: Experience[] = [
    {
      period: {
        start: '2022.04',
        end: null // 現在
      },
      title: '大阪公立大学 工学部 情報工学科',
      description: '情報工学やプログラミングの基礎について学んだ。',
      tags: ['C++', 'Python'],
    },
    {
      period: {
        start: '2024.10',
        end: null // 現在
      },
      title: '拡張知能研究グループ',
      description: 'アピアランスベースアイトラッキング技術についての研究を行っています。具体的に、アイトラッキングシステムのインターフェース開発やモデルの構築、ファインチューニングによる視線推定精度向上に取り組んでいます。',
      tags: ['Swift', 'Python', 'CoreML', '機械学習', 'アイトラッキング'],
    },
    {
      period: {
        start: '2025.03',
        end: null //現在
      },
      title: '株式会社Affectify',
      subtitle: 'ソフトウェアエンジニア',
      description: 'アルバイトにて、主にWebアプリのフロントエンド開発を行なっている。',
      tags: ['TypeScript', 'Next.js', 'React'],
    },
    // 新しい経歴を追加する場合はここに追加
    // タグなしの経歴例：
    // {
    //   period: {
    //     start: '2024.01',
    //     end: '2024.03'
    //   },
    //   title: '経歴タイトル',
    //   description: '詳細説明...',
    //   // tags は省略可能
    // }
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* 自己紹介 */}
        <div className="mb-16">
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <p className="text-lg leading-relaxed text-muted-foreground">
              2002年11月生まれ<br />
              出身: 福井県<br />
              趣味: ゲーム、サッカー、バドミントン
            </p>
          </div>
        </div>

        {/* 経歴タイムライン */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            経歴
          </h3>
          
          <div className="relative">
            {/* タイムライン線 */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <ExperienceItem key={index} experience={experience} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 