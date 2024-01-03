import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', {
  state: () => {
    return {
      products: [],
      cart: [],
      isPopupVisible: false
    }
  },
  getters: {
    cartTotal: (state) => {
      return state.cart.reduce((total, product) => {
        return total + product.price * product.quantity
      }, 0)
    },
    cartQuantity: (state) => {
      return state.cart.reduce((total, product) => {
        return total + product.quantity
      }, 0)
    }
  },
  actions: {
    loadProducts(file) {
      import(`@/data/${file}.json`).then((module) => {
        this.products = module.default
      })
    },
    addToCart(product) {
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
    removeFromCart(product) {
      const existingProduct = this.cart.find((p) => p.name === product.name)
      if (existingProduct.quantity === 1) {
        this.cart = this.cart.filter((p) => p.name !== product.name)
      } else {
        existingProduct.quantity--
      }
    },
    clearCart() {
      this.cart = []
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'cartStore',
        storage: window.localStorage
      }
    ]
  }
})
