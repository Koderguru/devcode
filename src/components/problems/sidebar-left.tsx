"use client"

import * as React from "react"
import { BookOpen, Map, ScrollText, Plus, Star, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

export function SidebarLeft() {
  return (
    <div className="space-y-4 py-4 w-full">
      <div className="bg-card rounded-lg p-2 space-y-1">
         <Button variant="ghost" className="w-full justify-start font-normal text-muted-foreground hover:text-foreground">
            <BookOpen className="mr-3 h-4 w-4" />
            Library
         </Button>
         <Button variant="ghost" className="w-full justify-start font-normal text-muted-foreground hover:text-foreground justify-between">
            <div className="flex items-center">
                <Map className="mr-3 h-4 w-4" />
                Quest
            </div>
            <Badge variant="default" className="bg-blue-600 hover:bg-blue-600 text-[10px] h-4 px-1.5">New</Badge>
         </Button>
         <Button variant="ghost" className="w-full justify-start font-normal text-muted-foreground hover:text-foreground">
            <ScrollText className="mr-3 h-4 w-4" />
            Study Plan
         </Button>
      </div>

      <div className="px-2">
          <div className="flex items-center justify-between px-2 mb-2 group">
             <h3 className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">My Lists</h3>
             <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="ghost" size="icon" className="h-4 w-4">
                    <Plus className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="icon" className="h-4 w-4">
                    <span className="text-xs">v</span>
                </Button>
             </div>
          </div>
          <div className="space-y-1">
             <Button variant="ghost" className="w-full justify-between font-normal text-muted-foreground hover:text-foreground h-9 px-2">
                <div className="flex items-center">
                    <div className="bg-orange-500/10 p-1 rounded-sm mr-2">
                        <Star className="h-3 w-3 text-orange-500 fill-orange-500" />
                    </div>
                    <span className="text-sm">Favorite</span>
                </div>
                <Lock className="h-3 w-3 opacity-50" />
             </Button>
          </div>
      </div>
    </div>
  )
}
