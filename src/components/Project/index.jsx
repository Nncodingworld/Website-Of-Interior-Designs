import React,{useRef } from 'react'
import "./Project.css"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {projects} from '../../data'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from "gsap/dist/ScrollTrigger"

const Project = () => {
   const container= useRef(null)
      useGSAP(()=>{
        const timeline = gsap.timeline({
          delay:.5,
          scrollTrigger:{
            trigger:container.current,
            start:"20% bottom",
            end:"bottom top"
          }
        })
        timeline
      
        .from(
          ".title",
          {y:50, opacity:0}
        )
        .from(
          ".sub_title",
          {y:50, opacity:0}
        )
        .fromTo(
          ".slick-slide",
          {x:100, opacity:0},
          {opacity:1,stagger:.5,x:0}
        )
        
      },{scope:container})
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    centerMode: true,
    pauseOnHover: true,
    autoPlay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: 0,
        },
      },
    ],
    dots: true, // Add dots for navigation
    arrows: true,
  };

  return (
    <section id="project" ref={container}>
      <div className="project_top">
        <h1 className="title">
          Our <span className='g-text'>Project</span>
        </h1>
        <h3 className="sub_title">
        "Exceptional Spaces, Remarkable Designs: Where Creativity Meets Functionality"
        </h3>
      </div>
     <Slider {...settings} className='project_container'>
{
  projects.map((project,index)=>(
    <React.Fragment key={index}>
      <div className="image_container">
        <img src={project.image}alt={project.title}/>
      </div>
      <div className="box">
        <h1 className="name">{project.title}</h1>
      </div>
      <div className="details">
        <h3 className="name">{project.title}</h3>
        <p className="text_muted description">{project.description}</p>
        <button className="btn">Read More</button>
      </div>
    </React.Fragment>
  ))
}
     </Slider>
    </section>
  )
}

export default Project
