//Objects Lab



var playlist = {}

playlist = { MichaelJackson: 'Man in the Mirror'}

function updatePlaylist(playlist, artistName, songTitle){

  playlist[artistName] = songTitle
    return playlist

}
function removeFromPlaylist(playlist, artistName){

  playlist = delete playlist.artistName


    }
