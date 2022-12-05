<script setup lang="ts">
let showDropdown = false
 const client_id = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID
 const response_type = 'token'
 const redirect_uri = encodeURIComponent(import.meta.env.VITE_APP_SPOTIFY_REDIRECT_URL)
 const spotifyUrl = 'https://accounts.spotify.com/authorize';
 const finalUrl = spotifyUrl + `?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}`
 window.location.href = finalUrl
 
</script>

