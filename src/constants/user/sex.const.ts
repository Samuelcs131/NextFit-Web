import { Sex } from 'src/enums/user/Sex.enum'

export const sexDictionary = {
  [Sex.female]: { label: 'female', value: Sex.female },
  [Sex.male]: { label: 'male', value: Sex.male },
}

export const sexOptions = [
  { label: 'female', value: Sex.female },
  { label: 'male', value: Sex.male },
]
