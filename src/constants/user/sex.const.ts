import { Sex } from 'src/enums/user/Sex.enum'

export const sexDictionary = {
  [Sex.female]: { label: 'placeholders.female', value: Sex.female },
  [Sex.male]: { label: 'placeholders.male', value: Sex.male },
}

export const sexOptions = [
  { label: 'placeholders.female', value: Sex.female },
  { label: 'placeholders.male', value: Sex.male },
]
