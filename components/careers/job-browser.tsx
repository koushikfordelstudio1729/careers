import { useMemo } from "react"
import type { Job } from "@/lib/jobs"
import { JobCard } from "./job-card"

export function JobBrowser({ jobs }: { jobs: Job[] }) {
  // Group jobs by department
  const groupedJobs = useMemo(() => {
    const groups: Record<string, Job[]> = {}
    jobs.forEach((job) => {
      if (!groups[job.department]) {
        groups[job.department] = []
      }
      groups[job.department].push(job)
    })
    return groups
  }, [jobs])

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          Open Positions ({jobs.length})
        </h1>
      </div>
      
      <div className="space-y-4">
        <p className="text-gray-600 font-medium">Filters:</p>
        <div className="flex gap-4">
          <select 
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
          >
            <option value="" disabled>Department</option>
          </select>
          
          <select 
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
          >
            <option value="" disabled>Location</option>
          </select>
          
          <select 
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
          >
            <option value="" disabled>Employment Type</option>
          </select>
        </div>
      </div>

      <div className="space-y-8">
        {Object.entries(groupedJobs).map(([department, departmentJobs]) => (
          <div key={department} className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
              {department}
            </h2>
            <div className="space-y-3">
              {departmentJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        ))}
        
      </div>
    </div>
  )
}
