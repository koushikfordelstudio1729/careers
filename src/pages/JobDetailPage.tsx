/** @format */

import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { JOBS } from "@/lib/jobs";
import { Button } from "@/components/ui/button";

export default function JobDetailPage() {
  const { id } = useParams<{ id: string }>();
  const job = JOBS.find((j) => j.id === id);
  const [activeTab, setActiveTab] = useState<"overview" | "application">(
    "overview"
  );

  if (!job) return <Navigate to="/all-jobs" replace />;

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              Talk2Partners™
            </div>
            <div className="flex gap-4">
              <Link
                to="/all-jobs"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                ← Back
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-sm border border-gray-200 space-y-6 min-h-[400px] flex flex-col justify-between">
              <div className="space-y-6">
                <div className="pb-4 border-b border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
                    Location
                  </h3>
                  <p className="text-lg font-medium text-gray-900 flex items-center">
                    <span className="mr-2">📍</span>
                    {job.location}
                  </p>
                </div>

                <div className="pb-4 border-b border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
                    Employment Type
                  </h3>
                  <p className="text-lg font-medium text-gray-900 flex items-center">
                    <span className="mr-2">💼</span>
                    {job.type}
                  </p>
                </div>

                <div className="pb-4 border-b border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
                    Department
                  </h3>
                  <p className="text-lg font-medium text-gray-900 flex items-center">
                    <span className="mr-2">🏢</span>
                    {job.department}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
                    Compensation
                  </h3>
                  <p className="text-xl font-bold text-green-700 bg-green-50 px-4 py-3 rounded-lg border border-green-200 flex items-center">
                    <span className="mr-2">💰</span>
                    {job.salary}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              {job.title}
            </h1>

            {/* Tab Navigation */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`py-3 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "overview"
                      ? "border-orange-500 text-orange-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("application")}
                  className={`py-3 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "application"
                      ? "border-orange-500 text-orange-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Application
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* About Company */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    About Talk2Partners™:
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our mission is to bring high-quality English education to
                    every English learner in the world at the touch of a button.
                    Think of us as the Airbnb that matches English students with
                    English tutors.{" "}
                    <strong>
                      Come help us build the world's largest English learning
                      marketplace and school.
                    </strong>
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We're looking for a talented {job.title} who is passionate
                    about changing the way people learn English. As a{" "}
                    {job.title} @ Talk2Partners™, you'll be part of a
                    fast-moving engineering team. You'll work closely with
                    product managers, designers, and engineers to deliver
                    high-performance features while maintaining a robust,
                    scalable codebase.
                  </p>
                </div>

                {/* Come help us */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Come help us:
                  </h3>
                  <ul className="space-y-3">
                    {job.responsibilities
                      .slice(0, 5)
                      .map((responsibility, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-gray-400 mr-3">•</span>
                          <span className="text-gray-700">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* About you */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    About you:
                  </h3>
                  <ul className="space-y-3">
                    {job.skills.slice(0, 6).map((skill, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-gray-400 mr-3">•</span>
                        <span className="text-gray-700">
                          {skill} experience
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Life at Company */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Life @Talk2Partners™ includes...
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-3">•</span>
                      <span className="text-gray-700">
                        Competitive salary and equity package
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-3">•</span>
                      <span className="text-gray-700">
                        Hybrid work environment (Office days: M, T, & Th)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-3">•</span>
                      <span className="text-gray-700">
                        Comprehensive health benefits
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-3">•</span>
                      <span className="text-gray-700">
                        Professional development opportunities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-3">•</span>
                      <span className="text-gray-700">
                        Work from anywhere in the world for two weeks
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-3">•</span>
                      <span className="text-gray-700">
                        Helping others around the world unlock economic
                        opportunities by learning English
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Salary Info */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    This role is based in the San Francisco Bay Area, and the
                    expected base salary range for this position is as shown
                    below. The actual base pay is dependent upon a variety of
                    job-related factors such as professional background,
                    training, work experience, business needs and market demand.
                    Therefore, in some circumstances, the actual salary could
                    fall outside of this expected range. This pay range is
                    subject to change and may be modified in the future. All
                    full-time employees are also eligible for equity
                    compensation and for benefits.
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Compensation Package
                    </h4>
                    <p className="text-gray-700">
                      {job.salary} Base Salary + Equity Options
                    </p>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p>
                      <strong>Also:</strong> We are proud to be a highly
                      inclusive company and an Equal Employment Opportunity
                      employer. We believe in order to thrive, businesses need a
                      diverse team and leadership. We welcome every background,
                      identity, abilities, and mindset to join us on our mission
                      to make high-quality English education for all. Everyone
                      is welcome here.
                    </p>
                  </div>
                </div>

                {/* Apply Button */}
                <div className="pt-6">
                  <Button
                    className="w-full py-4 text-lg font-medium"
                    style={{ backgroundColor: "#006FFD" }}
                    onClick={() => setActiveTab("application")}
                  >
                    Apply for this Job
                  </Button>
                </div>
              </div>
            )}

            {activeTab === "application" && (
              <div className="space-y-8">
                {/* Autofill Section */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-orange-600 mr-3">📋</div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        Autofill from resume
                      </h3>
                      <p className="text-sm text-gray-600">
                        Upload your resume here to autofill key application
                        fields.
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-orange-300 text-orange-600 hover:bg-orange-50"
                  >
                    Upload file
                  </Button>
                </div>

                {/* Basic Information */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Basic Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Type here..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="hello@example.com..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current company
                      </label>
                      <input
                        type="text"
                        placeholder="Type here..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="1-415-555-1234..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume<span className="text-red-500">*</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Button
                      variant="outline"
                      className="text-orange-600 border-orange-300"
                    >
                      📎 Upload File
                    </Button>
                    <p className="text-gray-500 mt-2">or drag and drop here</p>
                  </div>
                </div>

                {/* Additional Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      LinkedIn<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="url"
                      placeholder="Type here..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      GitHub
                    </label>
                    <input
                      type="url"
                      placeholder="Type here..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>Start typing...</option>
                    </select>
                  </div>
                </div>

                {/* Why Talk2Partners */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Why Talk2Partners™?
                  </h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What sparked your interest in Talk2Partners™?
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Type here..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Location Question */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    This position is based in San Francisco, CA. Do you
                    currently reside in this area?
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      Yes
                    </button>
                    <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      No
                    </button>
                  </div>
                </div>

                {/* Pronouns */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Pronouns
                  </h3>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Pronouns
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="pronouns" className="mr-3" />
                      <span>she/her</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="pronouns" className="mr-3" />
                      <span>he/him</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="pronouns" className="mr-3" />
                      <span>they/them</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="pronouns" className="mr-3" />
                      <span>Prefer not to say</span>
                    </label>
                  </div>
                </div>


                {/* Equal Employment */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    U.S. EQUAL EMPLOYMENT OPPORTUNITY INFORMATION
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    (Completion is voluntary and will not subject you to adverse
                    treatment)
                  </p>
                  <p className="text-sm text-gray-700">
                    Talk2Partners™ provides equal employment and affirmative
                    action opportunities to applicants and employees without
                    regard to race, color, religion, sex, sexual orientation,
                    gender identity, national origin, protected veteran status,
                    or disability.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    className="w-full py-4 text-lg font-medium"
                    style={{ backgroundColor: "#ff7a59" }}
                  >
                    Submit Application ✈️
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
