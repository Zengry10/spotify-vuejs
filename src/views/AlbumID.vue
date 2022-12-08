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
    
  
       
            <div key="id" class="bg-black h-60 flex">
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
            <div class="bg-slate-800 h-36 pl-12">
                <div class='flex justify-between'>
                    <p class="uppercase text-slate-500"># &nbsp; &nbsp; title</p>
                    <p class="ml-96 uppercase text-slate-500">plays</p>
                    <p class="mr-8 text-slate-500">ouf</p>
                </div>
                <div id="ligne" class=""></div>
                
                <div v-for= "album in response">
                    <pre>
                        <p>{{ album}}</p>
                    </pre>
                </div>
            </div>
           
            <!-- <div v-if="response" v-for="album in response.tracks.items" key="aze">
                {{ album.duration_ms }}
            </div> -->
        

            
        

 


</template>



