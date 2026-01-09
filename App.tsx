
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import YouTubeSection from './components/YouTubeSection';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StrategyAssistant from './components/StrategyAssistant';
import BlogPage from './pages/BlogPage';
import BlogArchive from './pages/BlogArchive';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#inicio');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#inicio');
      // Scroll to top on route change
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Simple Router
  const renderContent = () => {
    if (route === '#/blog') {
      return <BlogArchive />;
    }
    
    if (route.startsWith('#/blog/')) {
      const slug = route.replace('#/blog/', '');
      return <BlogPage slug={slug} />;
    }

    return (
      <>
        <Hero />
        <Services />
        <YouTubeSection />
        <Blog />
        <Contact />
      </>
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {renderContent()}
      </main>
      <Footer />
      <StrategyAssistant />
    </div>
  );
};

export default App;
