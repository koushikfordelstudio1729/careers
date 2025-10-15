import { useParams, Link, Navigate } from "react-router-dom"
import { JOBS } from "@/lib/jobs"
import { ApplyForm } from "@/components/careers/apply-form"

export default function ApplyPage() {
  const { id } = useParams<{ id: string }>()
  const job = JOBS.find((j) => j.id === id)
  
  if (!job) return <Navigate to="/careers" replace />

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 space-y-8">
      <nav aria-label="Breadcrumb">
        <Link to={`/careers/${job.id}`} className="text-sm text-muted-foreground hover:underline">
          ← Back to job
        </Link>
      </nav>

      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-pretty text-primary">Apply for {job.title}</h1>
        <p className="text-muted-foreground">
          Fill out the form below. You'll see a confirmation screen after submitting.
        </p>
      </header>

      <ApplyForm jobTitle={job.title} />
    </main>
  )
}