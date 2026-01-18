import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <main className="flex flex-col items-center gap-8 text-center p-8">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          DevCode
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          The ultimate platform to sharpen your coding skills. Join contests, solve problems, and compete with the best.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="/contest">
              Go to Contests
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/problems">
              Problem Set
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
