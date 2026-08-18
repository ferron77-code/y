import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ES from './pages/es'
import EN from './pages/en'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ES />} />
        <Route path="/en" element={<EN />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
