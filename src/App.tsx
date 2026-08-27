import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { QuoteProvider } from "@/context/QuoteContext"
import { HomePage } from "@/pages/HomePage"

export default function App() {
  return (
    <BrowserRouter>
      <QuoteProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </QuoteProvider>
    </BrowserRouter>
  )
}
