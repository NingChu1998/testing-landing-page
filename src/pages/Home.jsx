import React from 'react';
import Header from '../components/Header';
import HeroHome from '../components/HeroHome';
import Features from '../components/Feature';
import Benefits from '../components/Benefits';
import CTA from '../components/JoinSection';
import Footer from '../components/Footer';
import PriceCard from '../components/Price';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden scrollbar-hide">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow scrollbar-hide"> 
        <div className="h-full">
          <HeroHome />
          <Benefits />
        </div> 
        <Features />
        <PriceCard />
        <CTA />
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;