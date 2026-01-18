"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function SidebarCalendar() {
  // Simple mock calendar grid for the visual
  const days = Array.from({ length: 35 }, (_, i) => i + 1)
  const today = 18

  return (
    <Card className="border-none shadow-none bg-background">
      <CardHeader className="p-0 pb-4 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base font-medium">Day {today}</CardTitle>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
             <span>08:39:17 Left</span>
             <div className="flex">
                <Button variant="ghost" size="icon" className="h-6 w-6"><ChevronLeft className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" className="h-6 w-6"><ChevronRight className="h-4 w-4" /></Button>
             </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
         <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <div key={i} className="text-[10px] text-muted-foreground font-medium">{d}</div>
            ))}
         </div>
         <div className="grid grid-cols-7 gap-1">
             {days.map((d) => {
                 const isToday = d === today;
                 // Mocking some random "completed" days
                 const isCompleted = [4, 5, 6, 8, 9, 10, 11, 12, 13].includes(d);
                 
                 // Render only first 30 days effectively
                 if (d > 31) return null;

                 return (
                    <div 
                        key={d} 
                        className={`
                            aspect-square flex items-center justify-center text-xs rounded-sm relative
                            ${isToday ? "bg-green-600/20 text-green-500 font-bold border border-green-600/50" : "text-muted-foreground hover:bg-muted"}
                            ${isCompleted ? "font-medium text-foreground" : ""}
                        `}
                    >
                        {d}
                        {isCompleted && <div className="absolute bottom-1 h-1 w-1 rounded-full bg-green-500" />}
                    </div>
                 )
             })}
         </div>

         {/* Weekly Premium Promo Mock */}
         <div className="mt-4 bg-orange-500/10 rounded-md p-3">
            <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-orange-500">Weekly Premium</span>
                <span className="text-[10px] text-muted-foreground">3 days left</span>
            </div>
            <div className="flex justify-between gap-1">
                <div className="h-10 w-full bg-orange-500/20 rounded flex items-center justify-center text-xs font-medium text-orange-500">W1</div>
                <div className="h-10 w-full bg-orange-500/20 rounded flex items-center justify-center text-xs font-medium text-orange-500">W2</div>
                <div className="h-10 w-full bg-muted/30 rounded flex items-center justify-center text-xs text-muted-foreground">W3</div>
                <div className="h-10 w-full bg-muted/30 rounded flex items-center justify-center text-xs text-muted-foreground">W4</div>
                <div className="h-10 w-full bg-muted/30 rounded flex items-center justify-center text-xs text-muted-foreground">W5</div>
            </div>
         </div>
      </CardContent>
    </Card>
  )
}
