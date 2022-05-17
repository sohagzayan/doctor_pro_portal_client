import React from "react";
import heroImage from '../../assets/images/heroimage.png';
import ornamentImg from '../../assets/images/lineStyle.png';
const Hero = () => {
  return (
    <div  className="container mx-auto px-4 ">
      <div class="hero ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={heroImage}
            class="md:w-2/5 "
            alt="img"
          />

          <div className="md:px-10">
              <span className="py-2 font-bold text-primary  text-xl px-4" style={{
                  backgroundImage : `url(${ornamentImg})`
              }}>We Provide All Health Care Solution</span>
            <h1 class="text-5xl font-extrabold mt-6 text-secondary leading-snug  ">Your New <span className="text-primary">Smile</span> Starts Here</h1>
            <p class="py-6 text-secondary  font-light">
            Taimish Dentistry. 537 Dundas St E. Toronto Tweet. Select  in Downtown Core (Central), Toronto. - Downtown - Alexandra Park Baldwin Village Cabbagetown Chinatown Church and Wellesley CityPlace Corktown Discovery District Distillery District East Bayfront Fashion District Financial District ...
            </p>
            <button class=" btn-warning text-white px-12 rounded-lg text-lg tracking-wider font-bold py-4">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;



