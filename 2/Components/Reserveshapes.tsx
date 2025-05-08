"use client"

import React, { useState } from "react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
type Meetingroom = {
  name: string,
  available: boolean,
  postop: number,
  posbot: number
}

type Etage = {
    id:number,
  name: string,
  meetingrooms: Meetingroom[],
  svg: React.ReactNode
}

function Reserveshapes() {

  const selectedstyle:string="selected"
  const nonselectedstyledown:string="notselecteddown"
   const nonselectedstyleup:string="notselectedup"
   const basestyle="absolute transition-transform duration-300 hover:translate-y-[-10px] "
  const [selected,setselected]= useState({id:-1,isseleced:false});
  const [pos,setpos]=useState({x:0,y:0,id:-1})
  const [editMode,setEditMode]=useState<boolean>(false)
  useGSAP(()=>{
    selected.isseleced &&
    gsap.to(".img",{
        duration:0.5,
        rotateY:30,
        rotateX:60,
        rotateZ:-3,
        ease:"back.inOut"


    })
gsap.to(".selected",{
zIndex:500,
})
gsap.to(".notselecteddown",{
    y:50,
    stagger:0.2,
    opacity:0,
    duration:0.5,
    })
    gsap.to(".notselectedup",{
        y:-50,
        stagger:0.2,
        opacity:0,
        duration:0.5
        })
        gsap.to(".up",{
            yPercent:-50,
            duration:0.5,
            ease:"power4.in"
        
            })
            gsap.to(".down",{
                yPercent:50,
                duration:0.5,
   ease:"power4.in"
            
    
                })

  },[selected])
  const svgobj=(<></>)
  const [etages,setetages] = useState<Etage[]>([
    { id:0,
      name: "E1",
      meetingrooms: [
    
        {
          name: "m2",
          available: false,
          postop: 80,
          posbot: 90
        },
      ],
      svg: svgobj
    },
    {id:1,
      name: "E2",
      meetingrooms: [
        {
          name: "m1",
          available: true,
          postop: 60,
          posbot: 90
        },
      
      ],
      svg: svgobj
    },
    {id:2,
      name: "E3",
      meetingrooms: [
        {
          name: "m1",
          available: true,
          postop: 70,
          posbot: 150
        },
        {
          name: "m2",
          available: false,
          postop: 90,
          posbot: 50
        },
      ],
      svg: svgobj
    },
    {id:3,
      name: "E4",
      meetingrooms: [
        {
          name: "m1",
          available: true,
          postop: 50,
          posbot: 150
        },
        {
          name: "m2",
          available: false,
          postop: 50,
          posbot: 150
        },
      ],
      svg: svgobj
    }

  ])


  return (
    <div>
    <div className=" flex flex-col   w-full h-full" >
      {etages.map((item, index) => (
        <div 
          key={index} 
          className={ ((selected.isseleced)? selected.id===index? basestyle+selectedstyle+(index>2 ?" up":index!==2?" down":""): (selected.id>index&&selected.id>=0)? basestyle+nonselectedstyleup:basestyle+nonselectedstyledown:basestyle)}
          style={{ top: `${index * 100}px`, zIndex:selected.id===index?"":-index }} 
          onClick={()=>{
            setselected({id:index,isseleced:true})}}
        >
          <div className="flex  items-center">
            <p className="text-lg font-bold w-8 m-15">{item.name}</p>
            <div className="relative">
            <img 
      src='/vecteezy_free-floor-plan-vector_102594.svg' 
      alt='floor plan' 
      style={{border:"1px solid black",
        width: "350px", // Fixed size to prevent scaling
        height: "250px", 
        cursor:editMode?"pointer":"",

      }}
      
      onClick={(e)=>{
        if(editMode){
        const parent = e.currentTarget.getBoundingClientRect();
        
        const x = e.clientX - parent.left-46;
        const y = e.clientY - parent.top+22.5;
    
 setetages(prev=>{


    prev.at(index)?.meetingrooms.push({
        name:""+item.meetingrooms.length+1,
        available:true,
        posbot:x,
        postop:y,
    })
    
return prev

 })}
    }}
      className="w-full max-w-md img bg-white rotate-x-70 -rotate-y-10 rotate-z-50 shadow-xl/30"
    />
              {item.meetingrooms.map((room, idx) => (
                <React.Fragment key={idx}>
                  {room.available ? (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute w-8 h-8 z-10 "
                    
                      style={{ 
                        top: `${room.postop}px`, 
                        left: `${room.posbot}px`,
                         cursor:"pointer"
                      }}
                      viewBox="0 0 384 512"
                    >
                      <path 
                        fill="#33ff4b"
                        d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"
                      />
                    </svg>
                  ) : (
                    <svg 
                  
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute w-8 h-8 z-10"
                      style={{
                        top: `${room.postop}px`, 
                        left: `${room.posbot}px`,
                        cursor:"pointer"
                      }}
                      viewBox="0 0 384 512"
                    >
                      <path 
                        fill="#ff3333"
                        d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"
                      />
                    </svg>
                  )}
                </React.Fragment>
              ))}
            </div>
            <button className={selected.isseleced&&selected.id===index?"self-end p-2 rounded-lg cursor-pointer":"hidden"} style={{backgroundColor:editMode?"red":"green" }}  onClick={()=>{
                setEditMode(prev=>!prev)
            }}>ADD/EDIT</button>
            <button className={selected.isseleced&&selected.id===index?"self-end p-2 rounded-lg cursor-pointer":"hidden"} style={{backgroundColor:"red" }}  onClick={()=>{
        
        window.location.reload() }}>Return</button>
          </div>
        
        </div>
        
      ))}
   
    </div>
    </div>
  )
}

export default Reserveshapes