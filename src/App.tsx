import React from 'react';
import { Header, Hero, About, FeaturedDishes, Menu, Gallery, Location, Footer } from '@components/index';

function App() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedDishes />
        <Menu />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
