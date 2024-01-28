import React, { useRef } from 'react'
import Cards from './Cards';
const Foreground = () => {


          const ref =useRef(null);
          const data = [
                 
                    {
                              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fuga pariatur quis odio.",
                              filesize: ".9mb",
                              close: true,
                              tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
},
                    {
                              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fuga pariatur quis odio.",
                              filesize: ".9mb",
                              close: true,
                              tag: { isOpen: false, tagTitle: "Download Now", tagColor: "white" }
},
                    {
                              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fuga pariatur quis odio.",
                              filesize: ".9mb",
                              close: false,
                              tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" }
},
]
 return (
                    <>
                              <div  ref={ref}className='fixed w-full h-full left-0 top-0 z-[3] flex flex-wrap gap-5 p-5'>
                                        
                              {data.map((item, index) => (
                                        <Cards data={item} reference={ref}/>
                                        ))}
                          
                                        </div>
                    </>
          )
}
export default Foreground;