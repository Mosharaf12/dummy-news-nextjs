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
            {news.length}
        </div>
    );
};

export default AllNews;