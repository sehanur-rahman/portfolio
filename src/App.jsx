import { lazy, useEffect, useState, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Preloader from "./Components/Preloader";
import Footer from "./Components/Footer";
import SmoothScroll from "./Components/SmoothScroll";
import CustomCursor from "./Components/CustomCursor";
import RGBScrollbar from "./Components/RgbScroll";
import ScrollParallaxVideo from "./Components/ParallaxBackground";

const Home = lazy(() => import("./Pages/Home"));
const ProjectDetail = lazy(() => import("./Sections/projectDetails"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll isLoading={loading}>
      <div className="relative bg-transparent text-white">
        {!loading && <CustomCursor />}
        {!loading && <RGBScrollbar />}

        <Preloader isLoading={loading} />

        {!loading && (
          <>
            <div className="fixed inset-0 -z-50 pointer-events-none">
              <ScrollParallaxVideo />
            </div>

            <div className="relative z-10">
              <Suspense fallback={null}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects/:id" element={<ProjectDetail />} />
                </Routes>
              </Suspense>

              <Footer />
            </div>
          </>
        )}
      </div>
    </SmoothScroll>
  );
}

export default App;
