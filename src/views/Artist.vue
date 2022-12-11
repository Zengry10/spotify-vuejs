<script setup>
import { useRoute } from 'vue-router'
import { TopTrack } from '@/api/spotify'
import { ref } from 'vue'
import { GetArtist } from '@/api/spotify'

const responseGetArtist = ref([])
const responseTrack = ref([])
const { params } = useRoute()

async function init() {
    responseTrack.value = await TopTrack(params.id)
   console.log(responseTrack.value)
}

init()

async function construct() {
    responseGetArtist.value = await GetArtist(params.id)
}

construct()

</script>

<template>
    <div v-if="(responseGetArtist && responseGetArtist.name)" class="bg-black">
       <div v-if="responseGetArtist" class="w-full bg-no-repeat h-72 bg-cover bg-center" :style="{backgroundImage:`url(${responseGetArtist.images[0].url})`}">
            <div class="ml-12 pt-4">
            <p class="text-8xl font-bold text-white ">{{ responseGetArtist.name }}</p>
            <p class="mt-12 text-white text-lg">{{ responseGetArtist.followers.total }} fans</p>
            </div>
        </div>
        <div class="bg-gradient-to-t from-[#000000] to-[#2D2D2D] pt-8 mb-4">
            <div class=" ml-12 h-14 w-14 bg-white rounded-full flex justify-center items-center bg-[#1BD760] cursor-pointer">
                <div id="triangle" class="  "></div>
            </div>
            <p class="ml-12 font-semibold text-xl text-white mt-12">Popular</p>

        </div>
       

        <div v-for="(tracks, id) in responseTrack.tracks.slice(0, 5)" class="flex ml-6 justify-between hover:bg-[#111827] rounded-lg duration-300 p-2">
            <div class="flex justify-center	items-center text-white ml-4">
                <p class="mr-6 text-slate-400">{{ id +1 }}</p>
                <img :src="tracks.album.images[0].url" class="h-12 w-12 mr-4 ml-4">
                <p>{{tracks.name}}</p>
            </div>

            <div class="flex items-center">
                <p class=" mr-28 text-slate-400" >{{ Math.floor((tracks.duration_ms/1000/60) << 0)}}:<span v-if="Math.floor((tracks.duration_ms/1000) % 60) < 10">0</span>{{ Math.floor((tracks.duration_ms/1000) % 60)}}</p>
            </div>

        </div>

            
            
       
        
    </div>
</template>