import React from 'react';
import lineStyle from '../../assets/images/lineStyle.png';
import ProfileBigImage1 from '../../assets/images/pic-1.ad1ed7ee.jpg';
import ProfileBigImage2 from '../../assets/images/pic-2.0593bc2f.jpg';
import ProfileBigImage3 from '../../assets/images/pic-3.fa689b10.jpg';
import overServicesBigImage1 from '../../assets/images/pic1.a3848a11.jpg';
import overServicesBigImage2 from '../../assets/images/pic2.67db6c47.jpg';
import overServicesBigImage3 from '../../assets/images/pic3.89b83151.jpg';
import OurServicesCard from '../OurServicesCard/OurServicesCard';

const OurServices = () => {

    const ourServicesData = [
        {img : overServicesBigImage1 , profile : ProfileBigImage1 , name : 'John deo' , date : '21 July 2021' , title : "In this hospital there are special surgeon online" },
        {img : overServicesBigImage2 , profile : ProfileBigImage2 , name : 'Peter Packer' , date : '20 July 2021' , title : "Can you get a diflucan prescription online?" },
        {img : overServicesBigImage3 , profile :ProfileBigImage3 , name : 'Sonar Moyna' , date : '19 July 2021' , title : "Why Is Skin Surgeon Considered Underrated" },
    ]
    return (
        <div className='container mx-auto px-4 text-center mt-20'>
            <span style={{
                backgroundImage : `url(${lineStyle})`
            }} className='text-2xl font-semibold px-4 text-warning mb-3 inline-block '>OUR SERVICES</span>
            <h2 className='text-4xl font-bold tracking-wider  text-primary mb-4'>Services We Provide</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    ourServicesData.map(item => <OurServicesCard 
                        item={item}
                        />)
                }
            </div>
        </div>
    );
};

export default OurServices;