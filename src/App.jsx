import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './pages/Layout'
import { Home } from './pages/Home'
import { PageNotFound } from './pages/PageNotFound'
import { CourseDj } from './pages/CourseDj'
import { CourseProduction } from './pages/CourseProduction'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/course-dj" element={<CourseDj />} />
          <Route path="/course-production" element={<CourseProduction />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
