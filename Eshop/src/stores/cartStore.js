import { defineStore } from 'pinia'   //vytvorenie noveho store

export const useCartStore = defineStore('cartStore', {    //exportuje pinia store s nazvom ktory sa použiva ako identifikator storu
  state: () => {    //počiatočny stav storu
    return {
      products: [],   //produkty
      cart: [],       //položky v nakupnom košíku
      isPopupVisible: false   //boolean hodnota na zobrazenie popup okna
    }
  },
  getters: {
    cartTotal: (state) => {      //getter na vypočitanie celkovej sumy v košíku
      return state.cart.reduce((total, product) => {
        return total + product.price * product.quantity
      }, 0)
    },
    cartQuantity: (state) => {    //getter na celkovy počet produktov v košíku
      return state.cart.reduce((total, product) => {
        return total + product.quantity
      }, 0)
    }
  },
  actions: {
    loadProducts(file) {    //načitanie jednotlivych .json súborov na základe aktuálneho view
      import(`@/data/${file}.json`).then((module) => {
        this.products = module.default
      })
    },
    addToCart(product) {    //akcia na pridanie položky do košíka
      const existingProduct = this.cart.find((p) => {
        return p.name === product.name
      })
      if (existingProduct) {
        existingProduct.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
      this.isPopupVisible = true
      setTimeout(() => (this.isPopupVisible = false), 2000)
    },
    removeFromCart(product) {   //akcia na odstranenie položky z košíka
      const existingProduct = this.cart.find((p) => p.name === product.name)
      if (existingProduct.quantity === 1) {
        this.cart = this.cart.filter((p) => p.name !== product.name)
      } else {
        existingProduct.quantity--
      }
    },
    clearCart() {   //kompletne vymazanie položiek z košíka
      this.cart = []
    }
  },
  persist: {    //plugin ktorý umožnuje načítať a uložiť stav z perzistentného úložiska
    enabled: true,
    strategies: [
      {
        key: 'cartStore',
        storage: window.localStorage
      }
    ]
  }
})
