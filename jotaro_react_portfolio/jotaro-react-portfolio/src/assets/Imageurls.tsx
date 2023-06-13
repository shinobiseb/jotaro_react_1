

// ------------------- SPAWNERS ------------------- //

export function handleShow(){
  console.log('it worked!')
}

function imgSpawner(arr : Array<string>, container : HTMLElement | null ) {
  
  for(let i = 0; i < arr.length; i++) {

      let imgC = document.createElement('img')
      imgC.setAttribute('src', `${arr[i]}`)
      imgC.setAttribute('id', `img${i}`)
      imgC.setAttribute('class', `gallery-img`)
      container?.appendChild(imgC)
    }
    console.log('I fired once')
}



  export const animationsLinks : Array<string>  = [
    'https://i.imgur.com/m8rNurQ.mp4',
    'https://i.imgur.com/RLYxas9.mp4',
    'https://i.imgur.com/TnswO1c.mp4',
    'https://i.imgur.com/62QTOuu.mp4',
    'https://i.imgur.com/G53pgxS.mp4',
    'https://i.imgur.com/PhOTqy5.mp4',
    'https://i.imgur.com/DaFSSF6.mp4',
    'https://i.imgur.com/UEnsU1D.mp4',
    'https://i.imgur.com/A8kd5zs.mp4',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1024px-Image_created_with_a_mobile_phone.png'
  ]

  export const seniorThesisLinks : Array<string> = [
    'https://i.imgur.com/GnPQlI1l.png',
    'https://i.imgur.com/tEE80yRl.png',
    'https://i.imgur.com/jn05Qgwl.jpg',
    'https://i.imgur.com/CXvJxqPl.png',
    'https://i.imgur.com/ILezUzhl.jpg',
    'https://i.imgur.com/FQtofu5l.png',
    'https://i.imgur.com/ujzBKRsl.png',
    'https://i.imgur.com/1IcPw6xl.png',
    'https://i.imgur.com/Bcj2eSbl.png',
    'https://i.imgur.com/gLIMh1gl.png',
    'https://i.imgur.com/b9cJn4Ll.png',
    'https://i.imgur.com/RG3kgkil.jpg',
    'https://i.imgur.com/nF5vS96l.png',
    'https://i.imgur.com/EupytGql.jpg',
    'https://i.imgur.com/867ocBYl.png',
    'https://i.imgur.com/OY2kRjnl.jpg',
    'https://i.imgur.com/9AlRn1Yl.png',
    'https://i.imgur.com/DR4CWtRl.jpg',
    'https://i.imgur.com/Pl3EVpbl.png',
    'https://i.imgur.com/o1jZkPdl.png',
    'https://i.imgur.com/9szkCmcl.png',
    'https://i.imgur.com/r9qQsEul.png',
    'https://i.imgur.com/poeDfRVl.png',
  ]

  export const conceptArtLinks : Array<string> = [
  'https://i.imgur.com/FQtofu5.',
  'https://i.imgur.com/5PXwCEn.',
  'https://i.imgur.com/GnPQlI1.',
  'https://i.imgur.com/poeDfRV.',
  'https://i.imgur.com/gLIMh1g.',
  'https://i.imgur.com/CXvJxqP.',
  'https://i.imgur.com/ILezUzh.jpg',
  'https://i.imgur.com/k1A6Rh1.mp4',
  'https://i.imgur.com/5KCfVXt.',
  'https://i.imgur.com/SuiuXgE.',
  'https://i.imgur.com/Wrl4gPK.',
  ]

export {imgSpawner}