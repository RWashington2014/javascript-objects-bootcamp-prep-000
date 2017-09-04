//Objects Lab



var playlist = {}

playlist = { MichaelJackson: 'Man in the Mirror'}

function updatePlaylist(playlist, artistName, songTitle){

  playlist[artistName] = songTitle
    return playlist

}
function removeFromPlaylist(playlist, artistName){
  //playlist = new Object()
   delete playlist[artistName]
    return playlist

}
