import React, { useState } from 'react';
import Articles from '../components/Articles';
import Hero from '../components/Hero';
import House from '../components/House';
import Services from '../components/Services';
import Footer from '../layouts/Footer';
import Loader from '../shared/Loader';
const Home = () => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 2000);
  if (loading) return <Loader />;
  return (
    <div>
      <Hero />
      <House />
      <Services />
      <Articles />
      <Footer />
    </div>
  );
};

export default Home;
