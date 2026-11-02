import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const About = lazy(() => import("./pages/About"));
const Maria = lazy(() => import("./pages/Maria"));
const Products = lazy(() => import("./pages/Products"));
const Services = lazy(() => import("./pages/Services"));
const News = lazy(() => import("./pages/News"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const LegalNotice = lazy(() => import("./pages/legal/LegalNotice"));
const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/legal/CookiePolicy"));

const App = () => (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/maria-de-la-fuente" element={<Maria />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/novedades" element={<News />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/aviso-legal" element={<LegalNotice />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
        <Route path="/politica-de-cookies" element={<CookiePolicy />} />
        {/* Las rutas nuevas van encima de la ruta comodín. */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
