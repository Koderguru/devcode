"use client"

import * as React from "react"
import { Check, Calendar, Search, Settings, Filter, FileText, Share2, Database, Terminal, Zap, Code  } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { problems, problemTags } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

const categories = [
  { name: "All Topics", icon: <FileText className="h-4 w-4" /> },
  { name: "Algorithms", icon: <Share2 className="h-4 w-4" /> },
  { name: "Database", icon: <Database className="h-4 w-4" /> },
  { name: "Shell", icon: <Terminal className="h-4 w-4" /> },
  { name: "Concurrency", icon: <Zap className="h-4 w-4" /> },
  { name: "JavaScript", icon: <Code className="h-4 w-4" /> },
]

export function ProblemsTable() {
  const router = useRouter()

  return (
    <div className="space-y-4">
      {/* Category Toggles (Pills) */}
      <div className="flex flex-wrap gap-2 items-center">
        {categories.map((cat, i) => (
             <Button 
                key={cat.name} 
                variant="secondary" 
                size="sm"
                className={cn(
                    "rounded-full h-9 px-4 text-sm font-normal gap-2 border border-transparent hover:border-border transition-all",
                    i === 0 ? "bg-card hover:bg-card text-foreground font-medium shadow-sm" : "bg-muted/50 hover:bg-muted text-muted-foreground"
                )}
             >
                {cat.icon}
                {cat.name}
             </Button>
        ))}
        <Button variant="ghost" size="sm" className="text-xs text-blue-500 h-9 p-2 hover:bg-muted/50 rounded-full">
            Expand &gt;
        </Button>
      </div>

       {/* Detailed Tags (Optional - can be hidden or shown on expand) */}
       <div className="flex flex-wrap gap-2 pb-2">
           {problemTags.slice(0, 6).map((tag) => (
             <Badge
               key={tag.name}
               variant="outline"
               className="cursor-pointer hover:bg-muted px-2.5 py-0.5 text-[11px] font-normal text-muted-foreground border-transparent bg-muted/20"
             >
               {tag.name}
               <span className="ml-1 text-[9px] opacity-70">
                 {tag.count}
               </span>
             </Badge>
           ))}
       </div>

      {/* Search & Actions Bar */}
      <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-1 max-w-md">
             <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search questions" className="pl-9 h-9 bg-card border-none shadow-sm rounded-lg" />
             </div>
             <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground bg-card shadow-sm rounded-lg">
                <Settings className="h-4 w-4" />
             </Button>
             <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground bg-card shadow-sm rounded-lg">
                <Filter className="h-4 w-4" />
             </Button>
          </div>
          
          <div className="hidden sm:flex items-center gap-4 text-sm text-muted-foreground">
             <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500/50"></div>
                <span className="font-medium text-foreground">12</span>
                <span>/</span>
                <span>3816 Solved</span>
             </div>
             <Button variant="ghost" size="icon" className="h-8 w-8">
                 <Settings className="h-4 w-4 rotate-90" />
             </Button>
          </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">Status</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="w-[100px]">Solution</TableHead>
              <TableHead className="w-[100px]">Acceptance</TableHead>
              <TableHead className="w-[100px]">Difficulty</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {problems.map((problem) => (
              <TableRow 
                  key={problem.id} 
                  className={cn(
                      "cursor-pointer hover:bg-muted/50",
                      problem.id % 2 === 0 ? "bg-muted/10" : "bg-transparent" // Zebra striping effect
                  )}
                  onClick={() => router.push(`/problems/${problem.id}`)}
              >
                <TableCell>
                  {problem.status === "solved" && <Check className="h-4 w-4 text-green-500" />}
                  {problem.status === "calendar" && <Calendar className="h-4 w-4 text-blue-500" />}
                </TableCell>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground font-mono text-sm">{problem.id}.</span>
                    <span className="hover:text-primary transition-colors">{problem.title}</span>
                  </div>
                </TableCell>
                <TableCell>
                   {/* Solution icon placeholder - usually locked for free users in some cases */}
                   <span className="text-muted-foreground/30 text-xs">Page</span>
                </TableCell>
                <TableCell className="text-muted-foreground">{problem.acceptance}</TableCell>
                <TableCell>
                  <span
                    className={cn(
                      "font-medium",
                      problem.difficulty === "Easy" && "text-green-500",
                      problem.difficulty === "Medium" && "text-yellow-500",
                      problem.difficulty === "Hard" && "text-red-500"
                    )}
                  >
                    {problem.difficulty}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
