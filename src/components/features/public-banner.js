import React from 'react';
import heroPublic from '@/assets/images/hero-public.png';

export const PublicBanner = () => {
  return (
    <section className="public-banner">
      <div className="public-banner--container">
        <div className="hero-title-container">
          <h1 className="hero-title">Discover events for all the things you love</h1>
          <a href="#" role="navigation" aria-label="Join Meetup" className="join-btn">Join Meetup</a>
        </div>
        <div className="hero-image-container">
          <img src={heroPublic} alt="" />
        </div>
      </div>
    </section>
  );
};
