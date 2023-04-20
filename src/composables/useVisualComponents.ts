import { ThemeTemplates } from 'src/theme/enums/themeTemplates.enum'
import { ref } from 'vue'

const initializeVisualComponent = {
  input: {
    outlined: true,
    active: true,
  },
  card: {
    class: 'paper-shadow border-radius-md',
    flat: true,
  },
  menu: {
    class: 'paper-shadow',
  },
  primaryButton: {
    color: 'primary',
    unelevated: true,
  },
  secondaryButton: {
    color: 'secondary',
    unelevated: true,
  },
  tertiaryButton: {
    color: 'accent',
    unelevated: true,
  },
  negativeButton: {
    color: 'negative',
    unelevated: true,
  },
  positiveButton: {
    color: 'positive',
    unelevated: true,
  },
  warningButton: {
    color: 'warning',
    unelevated: true,
  },
  infoButton: {
    color: 'info',
    unelevated: true,
  },
}

export function useVisualComponents() {
  const visualComponent = ref(initializeVisualComponent)

  function setVisualInput(theme: ThemeTemplates) {
    /* visualComponent.value.input.dark =
      !(theme === ThemeTemplates.light) */
  }

  return { visualComponent, setVisualInput }
}
