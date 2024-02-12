import { ITagDto } from '../dto/ITag.dto'
import { colorPalette } from 'src/constants/color/colorPalette.const'

export const getAllTag: ITagDto[] = [
  {
    color: colorPalette[0].color,
    id: '11111111111',
    name: 'Seg',
  },
  {
    color: colorPalette[1].color,
    id: '222222222222',
    name: 'Ter',
  },
  {
    color: colorPalette[2].color,
    id: '3333333333333333',
    name: 'Qua',
  },
  {
    color: colorPalette[3].color,
    id: '444444444444444',
    name: 'Qui',
  },
  {
    color: colorPalette[4].color,
    id: '5555555555555555555',
    name: 'Sex',
  },
  {
    color: colorPalette[5].color,
    id: '66666666666666',
    name: 'Sab',
  },
  {
    color: colorPalette[6].color,
    id: '7777777777777777',
    name: 'Dom',
  },
  {
    color: colorPalette[7].color,
    id: '88888888888888888',
    name: 'Opcional 1',
  },
  {
    color: colorPalette[8].color,
    id: '99999999999999999',
    name: 'Opcional',
  },
]
