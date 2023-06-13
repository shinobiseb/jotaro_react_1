import React, { useEffect, useState, useRef } from 'react';
import { ModelLinks } from '../assets/Imageurls';
import { imgSpawner } from '../assets/Imageurls';
import Modal from './Modal';

export default function Modeling() {
  const [modalState, setModalState] = useState(false);
  const [selectedContent, setSelectedContent] = useState('');

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      imgSpawner(ModelLinks, container);

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
      <div className='h-full w-full flex flex-row flex-wrap justify-center' id='modelingCont' ref={containerRef}>
      </div>
    </>
  );
}
