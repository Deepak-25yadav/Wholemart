import { Box,Heading,Image, Spacer } from "@chakra-ui/react";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderImg } from "../Image/SliderImage";
import { bannerImg } from "../Image/SliderImage";
import { bestOfMyntra } from "../Image/SliderImage";
import { categoriesOfBag } from "../Image/SliderImage";
import  { Component } from "react";
//   import Slider from "react-slick";
import { WomenSlider } from "../Image/WomenSlider";

const SampleSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };
  
    return (
      <Slider {...settings}>
        {/* <div>
         <Image></Image>
        </div> */}
        {sliderImg.map((item)=><div>
         <Image src={item.image}/>
        </div>)}
       
      </Slider>
    );
  }



//   import React, { Component } from "react";
//   import Slider from "react-slick";
  
 export class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <h2> Single Item</h2>
          <Slider {...settings}>
            {/* <div>
             <Image src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/38f37101-f335-44be-af8f-5d53de15c75e1649530843725-Casual---Sports-Shoes_Desk--1-.jpg"/>
            </div> */}
           {WomenSlider.map((item)=><div><Image src={item.image}/></div>)}
          </Slider>
        </div>
      );
    }
  }




function Home(){


    return<Box>
         <Box> <SampleSlider/></Box>
         
          <Box margin="20px"> <Heading>Deal of The Day</Heading></Box>
         
          <Box display={{base:"grid"}} gap="8px" gridTemplateColumns={{xl:"repeat(8,1fr)",lg:"repeat(6,1fr)",md:"repeat(4,1fr)",sm:"repeat(2,1fr)",base:"repeat(1,1fr)"}}>
            {bannerImg.map((item)=><Box borderRadius={{base:"20px"}} boxShadow={{base:"100px"}} width="100%"><Image width="100%" src={item.image}/></Box>)}
          </Box>

          <Box>
         <SimpleSlider/>
          </Box>

          <Box margin="20px"> <Heading as="h1" size="base">BEST OF MYNTRA EXCLUSIVE BRANDS</Heading></Box>
          <Box display={{base:"grid"}} gap="8px" gridTemplateColumns={{xl:"repeat(6,1fr)",lg:"repeat(5,1fr)",md:"repeat(4,1fr)",sm:"repeat(2,1fr)",base:"repeat(1,1fr)"}}>
            {bestOfMyntra.map((item)=><Box borderRadius={{base:"20px"}} boxShadow={{base:"100px"}} width="100%"><Image width="100%" src={item.image}/></Box>)}
          </Box>


          <Box margin="20px"> <Heading as="h1" size="base">Categories of Bag </Heading></Box>
          <Box display={{base:"grid"}} gap="8px" gridTemplateColumns={{xl:"repeat(8,1fr)",lg:"repeat(6,1fr)",md:"repeat(4,1fr)",sm:"repeat(2,1fr)",base:"repeat(1,1fr)"}}>
            {categoriesOfBag.map((item)=><Box borderRadius={{base:"20px"}} boxShadow={{base:"100px"}} width="100%"><Image width="100%" src={item.image}/></Box>)}
          </Box>


        
      

    </Box>
}
export default Home;