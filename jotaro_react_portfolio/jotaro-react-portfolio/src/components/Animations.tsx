import React, { useEffect, useState, useRef } from 'react';
import { animationsLinks } from '../assets/Imageurls';
import { imgSpawner } from '../assets/Imageurls';
import Modal from './Modal';

export default function Animations() {
  const [modalState, setModalState] = useState(false);
  const [selectedContent, setSelectedContent] = useState('');
  const [selectedYoutube, setSelectedYoutube] = useState('');

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      imgSpawner(animationsLinks, container);

      const handleClick = (event: Event) => {
        const dataSrc = (event.target as HTMLImageElement).getAttribute('src');
        const dataYoutube = (event.target as HTMLImageElement).getAttribute('youtube');
        setSelectedContent(dataSrc || '');
        setSelectedYoutube(dataYoutube || '')
        setModalState(true);
      };

      for (const child of container?.children || []) {
        child.addEventListener('click', handleClick);
      }

      return () => {
        for (const child of container?.children || []) {
          child.removeEventListener('click', handleClick);
        }
      };
    }
  }, []);

  return (
    <>
      <Modal youtube={selectedYoutube} content={selectedContent} state={modalState} setState={setModalState} />
      <div className='gallery' id='animationsCont' ref={containerRef}>
      </div>
    </>
  );
}
