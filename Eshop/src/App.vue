<template>
    <Navbar @toggle-cart="toggleCart"/>
    <Cart v-if="isCartVisible" @toggle-cart="toggleCart"/>      <!-- komponent košíku ktorý sa zobrazuje podla hodnoty isCartVisible -->
    <RouterView/>                                               <!-- priraduje udalosti emitovanej z Navbar a Cart metodu toggleCart -->
    <Footer/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue';
import AOS from 'aos';
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Cart from '@/components/Cart.vue'

export default {
    components: {
        Navbar,     //registrovanie komponentov použitých v šablone
        RouterView,
        Footer,
        Cart,
    },
    data() {
        return {
            isCartVisible: false,     //definuje reaktívne data, ktore určuju či sa ma zobraziť komponent Cart
        };
    },
    methods: {
        toggleCart() {
            this.isCartVisible = !this.isCartVisible;     //definuje metodu, ktora prepina hodnotu isCartvisible,
        }                                                 //tato metoda sa vola ked je emitovana udalosť toggle-cart
    }
}

onMounted(() => {
    AOS.init({
        duration: 2000,
    });
});
</script>
