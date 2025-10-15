import { Link } from "react-router-dom"
import type { Job } from "@/lib/jobs"

export function JobCard({ job }: { job: Job }) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <Link 
        to={`/careers/${job.id}`} 
        className="block group py-4 px-4 -mx-4 rounded-lg transition-all duration-200 hover:bg-gray-50"
        onMouseEnter={(e) => {
          const title = e.currentTarget.querySelector('h3')
          if (title) title.style.color = '#004297'
        }}
        onMouseLeave={(e) => {
          const title = e.currentTarget.querySelector('h3')
          if (title) title.style.color = '#006FFD'
        }}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-medium transition-colors" style={{ color: '#006FFD' }}>
              {job.title}
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              {job.department} • {job.location} • {job.type}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
