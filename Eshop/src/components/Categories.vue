<template>
    <div class="bg-gray-100">
        <div class="container mx-auto px-5">
            <div class="mx-auto py-16 sm:py-24 lg:max-w-none">
                <h1
                    class="flex sm:justify-center md:justify-start lg:justify-start title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    Kategórie</h1>
                <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                    <div v-for="category in categories" :key="category.name" class="group relative">
                        <router-link :to="category.to" class="hover-effect">
                            <div
                                class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img :src="category.imageSrc" :alt="category.imageAlt"
                                    class="h-full w-full object-cover object-center" />
                            </div>
                            <h3 class="mt-6 text-xl font-semibold flex items-center gap-1">
                                {{ category.name }}
                                <i class="material-icons arrow">arrow_forward</i>
                            </h3>
                            <p class="text-base leading-relaxed text-gray-900">{{ category.description }}</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.hover-effect:hover .arrow {
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
}

.arrow {
    transition: transform 0.3s ease-in-out;
}
</style>

<script>
import { useCategoryStore } from '@/stores/category-store';
import { RouterLink } from 'vue-router';

export default {
    components: {
        RouterLink
    },
    computed: {
        categories() {
            const store = useCategoryStore();
            return store.categories;
        }
    }
};
</script>