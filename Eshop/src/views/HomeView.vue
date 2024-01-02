<template>
    <Hero />
    <Categories/>
    <Stats/>
    <Form/>
    <Newsletter/>
</template>

<script>
    import Hero from '@/components/Hero.vue'
    import Categories from '@/components/Categories.vue'
    import Stats from '@/components/Stats.vue'
    import Form from '@/components/Form.vue'
    import Newsletter from '@/components/Newsletter.vue'

    export default {
        components: {
            Hero,
            Categories,
            Stats,
            Form,
            Newsletter,
        }
    }
</script>
