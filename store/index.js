import { TweenMax, Back } from 'gsap'
// import audioContext  from './services/audio-context';
var audioCtx = require('audio-context')()

export const state = () => ({
    counter: 0,
    activeMusic: "",
    musicState: "inactive",
    playTipHeadWidth: '0%',
    activeMusicBuffer: "",
    musicList: [
        {
          "title":"I Don’t Like Mondays",
          "artist":"The Boomtown Rats",
          "time":"4 days ago",
          "duration": "10"
        },
        {
          "title":"Good For You",
          "artist":"Selena Gomez",
          "time":"4 days ago",
          "duration": "15"

        },
        {
          "title":"Same Old Love",
          "artist":"Selena Gomez",
          "time":"4 days ago",
          "duration": "20"
        },
        {
          "title":"Muddy Waters",
          "artist":"LP",
          "time":"4 days ago",
          "duration": "25"
        },
        {
          "title":"Birileri",
          "artist":"Nada",
          "time":"4 days ago",
          "duration": "30"
        },
      ]

  })
  
  export const mutations = {
    increment (state) {
      state.counter++
    },
    setActiveMusic (state, music){
        state.activeMusic = music;
    },
    setMusicState (state, newState){
        state.musicState = newState;
    },
    setPlayTipHeadWidth (state, newState){
        state.playTipHeadWidth = newState;
    },
    setActiveMusicBuffer(state, newValue){
      state.activeMusicBuffer = newValue
    }

  }

  export const actions = {
    playMusic ({commit, state, dispatch}, selectedMusic){
        commit('setActiveMusicBuffer',"");
        commit('setActiveMusic', selectedMusic)
        commit('setMusicState', 'changed');
        commit('setPlayTipHeadWidth', '0%');
        console.log('head width ' + state.playTipHeadWidth)
        dispatch('getMusicBuffer');
        // if(state.activeMusicBuffer){
        //   setTimeout(()=>{
        //       commit('setMusicState', 'playing')
        //   }, 1000)
        // }
    },
    pauseMusic ({commit}){
        audioCtx.suspend().then(()=>{
          commit('setMusicState', 'paused')
        });
    },
    continueMusic ({commit}){
      audioCtx.resume().then(()=>{
        commit('setMusicState', 'playing')
      });
  },
    nextTrack ({state, dispatch}){
        let currentIndex = state.musicList.findIndex(x => x == state.activeMusic);
        if(currentIndex < state.musicList.length){
            let nextMusic = state.musicList[currentIndex + 1];
            dispatch('playMusic', nextMusic)
        }
    },
    previousTrack ({state, dispatch}){
        let currentIndex = state.musicList.findIndex(x => x == state.activeMusic);
        if(currentIndex > 0){
            let previousMusic = state.musicList[currentIndex - 1];
            dispatch('playMusic', previousMusic)
        }
    },
    getMusicBuffer({commit, dispatch}){
      var request = new XMLHttpRequest();
      request.open('GET', `/music/Jon Bellion - Mah's Joint.mp3`, true);
      request.responseType = 'arraybuffer';
    
      // Decode asynchronously
      request.onload = function() {
        audioCtx.decodeAudioData(request.response, function(buffer) {
          commit('setActiveMusicBuffer',buffer);
          commit('setMusicState', 'playing'),
          dispatch('playFromBuffer');
          console.log(buffer);          
        }, (error)=>{
          console.log(error);
        });
      }
      request.send();    
    },
    playFromBuffer({state}) {

        var source = audioCtx.createBufferSource(); // creates a sound source
        source.buffer = state.activeMusicBuffer;                    // tell the source which sound to play
        source.connect(audioCtx.destination);       // connect the source to the context's destination (the speakers)
        source.start(0);                           // play the source now
                                                 // note: on older systems, may have to use deprecated noteOn(time);
    }  
  }

  export const getters =  {
    musicState: (state) => {
      return state.musicState;
    }
  }

