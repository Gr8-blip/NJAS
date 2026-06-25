import { BrowserRouter as Router, Navigate, Outlet, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Dashboard from "./pages/journal/Dashboard";
import Pages from "./pages/journal/Pages";
import UploadPage from "./pages/journal/UploadPage";
import Articles from "./pages/journal/Articles";
import UploadArticle from "./pages/journal/UploadArticle";
import UploadJournals from "./pages/journal/UploadJournals";
import Volumes from "./pages/journal/Volumes";
import UploadVolume from "./pages/journal/UploadVolume";
import { isAuthenticated } from "./services/api";

function ProtectedAdmin() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/signin" replace />;
}

export default function App() {
  return (
    <>
      <Router basename="/admin">
        <ScrollToTop />
        <Routes>
          <Route element={<ProtectedAdmin />}>
            <Route element={<AppLayout />}>
              <Route index path="/" element={<Dashboard />} />
              <Route path="/pages" element={<Pages />} />
              <Route path="/upload-page" element={<UploadPage />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/upload-article" element={<UploadArticle />} />
              <Route path="/upload-journals" element={<UploadJournals />} />
              <Route path="/volumes" element={<Volumes />} />
              <Route path="/upload-volume" element={<UploadVolume />} />
            </Route>
          </Route>

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
