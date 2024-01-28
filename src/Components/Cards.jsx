import React from 'react'
import { FaFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { data } from 'autoprefixer';
import { motion } from "framer-motion"

const Cards = (props,reference) => {
 return (
            <motion.div drag dragConstraints={reference} 
                whileDrag={{scale:0.8}}
                dragElastic={0.1}
                dragTransition={{bounceStiffness:600 ,bounceDamping:100}}
            className='relative w-60 h-[260px] bg-zinc-900/90 rounded-[50px] flex-shrink-0 text-white p-5 overflow-hidden px-8 py-10'>
                    <FaFileLines />
          <p className='font-semibold text-[13px] leading-tight p-5'>
                    {props.data.desc}</p>
          <div className='footer absolute bottom-0 left-0 h-[24px] w-full mb-[40px]'>
          <div className=' flex items-center justify-between px-2 pb-[5px]'>
                    <h5>{props.data.filesize}</h5>
                    <span className='w-6 h-6 bg-zinc-600 rounded-xl justify-center text-center px'>
              {props.data.close ?<IoCloseSharp color="#fff" className='m-[3.5px]'/>: <LuDownload color="#fff" className='m-[3.1px]' />}                
                    </span>

          </div>
          {props.data.tag.isOpen && <div className={`tag w-full ${props.data.tag.tagColor=="blue" ? "bg-blue-600" : "bg-green-600 "} h-10 `}>
           <h3 className='flex items-center justify-center py-[5px] text-sm font-semibold '>
                     {props.data.tag.tagTitle}</h3>
                     </div>}
                                 
                     </div>
           </motion.div>
          )
}

export default Cards;