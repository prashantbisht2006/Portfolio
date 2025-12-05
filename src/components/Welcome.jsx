import React from 'react';
import { useRef } from 'react';
const FONT_WEIGHTS ={
  subtitle:{min:100 , max:500, default:100},
  title:{min:400,max:900,default:400}
} 

const renderText =(text,className,baseWeight=400)=>{
  return[...text].map((char,i)=>(
    <span key={i} className={className} style={{fontVariationSettings:`whgt ${baseWeight}`}}>
      {char==" " ? "\u00A0" : char}
    </span>
  ))
}

const setuptextHover = (container,type)=>{
  if(!container)return;

  const letters = container.querySelectorAll('span');
  const {min, max ,default:base} = FONT_WEIGHTS[type];

  
}

const Welcome = () => {
    const tiitleRef = useRef(null);
    const subtitleRef = useRef(null);
  return (
    <section id='welcome'>
      <p ref={subtitleRef}>{renderText("Hello , I am Prashant ! Welcome to my",
        'text-3xl font-georama',100)}</p>
      <h1 ref ={tiitleRef} className='mt-7'>{renderText("Portfolio",'text-9xl font-georama')}</h1>

      <div className='small-screen'>
        <p>
          Please open it On desktop/tablet to get the best experience.
        </p>
        </div>
    </section>
  )
}

export default Welcome