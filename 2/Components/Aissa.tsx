"use client"

import React from 'react'



function Aissa() {

    const svgobj = (
        <img 
          src='/vecteezy_free-floor-plan-vector_102594.svg' 
          alt='floor plan' 
          style={{border:"1px solid black"}}
          className="w-full max-w-md bg-white rotate-x-70 -rotate-y-10 rotate-z-50 shadow-xl/30 "
        />
      )
    const etages = [
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
      ]


  return (
    <div>
ejwnfjknefkn
    </div>
  )
}

export default Aissa