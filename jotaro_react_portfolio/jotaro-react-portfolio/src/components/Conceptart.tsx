import React, { useEffect, useState } from 'react';
import { altConceptArtLinks } from '../assets/Imageurls';
import { imgSpawner } from '../assets/Imageurls';
import Modal from './Modal';

export default function ConceptArt() {
  const [modalState, setModalState] = useState(false);
  const [selectedContent, setSelectedContent] = useState('');

  useEffect(() => {
    const container = document.getElementById('conceptCont');
    imgSpawner(altConceptArtLinks, container);

    const handleClick = (event : any) => {
      const dataContent = event.target.getAttribute('src');
      setSelectedContent(dataContent);
      setModalState(true);
    };

    if (container) {
      for (const child of container.children) {
        child.addEventListener('click', handleClick);
      }
    }

    return () => {
      if (container) {
        for (const child of container.children) {
          child.removeEventListener('click', handleClick);
        }
      }
    };
  }, []);

  return (
    <>
      <Modal content={selectedContent} state={modalState} setState={setModalState} />
      <button></button>
      <div className='h-full w-full flex flex-row flex-wrap justify-center' id='conceptCont'>
      </div>
    </>
  );
}
