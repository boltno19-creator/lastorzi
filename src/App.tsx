import { useState, useRef, useEffect } from 'react';
import Hero from './components/Hero/Hero';
import CollectionGrid from './components/Collections/CollectionGrid';
import StorySection from './components/Story/StorySection';
import Footer from './components/Footer/Footer';
import BraceletsLandingPage from './pages/BraceletsLandingPage';
import PurchasePage from './pages/PurchasePage';

type Page = 'home' | 'bracelets' | 'purchase';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (section: 'home' | 'shop' | 'story' | 'contact') => {
    if (section === 'story' && storyRef.current) {
      storyRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleHeroShop = () => {
    handleNavigate('story');
  };

  const handleHeroStory = () => {
    handleNavigate('story');
  };

  const handleCollectionSelect = (collectionId: string) => {
    if (collectionId === 'bracelets') {
      setCurrentPage('bracelets');
    }
  };

  if (currentPage === 'purchase') {
    return <PurchasePage onBack={() => setCurrentPage('bracelets')} />;
  }

  if (currentPage === 'bracelets') {
    return (
      <>
        <BraceletsLandingPage onOrderNow={() => setCurrentPage('purchase')} />
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white" dir="ltr">
      <main>
        <Hero onShopClick={handleHeroShop} onStoryClick={handleHeroStory} />

        <CollectionGrid onCollectionSelect={handleCollectionSelect} />

        <div ref={storyRef}>
          <StorySection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
