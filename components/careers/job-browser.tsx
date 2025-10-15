import { useMemo, useState } from "react"
import type { Job } from "@/lib/jobs"
import { departments, jobTypes, locations } from "@/lib/jobs"
import { JobCard } from "./job-card"
import { applyFilters, type Filters } from "./job-filters"

export function JobBrowser({ jobs }: { jobs: Job[] }) {
  const [filters, setFilters] = useState<Filters>({ query: "", department: "all", type: "all", location: "all" })
  const filtered = useMemo(() => applyFilters(jobs, filters), [jobs, filters])
  
  // Group jobs by department
  const groupedJobs = useMemo(() => {
    const groups: Record<string, Job[]> = {}
    filtered.forEach((job) => {
      if (!groups[job.department]) {
        groups[job.department] = []
      }
      groups[job.department].push(job)
    })
    return groups
  }, [filtered])

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          Open Positions ({filtered.length})
        </h1>
      </div>
      
      <div className="space-y-4">
        <p className="text-gray-600 font-medium">Filters:</p>
        <div className="flex gap-4">
          <select 
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.department || "all"}
            onChange={(e) => setFilters({ ...filters, department: e.target.value })}
          >
            <option value="all">Department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          
          <select 
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.location || "all"}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          >
            <option value="all">Location</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
          
          <select 
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.type || "all"}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          >
            <option value="all">Employment Type</option>
            {jobTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
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
        
        {filtered.length === 0 && (
          <div className="rounded-lg border bg-card p-8 text-center">
            <p className="text-sm text-muted-foreground">No jobs match your filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}
