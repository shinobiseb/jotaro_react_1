import React, { useEffect } from 'react'
import { seniorThesisLinks } from '../assets/Imageurls';
import { imgSpawner } from '../assets/Imageurls';


export default function SeniorThesis() {


  useEffect(()=> {
      const seniorThesisCont = document.getElementById('seniordiv')
      imgSpawner(seniorThesisLinks, seniorThesisCont)
  }, []);

  return (


    <div className='h-full w-full flex flex-row flex-wrap justify-center' id='seniordiv'></div>
  )
}
