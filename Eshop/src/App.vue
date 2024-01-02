<template>
    <Navbar @toggle-cart="toggleCart"/>
    <Cart v-if="isCartVisible" @toggle-cart="toggleCart"/>
    <RouterView/>
    <Footer/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Cart from '@/components/Cart.vue'

export default {
    components: {
        Navbar,
        RouterView,
        Footer,
        Cart,
    },
    data() {
        return {
            isCartVisible: false,
        };
    },
    methods: {
        toggleCart() {
            this.isCartVisible = !this.isCartVisible;
        }
    }
}
</script>