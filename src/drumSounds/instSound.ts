import Cymbal from '@/assets/sounds/Cymbals.wav'
import CymbalTogether from '@/assets/sounds/CymbalTogether.wav'
import CymbalTogether1 from '@/assets/sounds/CymbalTogether1.wav'
import MiddleDrum from '@/assets/sounds/MiddleDrum.wav'
import UpperDram1 from '@/assets/sounds/UpperDrum1.wav'
import UpperDram from '@/assets/sounds/UpperDrum1.wav'
import SmallDrum from '@/assets/sounds/SmallDrum.wav'
import RightDrum from '@/assets/sounds/RightDrum.wav'

export const instSounds = [
  {
    image: 'https://www.audiolinks.com/wp-content/uploads/2019/02/01356_lg.png',
    alt: 'Tripod',
    class: 'tripod',
    sound: null,
    hasSound: false
  },
  {
    image:
      'https://images.squarespace-cdn.com/content/v1/5a60b958b1ffb68d441833d6/1699525720692-XE5AW2WGGW2OZBI0HT8Q/18_Stratus_Crash_N_6.png',
    alt: 'Cymbal',
    class: 'cymbal',
    sound: Cymbal,
    hasSound: true
  },
  {
    image: 'https://www.audiolinks.com/wp-content/uploads/2019/02/01356_lg.png',
    alt: 'Tripod 3',
    class: 'tripod3',
    sound: null,
    hasSound: false
  },
  {
    image:
      'https://cdn11.bigcommerce.com/s-qy9kl0lfci/images/stencil/1500x1500/products/51771/57725/PNG-K0825-14-K-Zildjian-HiHat-Bottom-Angle-Shot__04191.1625003749.png?c=1',
    alt: 'Cymbal Together',
    class: 'cymbal-together',
    sound: CymbalTogether,
    hasSound: true
  },
  {
    image:
      'https://cdn11.bigcommerce.com/s-qy9kl0lfci/images/stencil/1500x1500/products/51771/57725/PNG-K0825-14-K-Zildjian-HiHat-Bottom-Angle-Shot__04191.1625003749.png?c=1',
    alt: 'Cymbal Together 1',
    class: 'cymbal-together1',
    sound: CymbalTogether1,
    hasSound: true
  },
  {
    image: 'https://static4.kera-audio.pl/eng_pl_Crash-Ride-Cymbal-Stand-Asanasi-C-500-1930_1.png',
    alt: 'Tripod 2',
    class: 'tripod2',
    sound: null,
    hasSound: false
  },
  {
    image: 'https://clipart-library.com/images_k/bass-drum-silhouette/bass-drum-silhouette-10.png',
    alt: 'Middle Drum',
    class: 'middle-drum',
    sound: MiddleDrum,
    hasSound: true
  },
  {
    image: 'https://www.nicepng.com/png/full/115-1153714_drum-art-spruce-snare-snare-drum-png.png',
    alt: 'Small Drum',
    class: 'small-drum',
    sound: SmallDrum,
    hasSound: true
  },
  {
    image: 'https://www.kolberg.com/media/d6/72/6c/1685357268/514-2HO1~515_2Ho_2_px1000~1.png',
    alt: 'Upper Drum 1',
    class: 'upper-drum1',
    sound: UpperDram1,
    hasSound: true
  },
  {
    image: 'https://www.kolberg.com/media/d6/72/6c/1685357268/514-2HO1~515_2Ho_2_px1000~1.png',
    alt: 'UpperDrum',
    class: 'upper-drum',
    sound: UpperDram,
    hasSound: true
  },
  {
    image:
      'https://www.scan.co.uk/images/products-extra/proaudio/roland/vadtom14natural/mainimage.png',
    alt: 'Right Drum',
    class: 'right-drum',
    sound: RightDrum,
    hasSound: true
  }
]
