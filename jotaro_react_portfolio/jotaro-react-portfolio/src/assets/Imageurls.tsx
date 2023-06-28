

// ------------------- SPAWNER ------------------- //

function imgSpawner(arr : Array<string>, container : HTMLElement | null ) {
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].includes('.mp4')){
      let imgC = document.createElement('video')
      imgC.setAttribute('src', `${arr[i]}`)
      imgC.setAttribute('id', `video${i}`)
      imgC.setAttribute('class', `gallery-img`)
      container?.appendChild(imgC)
    }
      let imgC = document.createElement('img')
      imgC.setAttribute('src', `${arr[i]}`)
      imgC.setAttribute('id', `img${i}`)
      imgC.setAttribute('class', `gallery-img`)
      container?.appendChild(imgC)
    }
    // console.log('I fired once')
}

// ------------------- LINKS ------------------- //

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