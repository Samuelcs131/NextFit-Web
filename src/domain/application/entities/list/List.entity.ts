import { randomUUID } from 'src/utils/uuid/randomUUID.util'

interface ListItem<T> {
  key: string
  item: T
}

export class List<T> {
  public items: ListItem<T>[] = []

  constructor(items: T[]) {
    this.addItems(items)
  }

  addItem(item: T): void {
    const listItem = {
      key: randomUUID(),
      item,
    }
    this.items.push(listItem)
  }

  addItems(items: T[]): void {
    for (const item of items) {
      this.addItem(item)
    }
  }

  removeItem(key: string): void {
    const itemToRemove = this.getListItem(key)
    if (itemToRemove) {
      this.items = this.items.filter((item) => item.key !== key)
    }
  }

  removeAll() {
    this.items = []
  }

  getListItem(key: string): ListItem<T> | undefined {
    return this.items.find((item) => item.key === key)
  }

  updateItem(key: string, item: T): void {
    const idx = this.items.findIndex((item) => item.key === key)
    if (idx === null) throw new Error('Item not found')

    this.items[idx].item = item
  }
}
