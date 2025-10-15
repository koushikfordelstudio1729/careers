import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CareersPage from './pages/CareersPage'
import AllJobsPage from './pages/AllJobsPage'
import JobDetailPage from './pages/JobDetailPage'
import ApplyPage from './pages/ApplyPage'
import ThankYouPage from './pages/ThankYouPage'

function App() {
  return (
    <div className="font-sans">
      <Router>
        <Routes>
          <Route path="/" element={<CareersPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/all-jobs" element={<AllJobsPage />} />
          <Route path="/careers/:id" element={<JobDetailPage />} />
          <Route path="/careers/:id/apply" element={<ApplyPage />} />
          <Route path="/careers/thank-you" element={<ThankYouPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App