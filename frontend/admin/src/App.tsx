import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Dashboard from "./pages/journal/Dashboard";
import Pages from "./pages/journal/Pages";
import Articles from "./pages/journal/Articles";
import UploadJournals from "./pages/journal/UploadJournals";
import Volumes from "./pages/journal/Volumes";
import UploadVolume from "./pages/journal/UploadVolume";

export default function App() {
  return (
    <>
      <Router basename="/admin">
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Dashboard />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/upload-journals" element={<UploadJournals />} />
            <Route path="/volumes" element={<Volumes />} />
            <Route path="/upload-volume" element={<UploadVolume />} />
          </Route>

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
