/** @format */

"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CareersLanding() {
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

      <section className="relative bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-slide-in-left">
                Let's build the future of education together
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed animate-slide-in-left animation-delay-200">
                Come, join us and together we can transform the way the world
                learns English.
              </p>
              <div className="pt-4 animate-slide-in-left animation-delay-400">
                <Button
                  asChild
                  size="lg"
                  className="text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: "#00BFA5" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#00A693")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#00BFA5")
                  }
                >
                  <Link to="/all-jobs">View all job openings</Link>
                </Button>
              </div>
            </div>

            {/* Illustration Section */}
            <div className="relative animate-fade-in-right">
              <div className="relative w-full h-96 flex items-center justify-center">
                {/* Background Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Large Blue Circle */}
                  <div className="w-64 h-32 bg-blue-500 rounded-full transform rotate-12 opacity-90 animate-float-slow"></div>

                  {/* Orange Circle */}
                  <div className="absolute top-20 left-16 w-16 h-16 bg-orange-400 rounded-full animate-bounce-slow animation-delay-300"></div>

                  {/* Green Circle */}
                  <div className="absolute bottom-16 right-12 w-32 h-16 bg-green-400 rounded-full animate-pulse-slow animation-delay-500"></div>

                  {/* Purple Star */}
                  <div className="absolute top-8 right-8 w-8 h-8 bg-purple-500 transform rotate-45 animate-spin-slow animation-delay-700"></div>

                  {/* Books Stack */}
                  <div className="absolute bottom-8 left-20 space-y-1 animate-float animation-delay-200">
                    <div className="w-16 h-3 bg-red-400 rounded"></div>
                    <div className="w-14 h-3 bg-yellow-400 rounded"></div>
                    <div className="w-18 h-3 bg-blue-400 rounded"></div>
                  </div>

                  {/* Hexagon */}
                  <div className="absolute top-12 left-32 w-6 h-6 bg-yellow-400 transform rotate-45 animate-wiggle animation-delay-600"></div>

                  {/* Study Elements */}
                  <div className="absolute top-16 right-20 w-8 h-12 bg-brown-400 rounded-sm animate-float animation-delay-800"></div>
                  <div className="absolute bottom-20 right-32 w-4 h-4 bg-pink-400 rounded-full animate-bounce-slow animation-delay-1000"></div>

                  {/* Graduation Cap */}
                  <div className="absolute top-4 left-8 w-6 h-6 bg-gray-800 rounded-sm transform -rotate-12 animate-float-slow animation-delay-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center space-y-4 mb-16">
            <p className=" lg:text-3xl text-sm uppercase tracking-wide text-gray-500 font-medium">
              OUR MISSION
            </p>
            <h2 className="text-4xl lg:text-3xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
              Bring high quality English education to every English learner in
              the world
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Billions of people around the world are learning English to unlock
              economic opportunity for themselves and their families.
              Talk2Partners™ gives those English learners on-demand access to
              native English speaking tutors to help them reach their full
              potential.
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
              requires constant practice. Talk2Partners™ makes that possible by
              giving English learners on-demand access to native English
              speaking tutors over video chat.
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
                Talk2Partners™ is committed to fostering a healthy, happy, and
                safe work environment for our diverse team.
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
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Online learning and education technology"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="English language learning books and materials"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Student studying with laptop and books"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Teacher helping student with studies"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-16 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-pink-200 rounded-full opacity-25 animate-pulse"></div>
          <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-indigo-200 rounded-full opacity-20 animate-bounce"></div>
        </div>
        
        <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
              <span className="text-2xl text-white">🚀</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to join us?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Take the next step in your career and help us revolutionize English education worldwide. 
              Your journey starts here!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/all-jobs" className="flex items-center space-x-2">
                <span>VIEW ALL JOBS</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </Button>
            
            <button className="text-gray-600 hover:text-gray-900 font-medium flex items-center space-x-2 transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 000-5H9v5zm0 0H7.5A2.5 2.5 0 005 7.5v2.5m0 0v3a2.5 2.5 0 002.5 2.5H9" />
              </svg>
              <span>Learn More About Us</span>
            </button>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Open Positions</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Remote Friendly</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-pink-600 mb-2">Global</div>
              <div className="text-gray-600 font-medium">Impact Mission</div>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-8">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors duration-300"
            >
              Delhi, India Applicant Privacy Notice
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
