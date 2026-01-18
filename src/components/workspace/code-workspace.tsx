"use client"

import * as React from "react"
import Editor from "@monaco-editor/react"
import { Play, Send, Settings, RotateCw, ChevronUp, Maximize2, Minimize2, Loader2 } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { executeCode, LANGUAGE_IDS } from "@/lib/judge0"

const defaultValue = `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    return [0, 1];
};

// Example Test
const nums = [2, 7, 11, 15];
const target = 9;
console.log("Input:", { nums, target });
console.log("Output:", twoSum(nums, target));`


export function CodeWorkspace() {
  const { theme } = useTheme()
  const [isFullScreen, setIsFullScreen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  
  const [activeTab, setActiveTab] = React.useState<"testcase" | "result">("testcase")
  const [language, setLanguage] = React.useState("javascript")
  const [code, setCode] = React.useState(defaultValue)
  const [isRunning, setIsRunning] = React.useState(false)
  const [output, setOutput] = React.useState<any>(null)

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen()
      setIsFullScreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullScreen(false)
      }
    }
  }

  React.useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement)
    }
    document.addEventListener("fullscreenchange", handleFullScreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullScreenChange)
  }, [])
  
  const handleRun = async () => {
      setIsRunning(true)
      setActiveTab("result")
      setOutput(null) // Clear previous output
      
      try {
          const langId = LANGUAGE_IDS[language as keyof typeof LANGUAGE_IDS]
          if (!langId) {
             throw new Error("Language not supported")
          }
          
          const result = await executeCode(code, langId)
          setOutput(result)
      } catch (error: any) {
          console.error(error)
          setOutput({
             status: { description: "Error" },
             stderr: error.message || "Something went wrong"
          })
      } finally {
          setIsRunning(false)
      }
  }

  return (
    <div ref={containerRef} className="flex flex-col h-full bg-background">
      {/* Editor Toolbar */}
      <div className="h-10 border-b flex items-center justify-between px-2 bg-muted/20">
         <div className="flex items-center gap-2">
            <Select value={language} onValueChange={setLanguage}>
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
            <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7 text-muted-foreground"
                onClick={toggleFullScreen}
            >
               {isFullScreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
            </Button>
         </div>

      </div>

       <div className="flex flex-col h-full">
          <div className="flex-1 min-h-0 border-b">
              <div className="h-full w-full">
                 <Editor
                    height="100%"
                    language={language}
                    value={code}
                    theme={theme === "dark" ? "vs-dark" : "light"}
                    onChange={(value) => setCode(value || "")}
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
          </div>
          
          <div className="h-[40%] flex flex-col bg-background">
              {/* Testcase Header */}
              <div className="flex items-center gap-4 px-4 h-10 border-b bg-muted/20">
                 <div 
                    onClick={() => setActiveTab("testcase")}
                    className={`flex items-center gap-2 cursor-pointer border-b-2 h-full px-1 ${activeTab === "testcase" ? "border-foreground" : "border-transparent hover:text-foreground text-muted-foreground"}`}
                 >
                    <span className="text-xs font-medium flex items-center gap-2">
                        <span className="text-green-500">✓</span> Testcase
                    </span>
                 </div>
                 <div 
                    onClick={() => setActiveTab("result")}
                    className={`flex items-center gap-2 cursor-pointer border-b-2 h-full px-1 ${activeTab === "result" ? "border-foreground" : "border-transparent hover:text-foreground text-muted-foreground"}`}
                 >
                    <span className="text-xs font-medium flex items-center gap-2">
                        <span className="text-muted-foreground">Result</span>
                    </span>
                 </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  {activeTab === "testcase" ? (
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
                  ) : (
                      <div className="space-y-3 h-full">
                          {isRunning ? (
                              <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                                  <Loader2 className="h-6 w-6 animate-spin mb-2" />
                                  <span className="text-xs">Running Code...</span>
                              </div>
                          ) : output ? (
                              <div className="font-mono text-xs space-y-3">
                                  {output.status?.description && (
                                      <div className={`font-semibold ${output.status.id === 3 ? "text-green-500" : "text-red-500"}`}>
                                           {output.status.description}
                                      </div>
                                  )}
                                  
                                  {output.stdout && (
                                     <div>
                                        <div className="text-muted-foreground mb-1">Output:</div>
                                        <pre className="bg-muted/30 p-3 rounded-md overflow-x-auto">{output.stdout}</pre>
                                     </div>
                                  )}
                                  
                                  {(output.stderr || output.compile_output) && (
                                     <div>
                                        <div className="text-red-500 mb-1">Error:</div>
                                        <pre className="bg-red-500/10 text-red-500 p-3 rounded-md overflow-x-auto">{output.stderr || output.compile_output}</pre>
                                     </div>
                                  )}

                                  {!output.stdout && !output.stderr && !output.compile_output && (
                                      <div className="text-muted-foreground italic">No output</div>
                                  )}
                              </div>
                          ) : (
                              <div className="flex items-center justify-center h-full text-muted-foreground text-xs italic">
                                  Run the code to see results
                              </div>
                          )}
                      </div>
                  )}
              </div>

              {/* Action Footer */}
              <div className="h-14 border-t flex items-center justify-between px-4 bg-background z-10">
                  <Button variant="ghost" size="sm" className="text-muted-foreground h-8 text-xs gap-1 bg-muted/30 hover:bg-muted/50">
                      Console <ChevronUp className="h-3 w-3" />
                  </Button>
                  <div className="flex items-center gap-2">
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        className="h-8 px-4 text-xs font-semibold gap-2"
                        onClick={handleRun}
                        disabled={isRunning}
                      >
                          {isRunning ? <Loader2 className="h-3 w-3 animate-spin" /> : <Play className="h-3 w-3 fill-current" />} 
                          Run
                      </Button>
                      <Button size="sm" className="h-8 px-4 text-xs font-semibold gap-2 bg-green-600 hover:bg-green-700 text-white">
                          <Send className="h-3 w-3 fill-current" /> Submit
                      </Button>
                  </div>
              </div>
          </div>
       </div>
    </div>
  )
}
