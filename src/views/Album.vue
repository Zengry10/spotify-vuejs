<script setup>
import { useRoute } from 'vue-router'
import { album } from '@/api/spotify'
import { ref } from 'vue'


const response = ref([])
const route = useRoute()
const query = ref(route.query.query ?? '')


async function init(){
    response.value = await album(query.value, 'album')
    console.log(response.value)
}
init()

</script>

<template>
    <div class="bg-black h-full">
        <form method="get" class="flex items-center">   
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" name='query' v-model="query" id="simple-search" class="  text-gray-900 text-sm rounded-lg  w-full pl-10 p-2.5 " placeholder="Search">
            </div>
            <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span class="sr-only">Search</span>
            </button>
        </form>
        
        <h1 class="mb-8 text-xl font-bold ml-24 ">Album></h1>
            <div v-if="(response != 0)" class="ml-24 gap-12  flex flex-wrap">
                    <div v-for="album in response.albums.items" class=" mb-12 hover:bg-zinc-900 hover:duration-300 rounded-t-lg" key="album.id">
                        <a :href="'/album/' + album.id">
                            <img :src="album.images[0].url" alt="" class="h-72 w-68 rounded-t-lg ">
                            <p class="text-slate-50 text-lg pl-2 mt-2">{{album.name}}</p>
                            <p class="text-slate-500 pl-2">par {{album.artists[0].name}}</p>
                            <p class="text-slate-50 pl-2">{{album.release_date}}</p>
                        </a>
                    </div>
            </div>
    </div>

    
</template>

<!-- {{ response.albums.items }} -->