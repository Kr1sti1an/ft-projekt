<template>
  <nav class="top-0 z-50 bg-bg_navbar border-b-[1px] border-[rgb(231,231,231)]">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <RouterLink to="/" class="flex items-start">
        <img src="../components/img/logo.png" class="h-8" alt="Logo" />
      </RouterLink>
      <button data-collapse-toggle="navbar-default" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default" aria-expanded="false" @click="toggleMenu">
        <img aria-hidden="true" src="../components/img/menu.png" alt="">
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbarDefault">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 justify-center">
          <template v-if="$route.path === '/'">
            <li class="flex justify-center">
              <a href="" @click="closeMenu" class="nav-link block py-2 pl-3 pr-4 text-[16px] text-navlinks rounded md:border-0 md:p-0">First link</a>
            </li>
            <li class="flex justify-center">
              <a href="" @click="closeMenu" class="nav-link block py-2 pl-3 pr-4 text-[16px] text-navlinks rounded md:border-0 md:p-0">Second link</a>
            </li>
            <li class="flex justify-center">
              <a href="" @click="closeMenu" class="nav-link block py-2 pl-3 pr-4 text-[16px] text-navlinks rounded md:border-0 md:p-0">Third link</a>
            </li>
            <li class="flex justify-center">
              <a href="" @click="closeMenu" class="nav-link block py-2 pl-3 pr-4 text-[16px] text-navlinks rounded md:border-0 md:p-0">Fourth link</a>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      const menu = document.getElementById("navbarDefault");
      menu.classList.toggle("hidden");
    },
    closeMenu() {
      const menu = document.getElementById("navbarDefault");
      menu.classList.add("hidden");
    }
  }
};
</script>

<style scoped>
  .nav-link {
    position: relative;
    display: inline-block;
    color: #333; 
    text-decoration: none; 
  }

  .nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -3px; 
    height: 1.5px; 
    background-color: #333; 
    transition: width 0.3s ease-in-out; 
    width: 0%; 
  }

 
  .nav-link:hover::after {
    width: 100%; 
  }

</style>