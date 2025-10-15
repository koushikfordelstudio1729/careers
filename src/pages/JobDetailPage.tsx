import { useState } from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import { JOBS } from "@/lib/jobs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ApplyForm } from "@/components/careers/apply-form"

export default function JobDetailPage() {
  const { id } = useParams<{ id: string }>()
  const job = JOBS.find((j) => j.id === id)
  const [activeTab, setActiveTab] = useState<'description' | 'apply'>('description')
  
  if (!job) return <Navigate to="/careers" replace />

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      <nav aria-label="Breadcrumb">
        <Link to="/careers" className="text-sm text-muted-foreground hover:underline">
          ← Back to all jobs
        </Link>
      </nav>

      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-pretty text-primary">{job.title}</h1>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{job.department}</Badge>
          <Badge variant="outline">{job.type}</Badge>
          <Badge variant="outline">{job.location}</Badge>
          <Badge variant="outline">{job.salary}</Badge>
        </div>
      </header>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('description')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'description'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Job Description
          </button>
          <button
            onClick={() => setActiveTab('apply')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'apply'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Apply for this Job
          </button>
        </nav>
      </div>

      <section className="grid gap-6">
        {activeTab === 'description' && (
          <>
            <Card>
              <CardHeader>
                <CardTitle>About the role</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{job.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Required Skills</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {job.skills.map((s) => (
                  <Badge key={s} variant="outline">
                    {s}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </>
        )}

        {activeTab === 'apply' && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Apply for {job.title}</h2>
            <ApplyForm jobTitle={job.title} />
          </div>
        )}
      </section>
    </main>
  )
}