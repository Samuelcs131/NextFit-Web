import { GlobalComponentConstructor, QBtnProps, QBtnSlots } from 'quasar'
import { boot } from 'quasar/wrappers'
import { useVisualComponents } from 'src/composables/useVisualComponents'

const { visualComponent } = useVisualComponents()

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $vInput: object
    $vCard: object
    $vMenu: object
    $vDefaultBtn: object
    $vPrimaryBtn: object
    $vSecondaryBtn: object
    $vTertiaryBtn: object
    $vNegativeBtn: object
    $vPositiveBtn: object
    $vWarningBtn: object
    $vInfoBtn: object
    $vBanner: object
    QBtn: GlobalComponentConstructor<QBtnProps, QBtnSlots>;
  }
}

export default boot(({ app }) => {
  app.config.globalProperties.$vInput = visualComponent.value.input
  app.config.globalProperties.$vCard = visualComponent.value.card
  app.config.globalProperties.$vMenu = visualComponent.value.menu
  app.config.globalProperties.$vPrimaryBtn = visualComponent.value.primaryButton
  app.config.globalProperties.$vSecondaryBtn = visualComponent.value.secondaryButton
  app.config.globalProperties.$vTertiaryBtn = visualComponent.value.tertiaryButton
  app.config.globalProperties.$vNegativeBtn = visualComponent.value.negativeButton
  app.config.globalProperties.$vPositiveBtn = visualComponent.value.positiveButton
  app.config.globalProperties.$vWarningBtn = visualComponent.value.warningButton
  app.config.globalProperties.$vInfoBtn = visualComponent.value.infoButton
})
