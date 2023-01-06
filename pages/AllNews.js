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
            <div>
                {
                   news.map(item => <div key={item._id}>
                    <h2>{item.title}</h2>
                    <h2>{item.shortdes}</h2>
                    <Image width="600" height="400" src={item.image}></Image>
                    
                   </div>)
                        
                }
            </div>
        </div>
    );
};

export default AllNews;