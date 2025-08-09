export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Soki Kokado. All rights reserved.
          </p>
        </div>


      </div>
    </footer>
  )
} 