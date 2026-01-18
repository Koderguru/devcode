import { ProblemsTable } from "@/components/problems/problems-table"
import { SidebarCalendar } from "@/components/problems/sidebar-calendar"
import { TrendingCompanies } from "@/components/problems/trending-companies"
import { SidebarLeft } from "@/components/problems/sidebar-left"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"

export default function ProblemsPage() {
  return (
    <div className="flex flex-col h-screen bg-background text-foreground overflow-hidden">
       <Navbar />
       
       <div className="flex-1 flex overflow-hidden container mx-auto px-4 gap-6 py-6 max-w-[1400px]">
          {/* Left Sidebar */}
          <aside className="hidden xl:block w-[240px] shrink-0 overflow-y-auto no-scrollbar">
             <SidebarLeft />
          </aside>

          {/* Main Content Area - Scrollable */}
          <main className="flex-1 overflow-y-auto no-scrollbar pr-2 min-w-0">
             {/* Banners Section */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {/* Quest Banner */}
                <div className="h-40 rounded-xl bg-gradient-to-r from-purple-900 via-indigo-900 to-indigo-950 relative overflow-hidden p-6 flex flex-col justify-between group cursor-pointer border border-white/10 shadow-lg hover:shadow-xl transition-all">
                   <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-30 transition-opacity">
                      <div className="h-24 w-24 bg-white rounded-full blur-3xl"></div>
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">Quest</h3>
                      <p className="text-indigo-200 text-xs line-clamp-2">Join global coding challenges.</p>
                   </div>
                   <Button size="sm" variant="secondary" className="w-fit text-xs h-8 bg-white/10 hover:bg-white/20 text-white border-white/10 backdrop-blur-sm">
                      Begin Now
                   </Button>
                </div>

                {/* JS 30 Days Banner */}
                <div className="h-40 rounded-xl bg-gradient-to-br from-orange-400 to-amber-600 relative overflow-hidden p-6 flex flex-col justify-between group cursor-pointer border border-white/10 shadow-lg hover:shadow-xl transition-all">
                   <div>
                       <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">JavaScript</h3>
                          <span className="text-[10px] font-bold bg-black/30 backdrop-blur-sm text-white px-2 py-1 rounded border border-white/10">Day 30</span>
                       </div>
                       <p className="text-orange-50 text-xs">30 Days Challenge</p>
                   </div>
                   <Button size="sm" variant="secondary" className="w-fit text-xs h-8 bg-white/20 hover:bg-white/30 text-white border-white/10 backdrop-blur-sm">
                      Start Learning
                   </Button>
                </div>

                {/* Top Interview Questions Banner */}
                <div className="h-40 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 relative overflow-hidden p-6 flex flex-col justify-between group cursor-pointer border border-white/10 shadow-lg hover:shadow-xl transition-all">
                   <div>
                      <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">Top Interview</h3>
                      <p className="text-blue-50 text-xs">Ace your next tech interview.</p>
                   </div>
                   <Button size="sm" variant="secondary" className="w-fit text-xs h-8 bg-white/20 hover:bg-white/30 text-white border-white/10 backdrop-blur-sm">
                      Get Started
                   </Button>
                </div>
             </div>

             {/* Filters & Table Section */}
             <div className="space-y-4 pb-8">
                <ProblemsTable />
             </div>
          </main>

          {/* Right Sidebar - Sticky/Fixed within container */}
          <aside className="hidden lg:block w-[300px] shrink-0 space-y-6 overflow-y-auto no-scrollbar">
             <div className="bg-card rounded-lg border shadow-sm sticky top-0">
                <SidebarCalendar />
             </div>
             
             <div className="bg-card rounded-lg border shadow-sm">
                <TrendingCompanies />
             </div>
             
             {/* Footer Links Mock */}
             <div className="text-xs text-muted-foreground space-y-2 px-2">
                <div className="flex flex-wrap gap-2">
                  <span className="hover:text-foreground cursor-pointer">Copyright © 2026 DevCode</span>
                  <span className="hover:text-foreground cursor-pointer">Help Center</span>
                  <span className="hover:text-foreground cursor-pointer">Jobs</span>
                  <span className="hover:text-foreground cursor-pointer">Bug Bounty</span>
                  <span className="hover:text-foreground cursor-pointer">Students</span>
                  <span className="hover:text-foreground cursor-pointer">Terms</span>
                  <span className="hover:text-foreground cursor-pointer">Privacy Policy</span>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <span className="flag-icon">🇺🇸</span> United States
                </div>
             </div>
          </aside>
       </div>
    </div>
  )
}
