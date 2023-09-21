export interface IMenuItemType {
  title: string
  icon: string
  routeName?: string
  level: number
  params?: unknown
  children?: IMenuItemType[]
}
