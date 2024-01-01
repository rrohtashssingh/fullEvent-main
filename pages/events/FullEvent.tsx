"use client"
import React, { FormEventHandler, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import Fetch from './api/fetch';


const FullEvent = () => {
    

    const [query, setQuery] = useState("");
    
   

    return (
        <>
            <main className='xl:px-12'>
                <h1 className='text-4xl my-16 flex justify-start pl-0'><b>FOR YOU</b></h1>
                <div className="forYou rounded-3xl px-7 bg-purple-100 ">
                    <hr className='h-0 bg-black ' />
                    <Fetch/>
                </div>
                <h1 className='text-4xl my-16 flex justify-start pl-0'><b>Latest Events</b></h1>
                <div className="latest rounded-3xl px-7 bg-purple-100 ">
                    <hr className='h-0 bg-black ' />
                    <Fetch />
                </div>

                <h1 className='text-4xl my-16 flex justify-start pl-0'><b>History</b></h1>
                <div className="history rounded-3xl px-7 bg-purple-100 ">
                    <hr className='h-0 bg-black ' />
                    <Fetch/>
                </div>
            </main>
        </>
    )
}

export default FullEvent;

