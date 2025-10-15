/** @format */

import { Link } from "react-router-dom";
import { JOBS } from "@/lib/jobs";
import { JobBrowser } from "@/components/careers/job-browser";

export default function AllJobsPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              Talk2Partners™
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
        {/* Welcome Banner */}
        <div className="rounded-lg mb-8 overflow-hidden">
          <img
            src="https://darwinbox-data-stage.s3.ap-south-1.amazonaws.com/INSTANCE9_a64a5b80c22098_474/banners/a60603105064b54b0531114__Drawingbox_Onboarding%20Banner.png"
            alt="Welcome to Talk2Partners Team"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Link
              to="/"
              className="text-sm text-gray-500 hover:text-gray-700 mb-4 inline-block"
            >
              ← Back to Careers
            </Link>
          </div>
        </div>
        <JobBrowser jobs={JOBS} />
      </main>
    </div>
  );
}
