import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Job } from "@/lib/jobs"

export function JobCard({ job }: { job: Job }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-pretty">{job.title}</CardTitle>
        <div className="mt-2 flex flex-wrap gap-2">
          <Badge variant="secondary">{job.department}</Badge>
          <Badge variant="outline">{job.type}</Badge>
          <Badge variant="outline">{job.location}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{job.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="text-sm font-medium">{job.salary}</span>
        <Button asChild>
          <Link to={`/careers/${job.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
