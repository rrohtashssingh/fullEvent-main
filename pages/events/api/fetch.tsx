
"use client"
import React, { useState, useEffect } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaSearch } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";

//interface for all topics of Fetching
interface dataFetch {
    title: string,
    venue: string,
    offline: string,
    online: string,
    description: string,
    date: number,
    urlToImage: string,
}


const Fetch = () => {
    const [data, setData] = useState<dataFetch[]>([{
        title: "", venue: "",
        offline: "",
        online: "",
        description: "",
        date: 1, urlToImage: ""
    }]);
    const [query, setQuery] = useState("");
    const [keyword, setKeyword]=useState("");

    //fetching the data here
    useEffect(() => {
        if (query.trim() === '') {
            // here i have used news api if anyone wants to use their api they can use their
            axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=073988eab35344e3a3ca94fdf88134bb`)
                .then((res) => {
                    setData(res.data.articles);
                    console.log(res.data.articles)
                })
        } else {
            axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=073988eab35344e3a3ca94fdf88134bb`)
                .then((res) => {
                    setData(res.data.articles);
                })
        }
    }, [query])

    //Onclick button handle button
    const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
    }


    return (
        <>
           {/* input box starts here */}
            <div className='flex justify-end align-center'>
                <div className="form relative search">
                    <input className='p-2 rounded-l-lg border-2 border-black w-60' onChange={(e) => setQuery(e.target.value)} type="text" placeholder='Search Events Here' />
                    <FaSearch size={22} color={"gray"} className="absolute bottom-2 right-20" />
                    <button onClick={()=>handleSearch} className="bg-sky-600 text-white rounded-r-lg outline-none border-2 border-black p-2 text-base">Search</button>
                </div>
            </div>

      {/*  Card is enclosed withinn Swiper tag */}
            <Swiper
                navigation={true}
                spaceBetween={30}
                modules={[Navigation]}
                loop={false}
                breakpoints={{
                    0: {
                        spaceBetween: 10,
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    379: {
                        spaceBetween: 10,
                        slidesPerView: 1,
                    },
                    457: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                    },
                    810: {
                        spaceBetween: 15,
                        slidesPerView: 3,
                    },
                    1320: {
                        spaceBetween: 15,
                        slidesPerView: 4,
                    },
                    1725: {
                        spaceBetween: 30,
                        slidesPerView: 5,
                    },
                    2236: {
                        spaceBetween: 45,
                        slidesPerView: 6,
                    },
                }}
                className="mySwiper pb-3 pt-4 h-100"
            >
                <div className="justify-center h-100 mt-5 bg-purple-100">
                    {data.map((data, key) => (
                        <SwiperSlide key={key} className="register border-purple-100 bg-purple-100 h-100">
                            <div className='content my-24 mb-10 relative h-100 rounded-xl bg-white border-sky-600 '>
                                <div className="overflow-hidden rounded-xl bg-gray-100">
                                    <img className='position-absolute w-75 sm:w-50 rounded-lg translate-middle top-0 start-50 ' src={data.urlToImage} />
                                </div>
                                <div className='px-3 h-100 py-md-46 rounded-xl py-16 pb-12'>
                                    <div className="changable flex justify-between px-0">
                                        <div className="users flex justify-start flex-col items-center">
                                            <FaUser size={20} color={"black"} /> 23
                                        </div>
                                        <div className="users flex flex-col justify-content-start align-middle">
                                            <FaStar size={20} color={"orange"} /> 3.5
                                        </div>
                                    </div>
                                    <div className=''><b>Title:</b> {data.title}</div>
                                    <div><b>Venue:</b> {data.venue}</div>
                                    <div><b>Offline:</b> {data.offline}</div>
                                    <div><b>Online:</b> {data.online}</div>
                                    <div><b>Description: </b>{data.description}</div>
                                    <div><b>{data.date}</b></div>
                                    <button className='register btn btn-primary position-absolute top-100 start-50 translate-middle  '>
                                        <Link className="btn text-white" href="/fullevent">REGISTER</Link>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>

        </>
    )
}
export default Fetch