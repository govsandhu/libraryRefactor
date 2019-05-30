var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
    for (var listPlaylist in this.playlists) {
    var numberOfPlaylistTracks = this.playlists[listPlaylist].tracks.length;
    var nameOfPlaylistTracks = this.playlists[listPlaylist].name;
    console.log(listPlaylist + ": " + nameOfPlaylistTracks + " - " + numberOfPlaylistTracks + " tracks");
    }
  },
  printTracks: function () {
    for (var listTracks in this.tracks) {
    var tracksArtist = this.tracks[listTracks].artist;
    var tracksName = this.tracks[listTracks].name;
    var tracksAlbum = "(" + this.tracks[listTracks].album + ")";
    console.log(listTracks + ": " + tracksName + " by " + tracksArtist + " " + tracksAlbum);
    }
  },
 printPlaylist: function (playlistId) {
    var selectedPlaylistName = this.playlists[playlistId].name;
    var selectedPlaylistTracksLength = this.playlists[playlistId].tracks.length;
    var selectedPlaylistTracks = this.playlists[playlistId].tracks;
    var combinedPlaylistOutput = playlistId + ": " + selectedPlaylistName + " - " + selectedPlaylistTracksLength + " tracks";
    console.log(combinedPlaylistOutput);

    for (var currentTracks of selectedPlaylistTracks) {
    console.log(currentTracks + ": " + this.tracks[currentTracks].name + " by " + this.tracks[currentTracks].artist + " (" + this.tracks[currentTracks].album + ")");
    }
  },
 addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
  },
 addTrack: function (name, artist, album) {
  var ranNum = uid();
  this.tracks[ranNum] = {
    id: ranNum,
    name: name,
    artist: artist,
    album: album
  }; console.log(this.tracks);
 },
addPlaylist: function (name) {
var ranNum = uid();
this.playlists[ranNum] = {
   id: ranNum,
   name: name
   };
   console.log(this.playlists);
}
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

library.printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

library.printTracks()

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

library.printPlaylist("p01");

// adds an existing track to an existing playlist

library.addTrackToPlaylist('t03', 'p01');

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

console.log(uid());
// adds a track to the this

library.addTrack("Govind", 'Bootcamp', 'Lighthouse');

// adds a playlist to the library

library.addPlaylist("Govind");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}