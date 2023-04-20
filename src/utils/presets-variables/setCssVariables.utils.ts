import { setCssVar } from 'quasar'
import { IPresetsVariables } from 'src/types/presets-variables/IPresetsVariables.type'

export function setCssVariables(presets: IPresetsVariables[]) {
  for (let num = 0; num < presets.length; num++) {
    setCssVar(presets[num].varName, presets[num].value)
  }
}
