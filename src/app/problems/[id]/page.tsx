import { ProblemDescription } from "@/components/workspace/problem-description"
import { CodeWorkspace } from "@/components/workspace/code-workspace"
import { Navbar } from "@/components/navbar"

export default function ProblemPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col h-screen max-h-screen overflow-hidden bg-background">
       <Navbar />
       
       <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 flex w-full">
            <div className="w-[40%] h-full overflow-hidden border-r">
                <ProblemDescription />
            </div>
            
            <div className="flex-1 h-full overflow-hidden">
                <CodeWorkspace />
            </div>
          </div>
       </div>
    </div>
  )
}
