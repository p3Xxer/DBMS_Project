import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserService from "../services/user.service";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typewriter from "typewriter-effect";
import TypeWriterEffect from 'react-typewriter-effect';
import sample from "../Videos/pexels-yan-krukov-8480550.mp4"
const Home = () => {
//   const particlesInit = async (main) => {
//   console.log(main);

//   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
//   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//   // starting from v2 you can add only the features you need reducing the bundle size
//   await loadFull(main);
// };

// const particlesLoaded = (container) => {
//   console.log(container);
//};
return (
<div >
<video id = "video" className='videoTag' autoPlay loop muted fluid>
    <source src={sample} type='video/mp4' />
</video>
  <TypeWriterEffect
        textStyle={{
          fontFamily:  'Montserrat',
          color: 'Black',
          fontWeight: 'Bold',
          fontSize: '3em',
          
          
          
        }}
        startDelay={500}
        cursorColor="#3F3D56"
        multiText={[
          ' If you don\'t know where you are going, you will wind up somewhere else. - Yogi Berra',
          
        ]}
        multiTextDelay={1000}
        typeSpeed={80}
      />
      </div>
      
)}

export default Home;
