import { types, getEnv } from "mobx-state-tree"
import { BookStore } from './BookStore'
import { CartStore } from './CartStore'
import { ViewStore } from './ViewStore'

export const ShopStore = types.model("ShopStore", {
    bookStore: types.withDefault(BookStore, {}),
    cart: types.withDefault(CartStore, {}),
    view: types.withDefault(ViewStore, {}),
    get fetch() {
      return getEnv(this).fetch
    },
    get alert() {
      return getEnv(this).alert
    },
    get isLoading() {
      return this.bookStore.isLoading
    },
    get books() {
      return this.bookStore.books
    },
    get sortedAvailableBooks() {
      return this.bookStore.sortedAvailableBooks
    }
  }, {
    afterCreate() {
      this.bookStore.loadBooks()
    }
})
