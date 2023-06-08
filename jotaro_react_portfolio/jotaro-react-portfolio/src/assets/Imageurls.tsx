export default function imgSpawner(arr : Array<string>, container : HTMLElement | null ) {
    for(let i = 0; i < arr.length; i++) {
      let imgC = document.createElement('img')
      imgC.setAttribute('src', `${arr[i]}`)
      imgC.setAttribute('id', `img${i}`)
      imgC.setAttribute('class', `gallery-img`)
      container?.appendChild(imgC)
    }
    console.log('I fired once')
}

export const galleryLinks : Array<string>  = [
    "https://i.imgur.com/m4nvOEU.png",
    "https://i.imgur.com/GnPQlI1.png",
    "https://i.imgur.com/zRKNJfq.jpg",
    "https://i.imgur.com/tEE80yR.png",
    "https://i.imgur.com/poeDfRV.png",
    "https://i.imgur.com/TFgDhEu.jpg",
    "https://i.imgur.com/oLdF5dA.png",
    "https://i.imgur.com/DR4CWtR.jpg",
    "https://i.imgur.com/XqQyAQo.jpg",
    "https://i.imgur.com/ILezUzh.jpg",
  ]

  export const animationsLinks : Array<string>  = [
    'https://i.imgur.com/62QTOuu.mp4',
    'https://i.imgur.com/m8rNurQ.mp4',
    'https://i.imgur.com/DaFSSF6.mp4',
    'https://i.imgur.com/UEnsU1D.mp4',
    'https://i.imgur.com/RQveGEu.mp4',
    'https://i.imgur.com/TIdiJGv.mp4',
    'https://i.imgur.com/TnswO1c.mp4',
    'https://i.imgur.com/RLYxas9.mp4',
    'https://i.imgur.com/G53pgxS.mp4',
  ]

  export const seniorThesisLinks : Array<string> = [
    'https://i.imgur.com/tEE80yR.png',
    'https://i.imgur.com/poeDfRV.png',
    'https://i.imgur.com/CXvJxqP.png',
    'https://i.imgur.com/ILezUzh.jpg',
    'https://i.imgur.com/gLIMh1g.png',
    'https://i.imgur.com/o2W1NPH.jpg',
    'https://i.imgur.com/RG3kgki.jpg',
    'https://i.imgur.com/ithH8fB.png',
    'https://i.imgur.com/I3f53WR.jpg',
    'https://i.imgur.com/b9cJn4L.png',
    'https://i.imgur.com/FQtofu5.png',
    'https://i.imgur.com/jn05Qgw.jpg',
    'https://i.imgur.com/5PXwCEn.png',
    'https://i.imgur.com/GnPQlI1.png',
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
