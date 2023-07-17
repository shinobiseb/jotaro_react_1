
// ------------------- SPAWNER ------------------- //

function imgSpawner(arr : Array<object> | Array<string>, container : HTMLElement | null ) {
  for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'object'){
      const animation = arr[i] as { name: string, url: string, thumbnail: string, youtube: string };
      const video = document.createElement('video');
      video.setAttribute('src', animation.url);
      video.setAttribute('id', `video${i}`);
      video.setAttribute('class', 'gallery-video');
      video.setAttribute('poster', animation.thumbnail)
      video.setAttribute('youtube', animation.youtube)

      
      container?.appendChild(video);
    } else {
      let imgC = document.createElement('img')
      imgC.setAttribute('src', `${arr[i]}`)
      imgC.setAttribute('id', `img${i}`)
      imgC.setAttribute('class', `gallery-img`)
      container?.appendChild(imgC)
      }
    }
}

// ------------------- LINKS ------------------- //

  export const animationsLinks : {
    name: string,
    url: string,
    thumbnail: string
    youtube: string
  }[]  = [
    { 
      name: 'flash warning',
      url:'https://live.staticflickr.com/video/53037601115/a33ff7dd3a/1080p.mp4?s=eyJpIjo1MzAzNzYwMTExNSwiZSI6MTY4OTAzNTE1MiwicyI6IjMxNzYyNTE5M2FmYmNhMWI2ZTc0ZWI1MzkyMjZjM2MxOThiNzc4ZTYiLCJ2IjoxfQ', 
      thumbnail: 'https://i.imgur.com/KcYwKDYm.png',
      youtube: 'https://youtu.be/k8bRClS3poM',
    },
    { 
      name: 'tree animation',
      url:'https://live.staticflickr.com/video/53037347889/703d8a06cc/1080p.mp4?s=eyJpIjo1MzAzNzM0Nzg4OSwiZSI6MTY4OTAzMDQyNywicyI6IjU5ZWU4YmQyOTFkNjZmODU2MzFkOGQyNTkxM2QyMTVjZWQ0YjhjZjgiLCJ2IjoxfQ', 
      thumbnail: 'https://i.imgur.com/z5Chwpd.jpg',
      youtube: '',
    },
    { 
      name: 'Moana',
      url:'https://live.staticflickr.com/video/53037693623/1e7458d219/1080p.mp4?s=eyJpIjo1MzAzNzY5MzYyMywiZSI6MTY4OTAzNDE3OCwicyI6IjYyZDZjZjIyZGQ1ZTE4MjA3OTg3MTlkZmNjNDg3NmM1OGRhZjNjOGUiLCJ2IjoxfQ', 
      thumbnail: 'https://i.imgur.com/4eN0FZ7.jpg',
      youtube: '',
    },
    { 
      name: 'morphing animation',
      url:'https://live.staticflickr.com/video/53037693563/31e8ff810c/360p.mp4?s=eyJpIjo1MzAzNzY5MzU2MywiZSI6MTY4OTAzMjU3MCwicyI6IjFhMDcwNTNmMzVjZDAxOGQyZGVkNWU3N2RhN2FiMmQyNTc4MTg3MTUiLCJ2IjoxfQ', 
      thumbnail: 'https://i.imgur.com/EZxtAfa.jpg',
      youtube: '',
    },
    { 
      name: 'Bound Animation',
      url:'https://live.staticflickr.com/video/53037555580/24b8a9256a/1080p.mp4?s=eyJpIjo1MzAzNzU1NTU4MCwiZSI6MTY4OTAzMDYzMiwicyI6IjViM2NiYmUxNDkwMzkxMjkwZDEwMWQzMjc0MTZhNDIxM2I1YzY2ZDMiLCJ2IjoxfQ', 
      thumbnail: 'https://i.imgur.com/VSnW6o1.png',
      youtube: '',
    },
    { 
      name: 'Cafe au Fate',
      url:'https://live.staticflickr.com/video/53037557015/20372624c0/1080p.mp4?s=eyJpIjo1MzAzNzU1NzAxNSwiZSI6MTY4OTYxMzgwOCwicyI6IjYzYmJiNjRiODM0YjU5MzMxYWVkNGE2OWRkZWZhNzgxYTkyOTgzYTMiLCJ2IjoxfQ', 
      thumbnail: 'https://i.imgur.com/irFNcsG.jpg',
      youtube: '',
    },
    { 
      name: 'experimental animation',
      url:'https://live.staticflickr.com/video/53037164546/388a017b5d/1080p.mp4?s=eyJpIjo1MzAzNzE2NDU0NiwiZSI6MTY4OTAzNTA3NiwicyI6ImJmOWVjYjQyNTUzOGYwNTZhNzhlYTVmN2MxN2QyOGE5Mzk1ZjZhZjEiLCJ2IjoxfQ', 
      thumbnail: 'https://i.imgur.com/siDN1e0m.jpg',
      youtube: '',
    },
    { 
      name: 'popsicle animation',
      url:'https://live.staticflickr.com/video/53037555510/3d1d4a5619/1080p.mp4?s=eyJpIjo1MzAzNzU1NTUxMCwiZSI6MTY4OTAzNTA4OCwicyI6IjJiNTNjOWQ5YTQxNDc1NDE1N2NkODMwYWUyM2NkYTQ3OTFiODk1Y2QiLCJ2IjoxfQ', 
      thumbnail: 'https://i.imgur.com/AdLSTq3m.jpg',
      youtube: '',
    },
    { 
      name: 'Game Grumps Typography',
      url:'https://live.staticflickr.com/video/53037209191/58fdbc3198/1080p.mp4?s=eyJpIjo1MzAzNzIwOTE5MSwiZSI6MTY4OTAzNTAzMSwicyI6IjU5MTUzZTZmNzE4MWY4NGYwNzJjYzc2YjVlMjdlNGM2Yjc1NWNlYTIiLCJ2IjoxfQ', 
      thumbnail: 'https://i.imgur.com/Z45iH7pm.jpg',
      youtube: 'https://youtu.be/mBb8piNWoRQ',
    },
    { 
      name: 'scared white boy',
      url: 'https://live.staticflickr.com/video/53036631262/b9a889f6a5/1080p.mp4?s=eyJpIjo1MzAzNjYzMTI2MiwiZSI6MTY4OTAzNTE1OSwicyI6ImYxNGRiMTNkNDhmMmIxMGE2MmI1ZjY2MjI5MWUxMjNlODU3MmNiYjkiLCJ2IjoxfQ', 
      thumbnail: 'https://i.imgur.com/KFa1kVQm.jpg',
      youtube: ''
    },
    { 
      name: 'Mortem',
      url: 'https://live.staticflickr.com/video/53036631252/c45372c23a/1080p.mp4?s=eyJpIjo1MzAzNjYzMTI1MiwiZSI6MTY4OTAzNTEyOSwicyI6IjQ3ZTMyOTUxN2M1MjNjMTA1OTFiYTZiMDdlY2RjNzY4N2YxM2QxYzYiLCJ2IjoxfQ', 
      thumbnail: 'https://i.imgur.com/uaOiyuWm.jpg',
      youtube: 'https://youtu.be/Pf0VR0OXTSo',
    },
    { 
      name: 'Mario Animation',
      url: 'https://live.staticflickr.com/video/53037392334/8033a67575/1080p.mp4?s=eyJpIjo1MzAzNzM5MjMzNCwiZSI6MTY4OTAzNTA1OSwicyI6ImNjM2FjNDRmYzAxNTMyZWVkZDEwZjM2ZjgwOTJmMWM1NDcxZDE0ZmIiLCJ2IjoxfQ', 
      thumbnail: 'https://i.imgur.com/jbIOer6m.jpg',
      youtube: ''
    },
    { 
      name: 'Dahlia Animatic',
      url: 'https://live.staticflickr.com/video/53037601175/85854f5e73/1080p.mp4?s=eyJpIjo1MzAzNzYwMTE3NSwiZSI6MTY4OTAzNTE3OCwicyI6IjY2Y2I1MjE0OTBkZGY2OTc5ODUxMjc0MWJmNzlhOWM4NmM0MDY3NjMiLCJ2IjoxfQ', 
      thumbnail: 'https://i.imgur.com/Qqr3lgo.jpg',
      youtube: 'https://youtu.be/Nc0_p7nLMXo'
    },
  ]

  export const seniorThesisLinks : Array<string> = [
    'https://i.imgur.com/b9cJn4Ll.png',
    'https://i.imgur.com/GnPQlI1l.png',
    'https://i.imgur.com/poeDfRVl.png',
    'https://i.imgur.com/CXvJxqPl.png',
    'https://i.imgur.com/ILezUzhl.jpg',
    'https://i.imgur.com/FQtofu5l.png',
    'https://i.imgur.com/gLIMh1gl.png',
    'https://i.imgur.com/nF5vS96l.png',
    'https://i.imgur.com/Bcj2eSbl.png',
    'https://i.imgur.com/EupytGql.jpg',
    'https://i.imgur.com/867ocBYl.png',
    'https://i.imgur.com/OY2kRjnl.jpg',
    'https://i.imgur.com/RG3kgkil.jpg',
    'https://i.imgur.com/9AlRn1Yl.png',
    'https://i.imgur.com/o1jZkPdl.png',
    'https://i.imgur.com/9szkCmcl.png',
    'https://i.imgur.com/DR4CWtRl.jpg',
    'https://i.imgur.com/Pl3EVpbl.png',
    'https://i.imgur.com/jn05Qgwl.jpg',
    'https://i.imgur.com/r9qQsEul.png',
    'https://i.imgur.com/tEE80yRl.png',
    'https://i.imgur.com/1IcPw6xl.png',
    'https://i.imgur.com/ujzBKRsl.png',
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

  export const altConceptArtLinks : Array<string> = [
    'https://i.ibb.co/mzBXQYW/Ervin-Dio-Figure-Drawing1.png',
'https://i.ibb.co/D81v031/Ervin-Dio-Figure-Drawing2.png',
'https://i.ibb.co/fM1mKCn/Ervin-Figure-Drawing1.png',
'https://i.ibb.co/8M8QPYW/Ervin-Figure-Drawing2.png',
'https://i.ibb.co/kHPVqnS/Ervin-Rohan-Figure-Drawing.png',
'https://i.ibb.co/cwYpY2W/Cinnamon-Fursona.png',
'https://i.ibb.co/Vgv10yW/Ervin-Art-Trade.png',
'https://i.ibb.co/GVJT1VM/Ervin-Ghost-OC-They-Them-please.png',
'https://i.ibb.co/7S7vSfk/Ervin-Pastel-Cutie-OC.png',
'https://i.ibb.co/b6FL82D/Melodie-Commission.png',
'https://i.ibb.co/Jz66XJF/Nathan.png',
'https://i.ibb.co/XWWrBkK/Peace-Sign.png',
'https://i.ibb.co/gthbVzb/Seb.png',
'https://i.ibb.co/T4vMydn/Baby-Ky-Commission-FULL-BODY.png',
'https://i.ibb.co/hZQb7gV/Baby-Ky-Commission-HALF.png',
'https://i.ibb.co/VYPPh6f/Baby-Ky-Commission-HEAD.png',
'https://i.ibb.co/F5XCYXk/Bee-and-Nathan-Christmas.png',
'https://i.ibb.co/vxJNRgT/Ervin-Chessa-Ice-Cream-Cow.png',
'https://i.ibb.co/RbXNp9B/Ervin-Rain-Ice-Cream-Cow.png',
'https://i.ibb.co/GtT2XWV/Mel.png',
'https://i.ibb.co/Kmz95Bp/Min-Mint-Chocolate-Chip.png',
'https://i.ibb.co/H7zzTKx/Nea-Neapolitan.png',
'https://i.ibb.co/cbHPvrb/Cow-Print-Panty-And-Stocking.png',
'https://i.ibb.co/bzp63jh/Dennis-Energy-and-Kai.png',
'https://i.ibb.co/wz5gt4V/Draculara-P-S.png',
'https://i.ibb.co/ZY0Gj0c/Gojo.png',
'https://i.ibb.co/fS89kzB/Jinx.jpg',
'https://i.ibb.co/qrVNdCT/Sakura.png',
'https://i.ibb.co/wr71Ftx/SZA-Kill-Bill.png',
'https://i.ibb.co/KbS2k4j/Beau.jpg',
'https://i.ibb.co/ZGPFnmJ/Cherry.png',
'https://i.ibb.co/LNxRcJg/Judy.png',
'https://i.ibb.co/XXYf4Ms/Lymon.png',
'https://i.ibb.co/LtKyS7t/Muffy.png',
'https://i.ibb.co/hynWpNZ/Nook-Tea.jpg',
'https://i.ibb.co/xmh66QZ/Poncho.jpg',
'https://i.ibb.co/CBrKVFn/Poppy.png',
'https://i.ibb.co/LZbbb0S/Tia.png',
  ]

  export const ModelLinks : Array<string> = [
    'https://i.ibb.co/HTsn5jZ/Beetlejuice-Room-Dark-Color-Pass.png',
'https://i.ibb.co/1zCKHjK/Beetlejuice-Room-Dark-Wireframe.png',
'https://i.ibb.co/yPGtzXk/Beetlejuice-Room-Light.png',
'https://i.ibb.co/bHpBH07/BMO.png',
'https://i.ibb.co/WkdZ0j2/Chess-Set-Ambient-Occlusion.png',
'https://i.ibb.co/BnR6WCP/Chess-Set-Color-Pass-01.png',
'https://i.ibb.co/Wy43gzP/Chess-Set-Color-Pass-02.png',
'https://i.ibb.co/ygvkpm1/Chess-Set-Color-Pass-03.png',
'https://i.ibb.co/cwvHjds/Chess-Set-Color-Pass-04.png',
'https://i.ibb.co/df7s5TN/Chess-Set-Color-Pass-05.png',
'https://i.ibb.co/8rBZzXp/Chess-Set-Wireframe.png',
'https://i.ibb.co/YQcnnHz/Dining-Room-Ambient-Occlusion.png',
'https://i.ibb.co/1vWxv70/Dining-Room-Color-Pass.png',
'https://i.ibb.co/NW952VR/Dining-Room-Wireframe.png',
'https://i.ibb.co/N2Cpz7G/Kuromi-Boots-001.png',
'https://i.ibb.co/c2wbNBF/Kuromi-Boots-002.png',
'https://i.ibb.co/d75mj3G/Kuromi-Boots-003.png',
'https://i.ibb.co/rdBY6K6/Kuromi-Boots-004.png',
'https://i.ibb.co/TtgG1dw/Metal-Lantern.png',
'https://i.ibb.co/zGrkPph/Miss-Scarlet-Ambient-Occlusion.png',
'https://i.ibb.co/r470zXb/Miss-Scarlet-Color-Pass.png',
'https://i.ibb.co/zFWmSDV/Miss-Scarlet-Wireframe.png',
'https://i.ibb.co/RywmJ4W/Plate-and-Silverware.png',
'https://i.ibb.co/qJx6Ctn/Poison.png',
'https://i.ibb.co/nf92RWD/Pompompurin001.png',
'https://i.ibb.co/zhn9h5Q/Pompompurin002.png',
  ]

export {imgSpawner}