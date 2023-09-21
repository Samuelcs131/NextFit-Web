import { RouteRecordRaw } from 'vue-router'

export const documentationRouterName = {
  overview: 'overview',
  treeSelect: 'treeSelect',
  shadows: 'shadows',
  buttons: 'buttons',
  colors: 'colors',
  dynamicMenu: 'dynamicMenu',
}

export const documentationRouter: RouteRecordRaw = {
  path: 'documentation',
  name: 'documentation',
  redirect: 'documentation/overview',
  meta: { requiresAuth: true },
  children: [
    {
      path: documentationRouterName.overview,
      name: documentationRouterName.overview,
      component: () => import('pages/documentation/DocumentationPage.vue'),
    },
    {
      path: documentationRouterName.treeSelect,
      name: documentationRouterName.treeSelect,
      component: () =>
        import('pages/documentation/components/tree-select/TreeSelectPage.vue'),
    },
    {
      path: documentationRouterName.shadows,
      name: documentationRouterName.shadows,
      component: () =>
        import('pages/documentation/components/shadows/ShadowsPage.vue'),
    },
    {
      path: documentationRouterName.buttons,
      name: documentationRouterName.buttons,
      component: () =>
        import('pages/documentation/components/buttons/ButtonsPage.vue'),
    },
    {
      path: documentationRouterName.colors,
      name: documentationRouterName.colors,
      component: () =>
        import('pages/documentation/components/colors/ColorsPage.vue'),
    },
    {
      path: documentationRouterName.dynamicMenu,
      name: documentationRouterName.dynamicMenu,
      component: () =>
        import(
          'pages/documentation/components/dynamic-menu/DynamicMenuPage.vue'
        ),
    },
  ],
}
