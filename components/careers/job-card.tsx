import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Job } from "@/lib/jobs"

export function JobCard({ job }: { job: Job }) {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {job.title}
              </h3>
              <span className="text-sm font-medium text-gray-700 ml-4 flex-shrink-0">
                {job.salary}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant="secondary">{job.department}</Badge>
              <Badge variant="outline">{job.type}</Badge>
              <Badge variant="outline">{job.location}</Badge>
            </div>
            
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {job.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {job.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    {skill}
                  </span>
                ))}
                {job.skills.length > 3 && (
                  <span className="text-xs text-gray-500 ml-1">
                    +{job.skills.length - 3} more
                  </span>
                )}
              </div>
              
              <Button asChild size="sm">
                <Link to={`/careers/${job.id}`}>View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
