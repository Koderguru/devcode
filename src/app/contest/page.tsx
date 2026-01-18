import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Trophy, Calendar, Clock, ChevronRight, Search, Filter } from "lucide-react"

// Mock data for contests
const contests = [
  {
    id: 382,
    title: "Weekly Contest 382",
    startTime: "Starts in 2 days",
    duration: "1 hour 30 minutes",
    status: "Upcoming",
    registered: false,
  },
  {
    id: 123,
    title: "Biweekly Contest 123",
    startTime: "Starts in 5 days",
    duration: "1 hour 30 minutes",
    status: "Upcoming",
    registered: true,
  },
  {
    id: 381,
    title: "Weekly Contest 381",
    startTime: "Ended Jan 21, 2024",
    duration: "1 hour 30 minutes",
    status: "Ended",
    registered: false,
  },
  {
    id: 380,
    title: "Weekly Contest 380",
    startTime: "Ended Jan 14, 2024",
    duration: "1 hour 30 minutes",
    status: "Ended",
    registered: false,
  },
  {
    id: 379,
    title: "Weekly Contest 379",
    startTime: "Ended Jan 7, 2024",
    duration: "1 hour 30 minutes",
    status: "Ended",
    registered: false,
  },
]

export default function ContestPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Contest</h1>
            <p className="text-muted-foreground mt-1">
              Join our weekly contests to compete and improve your skills.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Trophy className="mr-2 h-4 w-4" />
              Global Ranking
            </Button>
            <Button>
              My Contests
            </Button>
          </div>
        </div>

        {/* Featured / Upcoming Card */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-2 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border-indigo-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-indigo-400" />
                Next Contest
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Weekly Contest 382</h2>
                  <p className="text-indigo-200">
                    Sunday, Jan 28, 2024 at 10:30 AM
                  </p>
                  <div className="flex gap-2 mt-2">
                     <Badge variant="secondary" className="bg-indigo-500/20 text-indigo-200 hover:bg-indigo-500/30">
                        <Clock className="mr-1 h-3 w-3" />
                        1h 30m
                     </Badge>
                  </div>
                </div>
                <div className="flex flex-col gap-3 min-w-[150px]">
                   <Button size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                      Register Now
                   </Button>
                   <p className="text-xs text-center text-muted-foreground">
                      Registration closes in 1 day
                   </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Stats / Side Card */}
          <Card>
            <CardHeader>
               <CardTitle className="text-lg">Your Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                 <span className="text-sm text-muted-foreground">Rating</span>
                 <span className="font-bold text-xl">1,452</span>
              </div>
              <div className="flex justify-between items-center">
                 <span className="text-sm text-muted-foreground">Global Rank</span>
                 <span className="font-mono">#12,402</span>
              </div>
              <div className="flex justify-between items-center">
                 <span className="text-sm text-muted-foreground">Attended</span>
                 <span className="font-mono">15</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <div className="flex items-center justify-between gap-4">
           <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search past contests..."
                className="pl-8"
              />
           </div>
           <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                 <Filter className="h-4 w-4" />
              </Button>
           </div>
        </div>

        {/* Contests Table */}
        <div className="rounded-md border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contest Name</TableHead>
                <TableHead>Start Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contests.map((contest) => (
                <TableRow key={contest.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                       {contest.status === "Upcoming" && (
                          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                       )}
                       {contest.title}
                    </div>
                  </TableCell>
                  <TableCell>{contest.startTime}</TableCell>
                  <TableCell>{contest.duration}</TableCell>
                  <TableCell className="text-right">
                    {contest.status === "Upcoming" ? (
                      <Button size="sm" variant={contest.registered ? "secondary" : "default"}>
                         {contest.registered ? "Registered" : "Register"}
                      </Button>
                    ) : (
                      <Button size="sm" variant="ghost">
                        Virtual <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
