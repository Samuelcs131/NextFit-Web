import { useRoute } from 'vue-router'

export function useDynamicMenu() {
  const route = useRoute()

  function defineActiveExpansive(name: string) {
    return route.path.includes(name)
  }

  function expansionItemClass(title: string) {
    return `dynamic-menu__expansion ${
      defineActiveExpansive(title) ? 'active-expansion' : ''
    }`
  }

  function itemActiveClass(level: number) {
    return `${level === 1 ? 'active-item' : ''} text-primary`
  }

  return { defineActiveExpansive, expansionItemClass, itemActiveClass }
}
