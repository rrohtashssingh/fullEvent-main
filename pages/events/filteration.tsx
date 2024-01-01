import React from 'react'
import { FaSearch } from "react-icons/fa";

const Filteration = () => {
    return (
        <>
            <div className="container rounded-xl flex justify-between items-center gap-4 p-2">
                <div className="looking_for text-white">
                    <p className='text-sm'>Looking For</p>
                    <input type="text" placeholder='eg.. Frontend Developer' className=' w-56 outline-none border-b-2 bg-transparent border-purple-600 p-2' />
                </div>
                <div className="in_place text-white">
                    <p className='text-sm'>In</p>
                    <input type="text"placeholder='eg., Mumbai' className='w-56 outline-none border-b-2 bg-transparent border-purple-600 p-2' />
                </div>
                <div className="date text-white">
                    <p className='text-sm'>Date</p>
                    <select name="Dates" id="date" className='w-56 outline-none bg-transparent border-b-2 p-2 border-purple-600 '>
                        <option className=' outline-none border-b-2 border-purple-600' value="">Any Date</option>
                        <option className=' outline-none border-b-2 border-purple-600' value="">12</option>
                        <option className=' outline-none border-b-2 border-purple-600' value="">13</option>
                        <option className=' outline-none border-b-2 border-purple-600' value="">14</option>
                        <option className=' outline-none border-b-2 border-purple-600' value="">15</option>
                        <option className=' outline-none border-b-2 border-purple-600' value="">16</option>
                        <option className=' outline-none border-b-2 border-purple-600' value="">17</option>
                    </select>
                </div>
                <div className="search_icon bg-purple-600 rounded-xl p-3">
                    <FaSearch size={20} color={"white"} className=" cursor-pointer" />
                </div>
            </div>
        </>
    )
}

export default Filteration;