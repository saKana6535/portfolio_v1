export function About() {
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
              エンジニアリングに対する情熱を持ち、技術を通じて価値のあるソリューションを創造することに喜びを感じています。
              常に新しい技術に挑戦し、学び続けることで、より良いプロダクトづくりに貢献したいと考えています。
              チームワークを大切にし、協力しながら課題解決に取り組むことを得意としています。
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
              {/* 学歴 */}
              <div className="relative">
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md"></div>
                <div className="ml-20">
                  <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h4 className="text-xl font-semibold text-foreground">
                        [大学名] [学部] [学科]
                      </h4>
                      <span className="text-sm text-muted-foreground md:text-base">
                        [在学期間]
                      </span>
                    </div>
                    <div className="space-y-3">
                      <h5 className="text-lg font-medium text-foreground">
                        研究内容: アピアランスベースアイトラッキング
                      </h5>
                      <p className="text-muted-foreground leading-relaxed">
                        アピアランスベースアイトラッキング技術の研究に従事しました。
                        従来の手法の課題を解決するため、機械学習を活用した新しいアプローチを提案し、
                        Python、OpenCV、TensorFlowを使用して実装を行いました。
                        研究成果は学会での発表や論文投稿を通じて発信し、
                        実用的なアプリケーションへの応用可能性を実証しました。
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                          Python
                        </span>
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                          OpenCV
                        </span>
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                          TensorFlow
                        </span>
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                          機械学習
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 職歴（サンプル） */}
              <div className="relative">
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md"></div>
                <div className="ml-20">
                  <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h4 className="text-xl font-semibold text-foreground">
                        [企業名・インターンシップ]
                      </h4>
                      <span className="text-sm text-muted-foreground md:text-base">
                        [役職] | [期間]
                      </span>
                    </div>
                    <div className="space-y-3">
                      <p className="text-muted-foreground leading-relaxed">
                        インターンシップにて実際の開発プロジェクトに参加し、
                        Webアプリケーションの開発に従事しました。
                        チーム開発の中でGitを使用したバージョン管理、
                        コードレビューの重要性を学び、実践的なスキルを身につけました。
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                          TypeScript
                        </span>
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                          React
                        </span>
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                          Git
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 