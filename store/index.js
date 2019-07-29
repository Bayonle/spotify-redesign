// @ts-check

var audioCtx = require('audio-context')()

export const state = () => ({
  counter: 0,
  activeMusic: "",
  musicState: "inactive",
  playTipHeadWidth: '0%',
  activeMusicBuffer: "",
  currentSource: "",
  musicList: [
    {
      "title": "Jenny of Oldstones",
      "artist": "Florence and the Machine",
      "time": "4 days ago",
      "duration": "03:09",
      "filename": "Florence_The_Machine_-_Jenny_of_Oldstones_Game_of_Thrones_.mp3",
      "albumArt": "jenny.jpg"
    },
    {
      "title": "Pre-Occupied",
      "artist": "Jon Bellion Ft. Blaque Keyz",
      "time": "4 days ago",
      "duration": "04:28",
      "filename": "Jon Bellion - Pre-Occupied Ft. Blaque Keyz.mp3",
      "albumArt": "bellion.jpg"
    },
    {
      "title": "Gbese",
      "artist": "Qdot",
      "time": "4 days ago",
      "duration": "04:04",
      "filename": "Qdot-–-Gbese.mp3",
      "albumArt": "qdot.jpg"

    },
  ]

})

export const mutations = {
  increment(state) {
    state.counter++
  },
  setActiveMusic(state, music) {
    state.activeMusic = music;
  },
  setMusicState(state, newState) {
    state.musicState = newState;
  },
  setPlayTipHeadWidth(state, newState) {
    state.playTipHeadWidth = newState;
  },
  setActiveMusicBuffer(state, newValue) {
    state.activeMusicBuffer = newValue
  },
  setCurrentSource(state, newValue) {
    state.currentSource = newValue
  },

}

export const actions = {
  playMusic({ commit, state, dispatch }, selectedMusic) {
    commit('setActiveMusicBuffer', "");
    commit('setActiveMusic', selectedMusic)
    commit('setMusicState', 'changed');
    commit('setPlayTipHeadWidth', '0%');
    console.log('head width ' + state.playTipHeadWidth)
    if(audioCtx.state === "running" || state.currentSource){
      state.currentSource.stop(0);
    }
    dispatch('getMusicBuffer');
    // audioCtx.close().then(()=>{
    // });
    // if(state.activeMusicBuffer){
    //   setTimeout(()=>{
    //       commit('setMusicState', 'playing')
    //   }, 1000)
    // }
  },
  pauseMusic({ commit }) {
    audioCtx.suspend().then(() => {
      commit('setMusicState', 'paused')
    });
    console.log(audioCtx.state);
  },
  continueMusic({ commit }) {
    audioCtx.resume().then(() => {
      commit('setMusicState', 'playing')
    });
  },
  nextTrack({ state, dispatch }) {
    let currentIndex = state.musicList.findIndex(x => x == state.activeMusic);
    if (currentIndex < state.musicList.length) {
      let nextMusic = state.musicList[currentIndex + 1];
      dispatch('playMusic', nextMusic)
    }
  },
  previousTrack({ state, dispatch }) {
    let currentIndex = state.musicList.findIndex(x => x == state.activeMusic);
    if (currentIndex > 0) {
      let previousMusic = state.musicList[currentIndex - 1];
      dispatch('playMusic', previousMusic)
    }
  },
  getMusicBuffer({ commit, dispatch, state }) {
    var request = new XMLHttpRequest();
    request.open('GET', `/music/${state.activeMusic.filename}`, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = function () {
      audioCtx.decodeAudioData(request.response, function (buffer) {
        commit('setActiveMusicBuffer', buffer);
        commit('setMusicState', 'playing'),
          dispatch('playFromBuffer');
        console.log(buffer);
      }, (error) => {
        console.log(error);
      });
    }
    request.send();
  },
  playFromBuffer({ state, commit }) {

    
    var source = audioCtx.createBufferSource(); // creates a sound source
    commit('setCurrentSource', source);
    source.buffer = state.activeMusicBuffer;                    // tell the source which sound to play
    source.connect(audioCtx.destination);
          // connect the source to the context's destination (the speakers)
    source.start(0);                           // play the source now
    // note: on older systems, may have to use deprecated noteOn(time);
  }
}

export const getters = {
  musicState: (state) => {
    return state.musicState;
  }
}

