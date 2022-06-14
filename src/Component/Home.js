import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{backgroundImage: `url(https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/129325364/original/afaddcb9d7dfaaf5bff7ef04101935814665ac16/design-an-attractive-background-for-your-website.png)`}}>
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">I will create a simple site to give you and i try mey best to make this or i will give the time on from 2 day but i took the time is 3 day so that's why sorry.I have some problem but i think you consider it.</p>
      <Link to='/landingPage' class="btn btn-primary">LandingPage</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;