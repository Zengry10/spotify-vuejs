import { defineStore } from 'pinia'

export const Store = defineStore('store', {
    state: () => {
        return{
            songUrl: null,

        }
    },
    actions:{
        setSongUrl(songUrl){
            this.songUrl = songUrl
        }
    }
})
