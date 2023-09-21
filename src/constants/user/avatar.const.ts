import luca from 'src/assets/img/avatar/luca.png'
import ariel from 'src/assets/img/avatar/ariel.png'
import alison from 'src/assets/img/avatar/alison.png'
import jake from 'src/assets/img/avatar/jake.png'
import alex from 'src/assets/img/avatar/alex.png'
import cris from 'src/assets/img/avatar/cris.png'
import will from 'src/assets/img/avatar/will.png'
import robert from 'src/assets/img/avatar/robert.png'
import michael from 'src/assets/img/avatar/michael.png'
import lucy from 'src/assets/img/avatar/lucy.png'
import manu from 'src/assets/img/avatar/manu.png'
import caroline from 'src/assets/img/avatar/caroline.png'
import sarah from 'src/assets/img/avatar/sarah.png'
import isabel from 'src/assets/img/avatar/isabel.png'
import billie from 'src/assets/img/avatar/billie.png'
import amanda from 'src/assets/img/avatar/amanda.png'
import rose from 'src/assets/img/avatar/rose.png'
import { Avatar } from 'src/enums/user/Avatar.enum'

export const avatarPicturesDictionary = {
  [Avatar.luca]: { label: 'luca', img: luca },
  [Avatar.ariel]: { label: 'ariel', img: ariel },
  [Avatar.alison]: { label: 'alison', img: alison },
  [Avatar.jake]: { label: 'jake', img: jake },
  [Avatar.alex]: { label: 'alex', img: alex },
  [Avatar.cris]: { label: 'cris', img: cris },
  [Avatar.will]: { label: 'will', img: will },
  [Avatar.robert]: { label: 'robert', img: robert },
  [Avatar.michael]: { label: 'michael', img: michael },
  [Avatar.lucy]: { label: 'lucy', img: lucy },
  [Avatar.manu]: { label: 'manu', img: manu },
  [Avatar.caroline]: { label: 'caroline', img: caroline },
  [Avatar.sarah]: { label: 'sarah', img: sarah },
  [Avatar.isabel]: { label: 'isabel', img: isabel },
  [Avatar.billie]: { label: 'billie', img: billie },
  [Avatar.amanda]: { label: 'amanda', img: amanda },
  [Avatar.rose]: { label: 'rose', img: rose },
}

export const avatarPicturesOptions = Object.keys(avatarPicturesDictionary).map(
  (key) => {
    const avatarKey = Number(key) as Avatar
    const { label, img } = avatarPicturesDictionary[avatarKey]
    return { label, value: avatarKey, img }
  }
)
