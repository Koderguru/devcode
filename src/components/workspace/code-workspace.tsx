"use client"

import * as React from "react"
import Editor from "@monaco-editor/react"
import { Play, Send, Settings, RotateCw, ChevronUp, Maximize2 } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"

const defaultValue = `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
};`

export function CodeWorkspace() {
  const { theme } = useTheme()
  
  return (
    <div className="flex flex-col h-full bg-background">
      {/* Editor Toolbar */}
      <div className="h-10 border-b flex items-center justify-between px-2 bg-muted/20">
         <div className="flex items-center gap-2">
            <Select defaultValue="javascript">
               <SelectTrigger className="h-7 w-[130px] border-none shadow-none bg-transparent hover:bg-muted text-xs focus:ring-0">
                  <span className="mr-2 text-green-600 font-bold">&lt;/&gt;</span>
                  <SelectValue placeholder="Language" />
               </SelectTrigger>
               <SelectContent>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="cpp">C++</SelectItem>
                  <SelectItem value="typescript">TypeScript</SelectItem>
               </SelectContent>
            </Select>
            <div className="bg-muted-foreground/10 px-2 py-0.5 rounded text-xs text-muted-foreground cursor-pointer hover:bg-muted/50">Auto</div>
         </div>
         <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground">
               <Settings className="h-3.5 w-3.5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground">
               <RotateCw className="h-3.5 w-3.5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground">
               <Maximize2 className="h-3.5 w-3.5" />
            </Button>
         </div>
      </div>

       <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={60} minSize={30}>
              <div className="h-full w-full">
                 <Editor
                    height="100%"
                    defaultLanguage="javascript"
                    defaultValue={defaultValue}
                    theme={theme === "dark" ? "vs-dark" : "light"}
                    options={{
                       minimap: { enabled: false },
                       fontSize: 14,
                       lineNumbers: "on",
                       scrollBeyondLastLine: false,
                       automaticLayout: true,
                       padding: { top: 10 }
                    }}
                 />
              </div>
          </ResizablePanel>
          
          <ResizableHandle />
          
          <ResizablePanel defaultSize={40} minSize={10}>
              <div className="h-full flex flex-col bg-background">
                  {/* Testcase Header */}
                  <div className="flex items-center gap-4 px-4 h-10 border-b bg-muted/20">
                     <div className="flex items-center gap-2 cursor-pointer border-b-2 border-transparent hover:text-foreground text-foreground border-foreground h-full px-1">
                        <span className="text-xs font-medium flex items-center gap-2">
                            <span className="text-green-500">✓</span> Testcase
                        </span>
                     </div>
                     <div className="flex items-center gap-2 cursor-pointer border-b-2 border-transparent hover:text-foreground text-muted-foreground h-full px-1">
                        <span className="text-xs font-medium flex items-center gap-2">
                            <span className="text-muted-foreground">Result</span>
                        </span>
                     </div>
                  </div>
                  
                  {/* Testcase Content */}
                  <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                      <div className="space-y-2">
                         <div className="flex gap-2 mb-2">
                            <div className="px-3 py-1 bg-muted rounded-md text-xs font-medium cursor-pointer ring-1 ring-ring">Case 1</div>
                            <div className="px-3 py-1 hover:bg-muted/50 rounded-md text-xs text-muted-foreground cursor-pointer">Case 2</div>
                            <div className="px-3 py-1 hover:bg-muted/50 rounded-md text-xs text-muted-foreground cursor-pointer">Case 3</div>
                         </div>
                         
                         <div className="space-y-3">
                             <div>
                                <label className="text-xs text-muted-foreground block mb-1">nums =</label>
                                <div className="bg-muted/30 p-2 rounded-md font-mono text-sm border-none w-full text-foreground">[2,7,11,15]</div>
                             </div>
                             <div>
                                <label className="text-xs text-muted-foreground block mb-1">target =</label>
                                <div className="bg-muted/30 p-2 rounded-md font-mono text-sm border-none w-full text-foreground">9</div>
                             </div>
                         </div>
                      </div>
                  </div>

                  {/* Action Footer */}
                  <div className="h-14 border-t flex items-center justify-between px-4 bg-background z-10">
                      <Button variant="ghost" size="sm" className="text-muted-foreground h-8 text-xs gap-1 bg-muted/30 hover:bg-muted/50">
                          Console <ChevronUp className="h-3 w-3" />
                      </Button>
                      <div className="flex items-center gap-2">
                          <Button variant="secondary" size="sm" className="h-8 px-4 text-xs font-semibold gap-2">
                              <Play className="h-3 w-3 fill-current" /> Run
                          </Button>
                          <Button size="sm" className="h-8 px-4 text-xs font-semibold gap-2 bg-green-600 hover:bg-green-700 text-white">
                              <Send className="h-3 w-3 fill-current" /> Submit
                          </Button>
                      </div>
                  </div>
              </div>
          </ResizablePanel>
       </ResizablePanelGroup>
    </div>
  )
}
