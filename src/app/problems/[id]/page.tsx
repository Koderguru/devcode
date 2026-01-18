import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ProblemDescription } from "@/components/workspace/problem-description"
import { CodeWorkspace } from "@/components/workspace/code-workspace"
import { Navbar } from "@/components/navbar"

export default function ProblemPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch problem data based on params.id
  
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
       <Navbar /> {/* We might want a reduced version of navbar here, but simpler to reuse for now */}
       
       <main className="flex-1 overflow-hidden">
         <ResizablePanelGroup direction="horizontal" className="h-full border-t">
            {/* Left Panel: Description */}
            <ResizablePanel defaultSize={40} minSize={20} maxSize={70}>
                <ProblemDescription />
            </ResizablePanel>
            
            <ResizableHandle withHandle />
            
            {/* Right Panel: Code Workspace */}
            <ResizablePanel defaultSize={60} minSize={30}>
                <CodeWorkspace />
            </ResizablePanel>
         </ResizablePanelGroup>
       </main>
    </div>
  )
}
