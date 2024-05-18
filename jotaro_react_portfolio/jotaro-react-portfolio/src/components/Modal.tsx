import React from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion' 

type modalProps = {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<any>>;
  content: any;
  youtube?: string;
}

export default function Modal(props: modalProps) {

    const modifiedContent = props.content.slice(0, -5) + 'h' + props.content.slice(-4);

  const handleClose = () => {
    props.setState(false);
  };

  console.log(props)

  return props.state ? (
    <AnimatePresence initial={false}>
      <motion.div
        className='fixed z-10'>
        <div className='flex flex-col items-center justify-centerh-screen w-screen h-screen overlay flex align-center justify-center' onClick={handleClose}>
              {props.content.includes('mp4') || props.content.includes('youtu.be') ? (
                <>
                  {/* <video src={props.content} controls className='modalImg'/> */}
                  <iframe className='modal-yt' src={props.content} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </>
                ) : (
                <img src={modifiedContent} className='modalImg' alt='Modal Content' />
              )}
        </div>
      </motion.div>
    </AnimatePresence>
  ) : null;
}