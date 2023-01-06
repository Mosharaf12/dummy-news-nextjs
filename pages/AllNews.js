import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const AllNews = () => {
  
    const [news, setNews] = useState([])
    useEffect(()=>{
        fetch('news.json')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setNews(data)
        })
    },[])
    return (
        <div>
            <h3 className='font-bold text-center text-4xl py-12 border-b-2 border-blue-500'>TOTAL DUMMY NEWS <span className='text-blue-500'>{news.length}</span></h3>
            
            <div className='my-16 px-3 md:px-0'>
                {
                   news.map(item => <div className='mb-12 border-b-4 border-blue-500 pb-5' key={item._id}>
                    <div className=''>
                    <h2 className='text-3xl font-bold uppercase'>{item.title}</h2>
                    <h2 className='text-xl text-justify'>{item.shortdes}</h2>
                    </div>
                    <Image className='my-5' width="600" height="400" src={item.image}></Image>
                    <p className='text-justify'>{item.description}</p>
                    
                   </div>)
                        
                }
            </div>
        </div>
    );
};

export default AllNews;