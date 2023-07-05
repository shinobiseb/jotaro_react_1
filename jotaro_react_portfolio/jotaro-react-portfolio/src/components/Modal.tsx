import React from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion' 

type modalProps = {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<any>>;
  content: any;
};

export default function Modal(props: modalProps) {

    const modifiedContent = props.content.slice(0, -5) + 'h' + props.content.slice(-4);

  const handleClose = () => {
    props.setState(false);
  };

  console.log(props)

  return props.state ? (

    <AnimatePresence>
      <motion.div
      className='fixed z-10'>
        <div className='flex items-center justify-centerh-screen w-screen h-screen overlay flex align-center justify-center' onClick={handleClose}>
              {props.content.includes('mp4') ? (
                <video src={props.content} controls className='modalImg'/>
                ) : (
                <img src={modifiedContent} className='modalImg z-3' alt='Modal Content' />
              )}
        </div>
      </motion.div>
    </AnimatePresence>
  ) : null;
}