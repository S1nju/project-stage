"use client"
import React, { useState,useEffect } from "react"
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

  const [selected,setselected]= useState({id:-1,isseleced:false})
  const [editMode,setEditMode]=useState<boolean>(false)
  const [boxesReady, setBoxesReady] = useState(false);

  useEffect(() => {
    // Set a flag after the first render
    setBoxesReady(true);
  }, []);
  const [nextitems,setnextitems]=useState(0);
  useGSAP(()=>{

    if(selected.isseleced){
    gsap.to(".img",{
        duration:0.5,
        rotateY:30,
        rotateX:60,
        rotateZ:-3,
        ease:"power4.out"


    })
gsap.to(".selected",{
zIndex:500,
})

gsap.to(".selected",{
    zIndex:500,
    })
    function hideElement2()
    {
        gsap.set(".notselecteddown", {display:"none"});
    }
gsap.to(".notselecteddown",{
    y:50,
    stagger:0.1,
    'webkitFilter': 'blur(25px)',
    opacity:0,
    onComplete:hideElement2,
    duration:0.2,
    })
    function hideElement3()
    {
        gsap.set(".notselectedup", {display:"none"});
    }

    gsap.to(".notselectedup",{
        y:-50,
        stagger:0.1,
        opacity:0,
        onComplete:hideElement3,
        'webkitFilter': 'blur(25px)',
        duration:0.2
        })
        gsap.to(".up",{
            yPercent:-50,
            duration:0.5,
            ease:"power4.out"

            })
            gsap.to(".down",{
                yPercent:50,
                duration:0.5,
   ease:"power4.out"


                })}

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
    },
    {id:4,
        name: "E5",
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
      },
      {id:5,
        name: "E6",
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
      },
      { id:6,
        name: "E7",
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
      { id:7,
        name: "E8",
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

      { id:8,
        name: "E9",
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
      { id:9,
        name: "E10",
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
      { id:10,
        name: "E11",
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
      { id:11,
        name: "E12",
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
      { id:12,
        name: "E13",
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
      { id:13,
        name: "E14",
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
      { id:14,
        name: "E16",
        meetingrooms: [

          {
            name: "m2",
            available: false,
            postop: 80,
            posbot: 90
          },
        ],
        svg: svgobj
      }

  ])
  function chunkArray(array:Etage[], size:number) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  const Showedetages=chunkArray(etages,4);
  let zcoef=[4,3,2,1]
    const newLocal =(item:Etage,index:number,type:string)=> (<div

        className={type==="blur-[20px] opacity-0.2 nexto "&& "blur-[20px] opacity-0.3 nexto  "||((selected.isseleced) ?
            selected.id === index ? type + selectedstyle +
             (index%4 > 2 ? " up" : index%4 !== 2 ? " down" : "")
             : (selected.id > index && selected.id >= 0) ?
             type + nonselectedstyleup : type + nonselectedstyledown : type)}
        style={{ top: `${index * 120}px`, zIndex:type==="blur-[20px] opacity-0.2 nexto "?"":zcoef[index] }}
        onClick={() => {
            setselected({ id: index, isseleced: true });

            if(!boxesReady)return;


            gsap.to(".nexto",{

              opacity:0})

        } }
    >
        <div className="flex  items-center">
            <p className="text-lg font-bold w-8 m-15">{item.name}</p>
            <div className="relative">
                <img
                    src='/vecteezy_free-floor-plan-vector_102594.svg'
                    alt='floor plan'
                    style={{
                        border: "1px solid black",
                        width: "350px", // Fixed size to prevent scaling
                        height: "250px",
                        cursor: editMode ? "pointer" : "",

                    }}

                    onClick={(e) => {
                        if (editMode) {
                            const parent = e.currentTarget.getBoundingClientRect();

                            const x = e.clientX - parent.left - 48;
                            const y = e.clientY - parent.top + 25;


                            setetages(prev => {
                           const indexInOrignalArray=Showedetages[nextitems][index].id;
                                prev.at(indexInOrignalArray)?.meetingrooms.push({
                                    name: "" + item.meetingrooms.length + 1,
                                    available: true,
                                    posbot: x,
                                    postop: y,
                                });

                                return prev;


                            });

                        }
                    } }
                    className="w-full max-w-md img bg-white rotate-x-70 -rotate-y-10 rotate-z-50 shadow-xl/30" />
                {item.meetingrooms.map((room, idx) => (
                    <React.Fragment key={idx}>
                        {room.available ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute w-8 h-8 z-10 "

                                style={{
                                    top: `${room.postop}px`,
                                    left: `${room.posbot}px`,
                                    cursor: "pointer"
                                }}
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="#33ff4b"
                                    d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" />
                            </svg>
                        ) : (
                            <svg

                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute w-8 h-8 z-10"
                                style={{
                                    top: `${room.postop}px`,
                                    left: `${room.posbot}px`,
                                    cursor: "pointer"
                                }}
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="#ff3333"
                                    d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" />
                            </svg>
                        )}


                    </React.Fragment>
                ))}
            </div>
            <button className={selected.isseleced && selected.id === index ? "self-end p-2 rounded-lg cursor-pointer" : "hidden"} style={{ backgroundColor: editMode ? "blue" : "green" }} onClick={() => {
                setEditMode(prev => !prev);
            } }>ADD/EDIT</button>
            <button className={selected.isseleced && selected.id === index ? "self-end p-2 rounded-lg cursor-pointer" : "hidden"} style={{ backgroundColor: "red" }} onClick={() => {

                window.location.reload();
            } }>Return</button>

        </div>
    </div>);
  return (
    <div>
    <div className=" flex flex-col items-center justify-center overflow-hidden  w-full h-full" >
      {Showedetages[nextitems].map((item, index) => (<React.Fragment    key={index} >
{ newLocal(item,index," absolute transition-transform duration-300 hover:translate-y-[-10px] upper ") }

        </React.Fragment> ))}
        <div className="translate-y-[65%] opacity-75">
{Showedetages[nextitems].map((itemnext,indexnext)=><React.Fragment key={indexnext} >{indexnext>2? ""
:newLocal(itemnext,indexnext,"blur-[20px] opacity-0.2 nexto ")}</React.Fragment> )}</div>
<div className="absolute bottom-0 right-0 mb-4 flex flex-col gap-2">
{ nextitems!==0&& <button  onClick={()=>{setTimeout(()=>setnextitems(prev=>prev-1),2000)

const next = gsap.utils.toArray(".nexto");
const upper = gsap.utils.toArray(".upper")
if(!boxesReady)return;
 gsap.to(upper,{
     yPercent:-65,
     duration:1,
     stagger:0.3,
     opacity:0,
     onComplete:()=>{
         gsap.fromTo(upper,{
             yPercent:200,

             'webkitFilter': 'blur(25px)',
             opacity:0,

         },{
             yPercent:0,
             'webkitFilter': 'blur(0px)',
             opacity:1,
             onComplete:()=>{    gsap.set(upper, {translate:""});}
         })
     }
 })


 gsap.to(next,{
   opacity:0,
   delay:1,
   onComplete:()=>{
     gsap.fromTo(next,{
         'webkitFilter': 'blur(0px)',
         opacity:0

     },{

         'webkitFilter': 'blur(20px)',
         delay:1,
         scale:1.1,
         opacity:1,

     })
 }

})

}} className="
  cursor-pointer flex flex-col gap-2 items-center
  justify-center text-2xl  transition-opacity duration-300 hover:bg-[#ffe2e256] p-4  ">
<svg xmlns="http://www.w3.org/2000/svg" className="w-3" viewBox="0 0 384 512">
<path fill="#ffffff" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160
160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32
 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>



 </button>}
{ nextitems!==0&& <button  onClick={()=>{setTimeout(()=>setnextitems(prev=>prev-1),2000)

const next = gsap.utils.toArray(".nexto");
const upper = gsap.utils.toArray(".upper")
if(!boxesReady)return;
 gsap.to(upper,{
     yPercent:-65,
     duration:1,
     stagger:0.3,
     opacity:0,
     onComplete:()=>{
         gsap.fromTo(upper,{
             yPercent:200,

             'webkitFilter': 'blur(25px)',
             opacity:0,

         },{
             yPercent:0,
             'webkitFilter': 'blur(0px)',
             opacity:1,
             onComplete:()=>{    gsap.set(upper, {translate:""});}
         })
     }
 })


 gsap.to(next,{
   opacity:0,
   delay:1,
   onComplete:()=>{
     gsap.fromTo(next,{
         'webkitFilter': 'blur(0px)',
         opacity:0

     },{

         'webkitFilter': 'blur(20px)',
         delay:1,
         scale:1.1,
         opacity:1,

     })
 }

})

}} className="
  cursor-pointer flex flex-col gap-2 items-center
  justify-center text-2xl  transition-opacity duration-300 hover:bg-[#ffe2e256] p-4  ">
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
  <path fill="#ffffff" d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9
  13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9
  149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2
  24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8
  32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2
  53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9
  13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/></svg>



 </button>}

    { nextitems!=Showedetages.length-1&& <button onClick={()=>{setTimeout(()=>setnextitems(prev=>prev+1),2000)

   const next = gsap.utils.toArray(".nexto");
   const upper = gsap.utils.toArray(".upper")
if(!boxesReady)return;
    gsap.to(upper,{
        yPercent:-65,
        duration:1,
        stagger:0.3,
        opacity:0,
        onComplete:()=>{
            gsap.fromTo(upper,{
                yPercent:200,
                'webkitFilter': 'blur(25px)',
                 opacity:0,

            },{
                yPercent:0,
                'webkitFilter': 'blur(0px)',
                opacity:1,
                onComplete:()=>{    gsap.set(upper, {translate:""});}
            })
        }
    })


    gsap.to(next,{
      opacity:0,
      delay:1,
      onComplete:()=>{
        gsap.fromTo(next,{
            'webkitFilter': 'blur(0px)',
            opacity:0

        },{

            'webkitFilter': 'blur(20px)',
            delay:1,
            scale:1.1,
            opacity:1,

        })
    }

  })

  }} className="
  cursor-pointer flex flex-col gap-2 items-center
  justify-center text-2xl  transition-opacity duration-300 hover:bg-[#ffe2e256] p-4  ">
<svg xmlns="http://www.w3.org/2000/svg"  className="w-3" height="14" width="10.5" viewBox="0 0 384 512">
<path fill="#b3b3b3" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
</button>}
</div>

    </div>
    </div>
  )
}

export default Reserveshapes