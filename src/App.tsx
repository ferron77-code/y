import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import EN from './pages/en'
import ES from './pages/es'

export default function App() {
  return (
    // BASE_URL is "/" on Hostinger and "/y/" on GitHub Pages; the router has to
    // agree with it or every route resolves one level off. Trailing slash is
    // trimmed because basename must not carry one.
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Routes>
        <Route path="/" element={<ES />} />
        <Route path="/en" element={<EN />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
