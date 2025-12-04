<template>
  <div
    class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12"
  >
    <div class="wf-ull lg:w-1/2">
      <div class="text-sm font-medium text-blue-500 dark:text-blue-400">
        404 error
      </div>
      <h1
        class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl"
      >
        Page not found
      </h1>
      <div class="mt-4 text-gray-500 dark:text-gray-400">
        Sorry, the page you are looking for doesn't exist.Here are some helpful
        links:
      </div>

      <div class="flex items-center mt-6 gap-x-3">
        <button
          class="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-transparent border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          @click="$router.back()"
        >
          <svg
            class="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Go back
        </button>

        <button
          class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          @click="$router.push('/')"
        >
          Take me home
        </button>
      </div>
    </div>

    <div class="relative w-full mt-12 lg:w-1/2 lg:mt-0">
      <img
        class="w-full max-w-lg lg:mx-auto"
        src="https://merakiui.com/images/components/illustration.svg"
        alt="404 illustration"
      />
    </div>
  </div>
</template>
<route lang="yaml">
meta:
  layout: blank
</route>
