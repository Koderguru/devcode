"use client"

import * as React from "react"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { trendingCompanies } from "@/lib/mock-data"

export function TrendingCompanies() {
  return (
    <Card className="border-none shadow-none bg-background mt-6">
      <CardHeader className="p-0 pb-4 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium">Trending Companies</CardTitle>
        <div className="flex gap-1">
             <Button variant="ghost" size="icon" className="h-5 w-5"><ChevronLeft className="h-3 w-3" /></Button>
             <Button variant="ghost" size="icon" className="h-5 w-5"><ChevronRight className="h-3 w-3" /></Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 space-y-3">
         <div className="relative">
            <Search className="absolute left-2 top-2 h-4 w-4 text-muted-foreground" />
            <Input className="pl-8 h-8 text-xs bg-muted/30 border-none" placeholder="Search for a company..." />
         </div>

         <div className="flex flex-wrap gap-2">
            {trendingCompanies.map((company) => (
               <Badge 
                  key={company.name} 
                  variant="secondary" 
                  className={`
                     cursor-pointer hover:bg-muted font-normal text-xs px-2 py-1 gap-1
                     ${company.isHot ? "bg-muted/40" : "bg-muted/20 text-muted-foreground"}
                  `}
               >
                  {company.name}
                  <span className={`text-[10px] px-1 rounded-sm ${company.isHot ? "bg-orange-500 text-white" : "bg-muted-foreground/20 text-muted-foreground"}`}>
                      {company.count}
                  </span>
               </Badge>
            ))}
         </div>
      </CardContent>
    </Card>
  )
}
