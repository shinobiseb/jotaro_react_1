import React from 'react';

type modalProps = {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  content: any;
};

export default function Modal(props: modalProps) {

console.log(props)

  const handleClose = () => {
    props.setState(false);
  };

  return props.state ? (
    <div className='fixed'>
      <div className='fixed flex items-center justify-center z-3 h-screen w-screen overlay'>
        <div className='flex flex-col items-center justify-center w-5/6 h-3/4 border bg-slate drop-shadow-md z-5 fixed modal'>
          <i className='gg-close close-button mt-3' onClick={handleClose}></i>
          <div className='modalContainer w-full h-auto border'>
            {typeof props.content === 'string' && props.content.includes('.mp4') ? (
              <video src={props.content} controls autoPlay />
            ) : (
              <img src={props.content} alt='Modal Content' />
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}