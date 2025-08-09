import { 
  SiPython, 
  SiSwift, 
  SiTypescript, 
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiTailwindcss 
} from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ReactNode
  description: string
  level: string
}

export function Skills() {
  const skills: Skill[] = [
    {
      name: 'Python',
      icon: <SiPython className="text-blue-500" size={40} />,
      description: '機械学習・データ分析・Webアプリケーション開発に使用。研究でのアイトラッキング実装など実践的な経験があります。',
      level: '上級'
    },
    {
      name: 'Swift',
      icon: <SiSwift className="text-orange-500" size={40} />,
      description: 'iOSアプリケーション開発に使用。SwiftUIを活用したモダンなUIの実装経験があります。',
      level: '中級'
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript className="text-blue-600" size={40} />,
      description: 'React・Next.jsを使用したWebアプリケーション開発。型安全性を重視した開発スタイルを実践しています。',
      level: '中級'
    },
    {
      name: 'C++',
      icon: <SiCplusplus className="text-purple-600" size={40} />,
      description: 'アルゴリズム実装・競技プログラミング・システムプログラミングに使用。パフォーマンスを重視した開発が可能です。',
      level: '中級'
    }
  ]

  const additionalSkills = [
    { name: 'React', icon: <SiReact className="text-cyan-500" size={24} /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" size={24} /> },
    { name: 'Git', icon: <SiGit className="text-red-500" size={24} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" size={24} /> }
  ]

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* メインスキル */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            主要技術スキル
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">
                      {skill.name}
                    </h4>
                    <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                      {skill.level}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* その他のスキル */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            その他の技術・ツール
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {additionalSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-card border border-border rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center space-y-2">
                  {skill.icon}
                  <span className="text-sm font-medium text-foreground">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* スキル習得への取り組み */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              継続的な学習への取り組み
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              新しい技術の習得に積極的に取り組み、オンライン学習プラットフォームや技術書、
              実際のプロジェクト開発を通じてスキルを向上させています。
              また、技術コミュニティへの参加や勉強会への参加を通じて、
              最新の技術トレンドをキャッチアップし続けています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 