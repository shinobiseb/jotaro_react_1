import React from 'react'

export default function Contact() {
  return (
    <div className='flex flex-col w-full h-full items-center'>
        <h3 className='text-3xl contact-header'>Email me!</h3>
            <section> mikaervin@gmail.com </section>

        <h3 className='text-3xl contact-header'>My Social Medias</h3>
        <ul className='flex flex-col items-center text-xl'>
            <li> 
                <a className='contact-link' target='_blank' href='https://instagram.com/pichiru__?igshid=MzRlODBiNWFlZA=='> Instagram</a> 
            </li> 
            
            <li> 
                <a className='contact-link' target='_blank' href='https://twitter.com/Pichiru__'> Twitter</a> 
            </li> 

            <li> 
                <a className='contact-link' target='_blank' href='https://www.linkedin.com/in/mika-ervin-5a8446221/'> Linkedin </a> 
            </li>
        </ul>
    </div>
  )
}
