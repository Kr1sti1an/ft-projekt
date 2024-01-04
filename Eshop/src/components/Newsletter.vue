<template>
  <section class="text-gray-600 body-font bg-bg_newsletter">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-white">Zostaňte v Kruhu Noviniek
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Buďte prví, kto sa dozvie o našich najnovších
          fitness
          produktoch, exkluzívnych ponukách a špeciálnych udalostiach. Pripojte sa k našej komunite nadšencov zdravého
          životného štýlu.</p>
      </div>
      <div
        class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div class="relative flex-grow w-full">
          <label for="full-name" class="leading-7 text-sm text-white">Celé Meno</label>
          <input type="text" id="full-name" name="full-name"
            class="w-full bg-bg_newsletter bg-opacity-50 rounded border border-white focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative flex-grow w-full">
          <label for="email" class="leading-7 text-sm text-white">Email</label>
          <input type="email" id="email" name="email"
            class="w-full bg-bg_newsletter bg-opacity-50 rounded border border-white focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <button
          class="text-bg_button_newsletter bg-transparent border border-bg_button_newsletter py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-[16px] expandable-button">Odoberať</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.expandable-button {
  transition: transform 0.3s ease-in-out;
}

.expandable-button:hover {
  transform: scale(1.10);
}
</style>
