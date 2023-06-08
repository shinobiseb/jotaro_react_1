import React, { useEffect } from 'react'
import { seniorThesisLinks } from '../assets/Imageurls';
import imgSpawner from '../assets/Imageurls';

let didInit = false

export default function SeniorThesis() {


  useEffect(()=> {
      const seniorThesisCont = document.getElementById('seniordiv')
      imgSpawner(seniorThesisLinks, seniorThesisCont)
  }, []);

  return (


    <div id='seniordiv'></div>
  )
}
