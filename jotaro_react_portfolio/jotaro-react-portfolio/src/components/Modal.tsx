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

  const variants = {
    visible: {  }
  }

  return props.state ? (
    <AnimatePresence>
      <motion.div
      className='fixed'>
        <div className='flex items-center justify-center z-3 h-screen w-screen overlay'>
          <div className='flex flex-col items-center justify-center w-5/6 h-3/4 border bg-slate drop-shadow-md z-5 modal'>
            <i className='gg-close close-button mt-3' onClick={handleClose}></i>
            <div className='modalContainer align-center justify-center w-full h-auto border'>
              {typeof props.content === 'string' && props.content.includes('.mp4') ? (
                <video src={props.content} controls autoPlay />
                ) : (
                <img src={modifiedContent} className='modalImg' alt='Modal Content' />
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  ) : null;
}