import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, FlaskConical, FileText, Share2, Clock, ThumbsUp, ThumbsDown, List, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProblemDescription() {
  return (
    <div className="flex flex-col h-full bg-background">
      <Tabs defaultValue="description" className="flex flex-col h-full">
        <div className="px-4 border-b bg-muted/20">
            <TabsList className="h-9 w-full justify-start bg-transparent p-0 gap-6">
               <TabsTrigger value="description" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:font-medium data-[state=active]:text-foreground bg-transparent text-muted-foreground h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary transition-none px-0 text-xs">
                  <span className="flex items-center gap-2">
                     <FileText className="h-3.5 w-3.5 text-blue-500" />
                     Description
                  </span>
               </TabsTrigger>
               <TabsTrigger value="editorial" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:font-medium data-[state=active]:text-foreground bg-transparent text-muted-foreground h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary transition-none px-0 text-xs">
                   <div className="flex items-center gap-2">
                      <FlaskConical className="h-3.5 w-3.5 text-purple-500" />
                      Editorial
                   </div>
               </TabsTrigger>
               <TabsTrigger value="solutions" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:font-medium data-[state=active]:text-foreground bg-transparent text-muted-foreground h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary transition-none px-0 text-xs">
                   <div className="flex items-center gap-2">
                      <Share2 className="h-3.5 w-3.5 text-green-500" />
                      Solutions
                   </div>
               </TabsTrigger>
               <TabsTrigger value="submissions" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:font-medium data-[state=active]:text-foreground bg-transparent text-muted-foreground h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary transition-none px-0 text-xs">
                   <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-yellow-500" />
                      Submissions
                   </div>
               </TabsTrigger>
            </TabsList>
        </div>

        <TabsContent value="description" className="flex-1 p-0 m-0 overflow-hidden focus-visible:outline-none">
            <ScrollArea className="h-full">
                <div className="p-5 space-y-6 max-w-4xl pb-20">
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <h1 className="text-xl font-bold">1. Two Sum</h1>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                    <List className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                    <MessageSquare className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        
                        <div className="flex gap-2 items-center mb-6">
                            <Badge variant="secondary" className="bg-green-500/10 text-green-600 hover:bg-green-500/20 border-0 text-[10px] px-2.5 py-0.5 rounded-full font-medium">Easy</Badge>
                            <Badge variant="outline" className="text-muted-foreground text-[10px] px-2.5 py-0.5 rounded-full font-normal border-border/50 bg-muted/20 hover:bg-muted/40 cursor-pointer transition-colors">Topics</Badge>
                            <Badge variant="outline" className="text-muted-foreground text-[10px] px-2.5 py-0.5 rounded-full font-normal border-border/50 bg-muted/20 hover:bg-muted/40 cursor-pointer transition-colors">Companies</Badge>
                            <Badge variant="outline" className="text-muted-foreground text-[10px] px-2.5 py-0.5 rounded-full font-normal border-border/50 bg-muted/20 hover:bg-muted/40 cursor-pointer transition-colors">Hint</Badge>
                        </div>
                        
                        <div className="space-y-4 text-sm leading-relaxed text-foreground/90">
                            <p>Given an array of integers <code className="bg-muted px-1 py-0.5 rounded font-mono text-[13px]">nums</code> and an integer <code className="bg-muted px-1 py-0.5 rounded font-mono text-[13px]">target</code>, return <em>indices of the two numbers such that they add up to <code className="bg-muted px-1 py-0.5 rounded font-mono text-[13px]">target</code></em>.</p>
                            <p>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the <em>same</em> element twice.</p>
                            <p>You can return the answer in any order.</p>
                        </div>

                        <div className="mt-8 space-y-6">
                            <div>
                                <h3 className="text-sm font-semibold mb-3">Example 1:</h3>
                                <div className="bg-muted/30 p-4 rounded-lg font-mono text-xs border border-border/50 space-y-2">
                                    <div className="flex">
                                        <span className="w-16 font-semibold text-muted-foreground shrink-0">Input:</span>
                                        <span className="text-foreground/90">nums = [2,7,11,15], target = 9</span>
                                    </div>
                                    <div className="flex">
                                        <span className="w-16 font-semibold text-muted-foreground shrink-0">Output:</span>
                                        <span className="text-foreground/90">[0,1]</span>
                                    </div>
                                    <div className="flex">
                                        <span className="w-16 font-semibold text-muted-foreground shrink-0">Note:</span>
                                        <span className="text-foreground/90">Because nums[0] + nums[1] == 9, we return [0, 1].</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold mb-3">Example 2:</h3>
                                <div className="bg-muted/30 p-4 rounded-lg font-mono text-xs border border-border/50 space-y-2">
                                    <div className="flex">
                                        <span className="w-16 font-semibold text-muted-foreground shrink-0">Input:</span>
                                        <span className="text-foreground/90">nums = [3,2,4], target = 6</span>
                                    </div>
                                    <div className="flex">
                                        <span className="w-16 font-semibold text-muted-foreground shrink-0">Output:</span>
                                        <span className="text-foreground/90">[1,2]</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold mb-3">Example 3:</h3>
                                <div className="bg-muted/30 p-4 rounded-lg font-mono text-xs border border-border/50 space-y-2">
                                    <div className="flex">
                                        <span className="w-16 font-semibold text-muted-foreground shrink-0">Input:</span>
                                        <span className="text-foreground/90">nums = [3,3], target = 6</span>
                                    </div>
                                    <div className="flex">
                                        <span className="w-16 font-semibold text-muted-foreground shrink-0">Output:</span>
                                        <span className="text-foreground/90">[0,1]</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-sm font-semibold mb-4">Constraints:</h3>
                            <ul className="list-disc pl-5 space-y-2 text-xs font-mono text-foreground/80">
                                <li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
                                <li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
                                <li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
                                <li><strong>Only one valid answer exists.</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="border-t p-4 pb-8 space-y-4">
                     <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2 text-xs text-muted-foreground">
                             <span>Accepted: <span className="font-semibold text-foreground">12.5M</span></span>
                             <span className="h-3 w-px bg-border"></span>
                             <span>Submissions: <span className="font-semibold text-foreground">25.1M</span></span>
                             <span className="h-3 w-px bg-border"></span>
                             <span>Acceptance Rate: <span className="font-semibold text-foreground">49.8%</span></span>
                         </div>
                     </div>
                     <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="h-7 text-xs bg-muted/20 border-border/60 gap-1.5">
                            <ThumbsUp className="h-3 w-3" />
                            <span>125K</span>
                        </Button>
                        <Button variant="outline" size="sm" className="h-7 text-xs bg-muted/20 border-border/60 gap-1.5">
                            <ThumbsDown className="h-3 w-3" />
                            <span>15K</span>
                        </Button>
                        <Button variant="outline" size="sm" className="h-7 text-xs bg-muted/20 border-border/60 gap-1.5 ml-auto">
                            <MessageSquare className="h-3 w-3" />
                            <span>Discussion</span>
                        </Button>
                     </div>
                </div>
            </ScrollArea>
        </TabsContent>
        
        <TabsContent value="editorial" className="flex-1 p-4 m-0 overflow-auto">
            <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                Editorial content coming soon...
            </div>
        </TabsContent>

        <TabsContent value="solutions" className="flex-1 p-4 m-0 overflow-auto">
            <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                Community solutions coming soon...
            </div>
        </TabsContent>
        
        <TabsContent value="submissions" className="flex-1 p-4 m-0 overflow-auto">
             <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                Your submissions will appear here...
            </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
