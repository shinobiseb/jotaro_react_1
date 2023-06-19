import React, { useEffect, useState, useRef } from 'react';
import { altConceptArtLinks } from '../assets/Imageurls';
import { imgSpawner } from '../assets/Imageurls';
import Modal from './Modal';

export default function Conceptart() {
  const [modalState, setModalState] = useState(false);
  const [selectedContent, setSelectedContent] = useState('');

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      imgSpawner(altConceptArtLinks, container);

      const handleClick = (event: Event) => {
        const dataSrc = (event.target as HTMLImageElement).getAttribute('src');
        setSelectedContent(dataSrc || '');
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
      <Modal content={selectedContent} state={modalState} setState={setModalState} />
      <div className='gallery' id='conceptCont' ref={containerRef}>
      </div>
    </>
  );
}
