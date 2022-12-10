<script setup>
import { useRoute } from 'vue-router'
import { TopTrack } from '@/api/spotify'
import { ref } from 'vue'
import { GetArtist } from '@/api/spotify'

const response = ref([])
const { params } = useRoute()

async function init() {
   response.value = await TopTrack(params.id)
   console.log(response)
}

init()

async function construct() {
   response.value = await GetArtist(params.id)
}

construct()

</script>

<template>
    <div v-if="(response && response.name)">
       <div class="w-full bg-no-repeat h-72 bg-cover bg-center" :style="{backgroundImage:`url(${response.images[0].url})`}">
            <div class="ml-12 pt-4">
            <p class="text-8xl font-bold text-white ">{{ response.name }}</p>
            <p class="mt-12 text-white text-lg">{{ response.followers.total }} fans</p>
            </div>
        </div>
        <div>
            <p class="ml-12 font-semibold text-xl">Popular</p>
        </div>
            
            
       
        
    </div>
</template>