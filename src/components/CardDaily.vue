<template>
    <div class="bg-white rounded-xl">
      <img :src="imageSrc" class="h-[35vh] object-cover w-full rounded-t-xl" :alt="imageAlt">
      <div class="p-2">
        <h1 class="boldfont text-black text-center text-lg">{{ title }}</h1>
        <a :href="link" class="flex items-center rounded-2xl p-1 bg-blue w-1/4 mx-auto justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32" fill="none">
            <path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM23 17H16C15.7348 17 15.4804 16.8946 15.2929 16.7071C15.1054 16.5196 15 16.2652 15 16V9C15 8.73478 15.1054 8.48043 15.2929 8.29289C15.4804 8.10536 15.7348 8 16 8C16.2652 8 16.5196 8.10536 16.7071 8.29289C16.8946 8.48043 17 8.73478 17 9V15H23C23.2652 15 23.5196 15.1054 23.7071 15.2929C23.8946 15.4804 24 15.7348 24 16C24 16.2652 23.8946 16.5196 23.7071 16.7071C23.5196 16.8946 23.2652 17 23 17Z" fill="white"/>
          </svg>
          <span class="text-xs text-white">{{ buttonText }}</span>
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardComponent',
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      imageAlt: {
        type: String,
        required: false,
        default: 'Card image'
      },
      title: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: false,
        default: '#'
      },
      buttonText: {
        type: String,
        required: false,
        default: 'All Day'
      }
    }
  }
  </script>
  
  <style scoped>
  .bg-blue {
    background-color: #007BFF;
  }
  .boldfont {
    font-weight: bold;
  }
  </style>
  