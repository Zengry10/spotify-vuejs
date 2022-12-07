<script setup>
import { useRoute } from 'vue-router'
import { AlbumID } from '@/api/spotify'
import { ref } from 'vue'


const response = ref(null)
const { params } = useRoute()
console.log(params)


async function init() {
   response.value = await AlbumID(params.id)
    console.log(response.value)
}

if(response.length > 0){
    init()
}

 
</script>
<template>
    <pre>

            <img :src="response.images[0].url" alt="" class="h-72 w-68 rounded-t-lg ">
            <div v-for="album in response" key="id">
                

                {{ response.artists[0].name }}
                {{ response.name }}
                {{ response.total_tracks }}
                
                
            </div>

        
    </pre>
 


</template>



