/** @format */

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { JOBS } from "@/lib/jobs";
import { JobBrowser } from "@/components/careers/job-browser";

export function CareersLanding() {
  const [showJobs, setShowJobs] = useState(false);

  if (showJobs) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-pretty text-primary">
              Open Positions
            </h1>
            <p className="text-muted-foreground">
              Join us to build the future. Browse roles and apply today.
            </p>
          </div>
          <Button variant="outline" onClick={() => setShowJobs(false)}>
            Back to Careers
          </Button>
        </div>
        <JobBrowser jobs={JOBS} />
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Help English learners achieve their full potential
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join the team
              </p>
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="text-white px-8 py-4 text-lg"
                  style={{ backgroundColor: "#006FFD" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#004297")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#006FFD")
                  }
                  onClick={() => setShowJobs(true)}
                >
                  View Jobs
                </Button>
                <div>
                  <a
                    href="#"
                    className="font-medium inline-flex items-center"
                    style={{ color: "#006FFD" }}
                  >
                    Become a Tutor →
                  </a>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/600/400?random=1"
                alt="Team members having a conversation"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm uppercase tracking-wide text-gray-500 font-medium">
              OUR MISSION
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
              Bring high quality English education to every English learner in
              the world
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Billions of people around the world are learning English to unlock
              economic opportunity for themselves and their families. We give
              those English learners on-demand access to native English speaking
              tutors to help them reach their full potential.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Why English?
            </h2>
            <blockquote className="text-xl italic text-gray-700 mb-4 max-w-3xl mx-auto">
              "In an increasingly globalized world, one of the most impactful
              things you can do for someone is to teach them English."
            </blockquote>
            <p className="text-gray-600 font-medium">
              - Afser Alam Ansari, Founder of Talk2Partners
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              Fluency in English gives you access to the global English speaking
              economy, and billions of people around the world are working hard
              to master the language. Like any skill, becoming an expert
              requires constant practice. We make that possible by giving
              English learners on-demand access to native English speaking
              tutors over video chat.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Company Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-6xl font-bold text-gray-900">1 year</div>
              <p className="text-lg text-gray-600">of tutoring every day</p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-bold text-gray-900">80+</div>
              <p className="text-lg text-gray-600">
                team members in 15 countries
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-bold text-gray-900">20+</div>
              <p className="text-lg text-gray-600">
                languages spoken by the team
              </p>
            </div>
          </div>

          <div className="mt-16 relative">
            <img
              src="https://cdn.prod.website-files.com/5fa5f3049b7bba128e5006a2/63d96eddc0382251dee7658a_HeatMap23.png"
              alt="Global team member locations heatmap"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                See us at work
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to fostering a healthy, happy, and safe work
                environment for our diverse team.
              </p>
              <a
                href="#"
                className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center"
              >
                Read the Careers Blog →
              </a>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/600/320?random=2"
                alt="Large team photo at company event"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="relative">
              <img
                src="https://picsum.photos/400/256?random=3"
                alt="Team meeting in conference room"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/400/256?random=4"
                alt="Team members collaborating"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/400/256?random=5"
                alt="Team working together"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Ready to join us?
          </h2>
          <Button
            size="lg"
            className="text-white px-8 py-4 text-lg"
            style={{ backgroundColor: "#006FFD" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#004297")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#006FFD")
            }
            onClick={() => setShowJobs(true)}
          >
            VIEW JOBS
          </Button>
          <div className="mt-8">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Delhi, India Applicant Privacy Notice
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
