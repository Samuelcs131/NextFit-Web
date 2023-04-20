import { slugify } from 'src/utils/slugfy.utils'

export default function useSearch() {
  function searchOn(list: any[], item: string): any[] {
    return list.filter((listItem) =>
      slugify(listItem.label).includes(slugify(item))
    )
  }

  return {
    searchOn,
  }
}
