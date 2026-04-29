import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { SkipNav } from './components/layout/SkipNav';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { ImportExport } from './pages/ImportExport';
import { NotFound } from './pages/NotFound';
import { PropertyPage } from './pages/Property';

export default function App() {
  return (
    <>
      <SkipNav />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/property" element={<PropertyPage />} />
          <Route path="/property/rent" element={<PropertyPage purpose="rent" />} />
          <Route path="/property/sale" element={<PropertyPage purpose="sale" />} />
          <Route path="/import-export" element={<ImportExport />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
