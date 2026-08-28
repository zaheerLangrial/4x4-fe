import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { AppLayout } from "@/components/AppLayout"
import { QuoteProvider } from "@/context/QuoteContext"
import { AboutPage } from "@/pages/AboutPage"
import { ContactPage } from "@/pages/ContactPage"
import { GalleryPage } from "@/pages/GalleryPage"
import { HomePage } from "@/pages/HomePage"
import { NewsArticlePage } from "@/pages/NewsArticlePage"
import { NewsPage } from "@/pages/NewsPage"
import { ReviewsPage } from "@/pages/ReviewsPage"
import { ServicesPage } from "@/pages/ServicesPage"

export default function App() {
  return (
    <BrowserRouter>
      <QuoteProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsArticlePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </QuoteProvider>
    </BrowserRouter>
  )
}
