<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="flex h-screen overflow-hidden bg-gray-100">
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
    <div class="md:hidden">
      <div class="fixed inset-0 z-40 flex" v-show="sidebarOpen">
        <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
        <div class="fixed inset-0" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>
        <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
        <div
          class="relative flex flex-col flex-1 w-full max-w-xs bg-indigo-700"
        >
          <div class="absolute top-0 right-0 pt-2 -mr-12">
            <button
              @click="closeSidebarMenu"
              class="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="sr-only">Close sidebar</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div class="flex items-center flex-shrink-0 px-4">
              <img class="w-auto h-8" src="../assets/logo.svg" alt="Booklist" />
            </div>
            <nav class="px-2 mt-5 space-y-1">
              <!-- Current: "bg-indigo-800 text-white", Default: "text-white hover:bg-indigo-600 hover:bg-opacity-75" -->
              <a
                href="#"
                class="flex items-center px-2 py-2 text-base font-medium text-white bg-indigo-800 rounded-md group"
              >
                <!-- Heroicon name: outline/collection -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 h-6 mr-3 text-indigo-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Lists
              </a>

              <a
                href="#"
                class="flex items-center px-2 py-2 text-base font-medium text-white rounded-md hover:bg-indigo-600 hover:bg-opacity-75 group"
              >
                <!-- Heroicon name: outline/users -->
                <svg
                  class="w-6 h-6 mr-3 text-indigo-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Stats
              </a>
            </nav>
          </div>
          <div class="flex flex-shrink-0 p-4 border-t border-indigo-800">
            <a href="#" class="flex-shrink-0 block group">
              <div class="flex items-center">
                <div>
                  <img
                    class="inline-block w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=73B9Du9KeR&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-base font-medium text-white">Tom Cook</p>
                  <p
                    class="text-sm font-medium text-indigo-200 group-hover:text-white"
                  >
                    View profile
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden bg-indigo-700 md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-col flex-1 h-0">
          <div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
            <div class="flex items-center flex-shrink-0 px-4">
              <img class="w-auto h-8" src="../assets/logo.svg" alt="Booklist" />
            </div>
            <nav class="flex-1 px-2 mt-5 space-y-1">
              <!-- Current: "bg-indigo-800 text-white", Default: "text-white hover:bg-indigo-600 hover:bg-opacity-75" -->
              <a
                href="#"
                class="flex items-center px-2 py-2 text-sm font-medium text-white bg-indigo-800 rounded-md group"
              >
                <!-- Heroicon name: outline/collection -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 h-6 mr-3 text-indigo-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    class="w-6 h-6 mr-3 text-indigo-300"
                  />
                </svg>
                Lists
              </a>

              <a
                href="#"
                class="flex items-center px-2 py-2 text-sm font-medium text-white rounded-md hover:bg-indigo-600 hover:bg-opacity-75 group"
              >
                <!-- Heroicon name: outline/users -->
                <svg
                  class="w-6 h-6 mr-3 text-indigo-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Stats
              </a>
            </nav>
          </div>
          <div class="flex flex-shrink-0 p-4 border-t border-indigo-800">
            <a href="#" class="flex-shrink-0 block w-full group">
              <div class="flex items-center">
                <div>
                  <img
                    class="inline-block rounded-full h-9 w-9"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=73B9Du9KeR&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-white">Tom Cook</p>
                  <p
                    class="text-xs font-medium text-indigo-200 group-hover:text-white"
                  >
                    View profile
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1 w-0 overflow-hidden">
      <div class="pt-1 pl-1 md:hidden sm:pl-3 sm:pt-3">
        <button
          class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          @click="openSidebarMenu"
        >
          <span class="sr-only">Open sidebar</span>
          <!-- Heroicon name: outline/menu -->
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <main
        class="relative z-0 flex-1 overflow-y-auto focus:outline-none"
        tabindex="0"
      >
        <div class="py-6">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Lists</h1>
          </div>
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <div class="py-4">
              <div
                class="border-4 border-gray-200 border-dashed rounded-lg h-96"
              ></div>
            </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    // const store = useStore()
    const sidebarOpen = ref(false)
    function openSidebarMenu() {
      sidebarOpen.value = true
    }
    function closeSidebarMenu() {
      sidebarOpen.value = false
    }
    return {
      sidebarOpen,
      openSidebarMenu,
      closeSidebarMenu,
    }
  },
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
