<template>
  <div class="cart-modal">
    <div class="cart-content">
      <button class="close-btn" @click="toggleCart">&times;</button>
      <h2 class="text-[22px]">Košík</h2>
      <div class="cart-items">
        <div v-for="(item, index) in cartStore.cart" :key="index" class="cart-item">
          <img class="item-image" :src="'/images_eshop/' + item.image" :alt="item.name">
          <div class="item-details">
            <h3>{{ item.name }}</h3>
            <p>Price: {{ item.price }}</p>
            <p>Quantity: {{ item.quantity }}</p>
            <button class="remove-btn" @click="cartStore.removeFromCart(item)">Odstrániť</button>
          </div>
        </div>
      </div>
      <div class="cart-footer">
        <p>Spolu: {{ cartTotal }}€</p>
        <button class="checkout-btn">Zaplatiť</button>
      </div>
    </div>
  </div>
</template>


<script>
import { useCartStore } from "@/stores/cartStore.js"

export default {
  data() {
    const cartStore = useCartStore();
    return {
      cartStore,
    }
  },
  computed: {
    cartTotal() {
      return this.cartStore.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  },
  methods: {
    toggleCart() {
      this.$emit('toggle-cart');
    }
  }
}
</script>

<style scoped>
.cart-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.cart-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  max-height: 400px;
  overflow-y: auto;
}

.cart-items {
  /* Zbytek vašeho CSS */
  margin-top: 20px;
  height: 240px;
  max-height: 240px; 
  overflow-y: auto; 
}


.close-btn {
  float: right;
  border: none;
  background: none;
  font-size: 24px;
  cursor: pointer;
}

.cart-item {
  display: flex;
  margin-bottom: 10px;
}

.item-image {
  width: 80px;
  height: 80px;
  margin-right: 15px;
}

.item-details h3, .item-details p {
  font-size: 14px; 
  margin: 5px 0; 
}

.remove-btn {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 3px 8px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 12px;
}

.cart-footer {
  text-align: right;
}

.checkout-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}
</style>


@/stores/clothes-store