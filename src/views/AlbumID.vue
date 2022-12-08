<script setup>
import { useRoute } from 'vue-router'
import { AlbumID } from '@/api/spotify'
import { ref } from 'vue'


const response = ref([])
const { params } = useRoute()



async function init() {
   response.value = await AlbumID(params.id)
    console.log(response.value)
}

init()
 


</script>
<template>
    
  
       
            <div v-if="response && response.images" key="id" class="bg-gradient-to-t from-slate-800 to-slate-900 h-60 flex ">
                <img :src="response.images[0].url" alt="" class="h-52 w-48 ml-12 mt-3">
                <div class="flex-col ml-4">
                    <p class="text-white mt-16 mb-2 uppercase font-black">{{ response.album_type }}</p>
                    <p class="text-white text-6xl">{{ response.name }}</p>
                    <div class="flex mt-4">
                        <img :src="response.images[0].url" alt="" class="h-6 w-6 rounded-full mr-2">
                        <p class="text-white">{{ response.artists[0].name }}</p>
                        <p class="text-white"> &nbsp; - {{ response.total_tracks }} songs</p>
                    </div>
                </div>
            </div>
        <div class="bg-black  pl-12 ">
            <div class='flex justify-between '>
                <p class="uppercase text-slate-500 mt-12"># &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; title</p>
                <p class="ml-96 uppercase text-slate-500 mt-12">plays</p>
                <p class="mr-28 text-slate-500 mt-12">times</p>
            </div>
                     <div id="ligne" class="mb-4"></div>

            
            <div v-if="response && response.tracks" >
                <div v-for="album in response.tracks.items" class="flex justify-between">
                    <div class="flex">
                        <p class=" text-slate-600 mt-3 mr-12"> {{ album.track_number }}</p>
                        <div class="">
                            <p class="text-lg text-white"> {{ album.name }}</p>   
                            <div v-for="artist in album.artists">
                                <h4 class="text-white text-slate-600">{{ artist.name }}</h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="text-white mr-28" >{{ Math.floor((album.duration_ms/1000/60) << 0)}}:<span v-if="Math.floor((album.duration_ms/1000) % 60) < 10">0</span>{{ Math.floor((album.duration_ms/1000) % 60)}}</p>
                    </div>
                </div>
            </div>  
        </div>
           

        

            
        

 


</template>



