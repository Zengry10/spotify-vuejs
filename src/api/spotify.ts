import { instance } from './index';

export function album(query: string, type: string, limit = 10) {
  return instance.get('/search', {
    params: {
      q: query,
      type,
      limit,
    }
  })
  .then(response => {
    return response.data;
  })


}

export function AlbumID(id: string) {
  return instance.get(`/albums/${id}`)
  .then(response => {
    return response.data;
  })
}

export function TopTrack(id: string, limit = 5){
  return instance.get(`/artists/${id}/top-tracks?market=FR`,{
    params: {
      limit,
    }
  })
  .then(response => {
    return response.data
  })

}

export function GetArtist(id: string){
  return instance.get(`/artists/${id}`)
  .then(response => {
    return response.data
  })
}
