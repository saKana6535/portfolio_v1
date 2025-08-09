import { 
  SiPython, 
  SiSwift, 
  SiTypescript, 
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiTailwindcss,
  SiOpencv,
  SiTensorflow
} from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ReactNode
}

export function Skills() {
  const skills: Skill[] = [
    { name: 'Python', icon: <SiPython className="text-blue-500" size={32} /> },
    { name: 'Swift', icon: <SiSwift className="text-orange-500" size={32} /> },
    { name: 'C++', icon: <SiCplusplus className="text-purple-600" size={32} /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" size={32} /> },
    { name: 'React', icon: <SiReact className="text-cyan-500" size={32} /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" size={32} /> },
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

        {/* スキル一覧 */}
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-card border border-border rounded-lg p-6 shadow-sm"
            >
              <div className="flex flex-col items-center space-y-3">
                {skill.icon}
                <span className="text-sm font-medium text-foreground text-center">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 