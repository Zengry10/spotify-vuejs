<script setup>
let showDropdown = false
console.log (localStorage.getItem('spotifyToken'))
let token = localStorage.getItem('spotifyToken')
import { Store } from '@/stores/StorePlayer'
const store = Store()
console.log(token)


</script>

<template>
  <div class="layout h-screen overflow-hidden flex flex-col ">
    <nav class="h-20 p-4 bg-zinc-900 shrink-0 flex  justify-between">
      <router-link to="/"> <img src='../../public/img/Spotify_Logo_Black.png' class="h-8 w-26"></router-link>
      <div v-if="token" class="relative">
        <button @click="showDropdown = true" class="bg-zinc-800 rounded-full py-1 px-2 flex items-center">
          <img src="../../public/img/head.png" alt="" srcset="" class="rounded-full h-6 w-6 mr-2">
          <p class="text-zinc-50 font-black text-xs mr-3">Rémi Lemoust</p>
          <fa v-if="showDropdown === false" icon="circle-chevron-down" class="text-zinc-50"/>
          <fa v-if="showDropdown === true" icon="circle-chevron-up" class="text-zinc-50"/>  
        </button>
        
        <div v-if="showDropdown === true" class="focus:outline-none absolute bg-zinc-800 w-full rounded mt-1">
        <a href='/login'>
          <button @click="showDropdown = false" class="focus:outline-none w-full text-sm py-2 text-zinc-400 hover text-zinc-500 border-b border-zinc-900 opacity-75 hover:opacity-100 border-zinc-200">Account</button>
          <button @click="showDropdown = false" class="focus:outline-none w-full text-sm py-2 text-zinc-400 hover text-zinc-500 border-b border-zinc-900 opacity-75 hover:opacity-100">Log Out</button>
        </a>
        </div>
      </div>
      <div v-else class="relative">
        <a href='/login'>
          <button @click="showDropdown = true" class="bg-zinc-800 rounded-full py-1 px-2 flex items-center">
            <p class="text-zinc-50 font-black text-xs p-1 align-center justify-center">Se connecter</p>
          </button>
        </a>
      </div>
    </nav>

    <div class="flex-grow overflow-y-auto bg-black">
      <router-view></router-view>
    </div>
    <div class="h-20 bg-zinc-900 shrink-0 flex items-center justify-center">
      <audio
        class="w-2/12"
        controls
        :src="store.songUrl"
        autoplay>
            <a href="/media/cc0-audio/t-rex-roar.mp3">
                Download audio
            </a>
    </audio>
    </div>
  </div>
</template>