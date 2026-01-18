import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link href="/" className="font-bold text-xl tracking-tight">
          DevCode
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/problems" className="hover:text-foreground transition-colors">
            Problems
          </Link>
          <Link href="/contest" className="hover:text-foreground transition-colors">
            Contest
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            Discuss
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            Interview
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors text-orange-500">
            Store
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button size="sm">Register</Button>
        </div>
        <ModeToggle />
      </div>
    </nav>
  )
}
