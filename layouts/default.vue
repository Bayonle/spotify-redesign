<template>
  <div class="relative">
    <div class="relative w-full">
      <div class="left-sidepanel hidden md:block w-1/5 h-auto min:h-screen gradient-deepblue py-6 px-6 fixed left-0 top-0">

        <div class="menu flex items-center">
          <div class="circle-dot"></div>
          <div class="circle-dot"></div>
          <div class="circle-dot"></div>
        </div>

        <div class="nav flex items-center justify-around mt-8">
          <div class="flex flex-col justify-center items-center">
            <compass-icon />
            <span class="text-base text-color-grey-100 mt-2">browse</span>
          </div>
          <div class="flex flex-col justify-center  items-center">
          <liked-icon />
            <span class="text-base text-color-grey-100 mt-2">radio</span>
          </div>
          <div class="flex flex-col justify-center  items-center">
          <radio-icon />
            <span class="text-base text-color-grey-100 mt-2">liked</span>
          </div>
        </div>
        <div class="badge text-color-black text-base px-8 py-3 rounded-full text-center gradient-blue-to-green mt-6">
          Made For You
        </div>

        <div id="nav-section" class="mt-6">
          <div class="nav-group">
            <div class="section-title flex items-center justify-between">
              <h1 class="text-sm text-color-grey-700">YOUR LIBRARY</h1>
              <i class="fa fa-angle-up text-color-black-300 text-2xl"></i>
            </div>
            <a href="" class="nav-link">Recently Played</a>
            <a href="" class="nav-link">Podcasts</a>
            <a href="" class="nav-link">Local Files</a>
          </div>
          <div class="nav-group mt-8">
            <div class="section-title flex items-center justify-between">
              <h1 class="text-sm text-color-grey-700">PLAYLISTS</h1>
              <i class="fa fa-angle-up text-color-black-300 text-2xl"></i>
            </div>
            <a href="" class="nav-link">Work it, Own it!</a>
            <a href="" class="nav-link">Run beb</a>
            <a href="" class="nav-link">90’s Popular</a>
            <a href="" class="nav-link">90’s Popular</a>
          </div>
          <div class="action flex items-center justify-between px-8 py-3 rounded-full text-center border border-color-grey-700 mt-6 ">
            <span class="text-base text-color-grey-300">New Playlist</span>
            <i class="fa fa-plus text-base text-color-grey-300"></i>
          </div>
          <div class="action flex items-center justify-between px-8 py-3 rounded-full text-center border border-color-grey-700 mt-6 ">
            <span class="text-base text-color-grey-300">New Playlist</span>
            <i class="fa fa-plus text-base text-color-grey-300"></i>
          </div>
        </div>
      </div>

      <div class="w-full md:w-3/5 mx-auto">
          <nuxt ref="index" />
      </div>

      <div class="right-sidepanel hidden md:block w-1/5 h-screen gradient-deepblue py-6 px-6 fixed right-0 top-0">
        <div class="profile flex items-center justify-between">
          <div class="user flex items-center w-1/2 justify-between">
            <img src="~/assets/images/eraz.png" alt="">
            <a href="" class="text-base text-color-grey-400">Eray Yavuz</a>
          </div>

          <div class="user-badge flex items-center w-1/2 justify-end">
            <div class="badge h-6 w-6 rounded-full bg-color-teal text-center mr-2">
              <span class="text-xs text-color-black font-bold">1</span>
            </div>
            <i class="fa fa-angle-down text-4xl text-color-grey-400"></i>
          </div>


        </div>
        <div class="friend-activity mt-8">
          <div class="section-title flex items-center justify-between">
            <h1 class="text-sm text-color-grey-700">FRIEND ACTIVITY</h1>
          </div>

          <div class="activity-group">
            <div class="flex items-end justify-between avi">
              <div class="avatar flex items-end">
                <img src="~/assets/images/polen.png" class="mr-2" alt="">
                <span class="activity-link">Polen Merida</span>
              </div>
              <div class="time">
                <span class="text-xs text-color-grey-700">3H</span>
              </div>
            </div>
            <div class="album mt-4 flex items-center justify-between">
              <div class="album-art flex items-center">
                <img src="~/assets/images/album-art-paris.png" alt="" class="mr-3">
                <div class=" text-color-grey-500">
                  <h1 class="text-sm">A Paris</h1>
                  <p class="text-xs">Riff Cohen</p>
                </div>
              </div>
              <love-icon />
            </div>
            <div class="flex items-center mt-4">
              <disc-icon class="mr-2"/>
              <span class="text-color-grey-500 text-xs">Sunday Mood'z</span>
            </div>

          </div>
          <div class="activity-group mt-6">
            <div class="flex items-end justify-between avi">
              <div class="avatar flex items-end">
                <img src="~/assets/images/rose.png" class="mr-2" alt="">
                <span class="activity-link">Rosie Clever</span>
              </div>
              <div class="time">
                <span class="text-xs text-color-grey-700">3H</span>
              </div>
            </div>
            <div class="album mt-4 flex items-center justify-between">
              <div class="album-art flex items-center">
                <img src="~/assets/images/album-art-american.png" alt="" class="mr-3">
                <div class=" text-color-grey-500">
                  <h1 class="text-sm">American Daydream</h1>
                  <p class="text-xs">Electric Guest</p>
                </div>
              </div>
              <love-icon />
            </div>
            <div class="flex items-center mt-4">
              <music-icon class="mr-2"/>
              <span class="text-color-grey-500 text-xs">Discover Weekly</span>
            </div>

          </div>
          <div class="activity-group mt-6">
            <div class="flex items-end justify-between avi">
              <div class="avatar flex items-end">
                <img src="~/assets/images/koray.png" class="mr-2" alt="">
                <span class="activity-link">Koray Seçgin</span>
              </div>
              <div class="time">
                <span class="text-xs text-color-grey-700">3H</span>
              </div>
            </div>
            <div class="album mt-4 flex items-center justify-between">
              <div class="album-art flex items-center">
                <img src="~/assets/images/album-art-tuta.png" alt="" class="mr-3">
                <div class=" text-color-grey-500">
                  <h1 class="text-sm">Tutamıyorum Zamanı</h1>
                  <p class="text-xs">Müslüm Gürses</p>
                </div>
              </div>
              <music-icon />
            </div>
            <div class="flex items-center mt-4">
              <disc-icon class="mr-2"/>
              <span class="text-color-grey-500 text-xs">This Is Müslüm Gürses</span>
            </div>

          </div>
          <div class="activity-group mt-6">
            <div class="flex items-end justify-between avi">
              <div class="avatar flex items-end">
                <img src="~/assets/images/diadem.png" class="mr-2" alt="">
                <span class="activity-link">Didem Sorian</span>
              </div>
              <div class="time">
                <span class="text-xs text-color-grey-700">3H</span>
              </div>
            </div>
            <div class="album mt-4 flex items-center justify-between">
              <div class="album-art flex items-center">
                <img src="~/assets/images/album-art-pictures.png" alt="" class="mr-3">
                <div class=" text-color-grey-500">
                  <h1 class="text-sm">Pictures Of You</h1>
                  <p class="text-xs">The Cure</p>
                </div>
              </div>
              <love-icon />
            </div>
            <div class="flex items-center mt-4">
              <disc-icon class="mr-2"/>
              <span class="text-color-grey-500 text-xs">Sunday Mood'z</span>
            </div>

          </div>
          
        </div>

      </div>
    </div>
    <div class="footer w-full gradient-footer fixed bottom-0 left-0 px-4 md:px-0">
      <div class="play-head w-full flex justify-center">
        <div class="h-1 bg-color-gray w-full md:w-3/5 rounded relative" ref="playHeadWrapper">
          <div class="w-3 h-3 rounded-full bg-white absolute play-knob" ref="playKnob"></div>
          <div class="h-1 gradient-green-to-blue rounded play-tip w-0" ref="playTip"></div>
        </div>
      </div>

      <div class="w-full px-6 py-5 md:flex items-center">
        <div class="md:w-1/3 w-full md:flex items-center justify-start">
          <music-plus-icon class="mr-3 hidden md:block" />
          <img src="~/assets/images/gaye.png" alt="" class="mr-3 hidden md:block">
          <div class="artist-name md:mr-6 w-full md:w-auto">
            <h1 class="text-color-grey-900 text-base">{{activeMusic.title}}</h1>
            <p class="text-color-grey text-xs">{{activeMusic.artist}}</p>
          </div>
          <love-icon class="hidden md:inline"/>
        </div>
        <div class="w-full md:w-1/3 flex items-center justify-between mt-4 md:mt-0">
          <repeat-icon class=" md:mr-12" />
          <back-icon class="md:mr-12"  @click="previousTrack"/>
          <pause-icon class="md:mr-12" @click="pause" v-if="musicState === 'playing'"/>
          <play-icon class="md:mr-12" @click="continueMusic" v-if="musicState === 'inactive' || musicState === 'paused'"/>
          
          <forward-icon class="md:mr-12" @click="nextTrack"/>
          <shuffle-icon class="md:mr-12" />
        </div>
        <div class="hidden md:w-1/3 w-full md:flex items-center md:ml-auto md:justify-end justify-center pr-12">
          <repeat-icon class="mr-3" />
          <volume-icon />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax, Back } from 'gsap'
import CompassIcon from '~/assets/images/svg/compass.svg?inline';
import LikedIcon from '~/assets/images/svg/liked.svg?inline';
import RadioIcon from '~/assets/images/svg/radio.svg?inline';
import LoveIcon from '~/assets/images/svg/love.svg?inline';
import DiscIcon from '~/assets/images/svg/disc.svg?inline';
import MusicIcon from '~/assets/images/svg/music.svg?inline';
import MusicPlusIcon from '~/assets/images/svg/music-plus.svg?inline'
import VolumeIcon from '~/assets/images/svg/volume.svg?inline'
import DevicesIcon from '~/assets/images/svg/devices.svg?inline'
import BackIcon from '~/assets/images/svg/back.svg?inline'
import ForwardIcon from '~/assets/images/svg/forward.svg?inline'
import PauseIcon from '~/assets/images/svg/pause.svg?inline'
import RepeatIcon from '~/assets/images/svg/repeat.svg?inline'
import ShuffleIcon from '~/assets/images/svg/shuffle.svg?inline'
import PlayIcon from '~/assets/images/svg/play.svg?inline'

let tween;
let playKnobTween;

export default {
  components:{
    CompassIcon,
    LikedIcon,
    RadioIcon,
    LoveIcon,
    DiscIcon,
    MusicIcon,
    MusicPlusIcon,
    VolumeIcon,
    DevicesIcon,
    BackIcon,
    ForwardIcon,
    PauseIcon,
    ShuffleIcon,
    RepeatIcon,
    PlayIcon

  },
  data: function(){
    return {

    }
    // playTipWidth: '0%'
  },
  methods: {
    continueMusic: function(){
      console.log(this.$refs.playTip);
      this.$store.dispatch('continueMusic');
      tween.paused(false);
      playKnobTween.paused(false);
      // TweenMax.to(this.$refs.playTip, 3, {width:'100%'});
    },
    pause: function(){
      this.$store.dispatch('pauseMusic');
      tween.paused(true);
      playKnobTween.paused(true);
    },
    hmsToSecondsOnly(str) {
      var p = str.split(':'),
          s = 0, m = 1;

      while (p.length > 0) {
          s += m * parseInt(p.pop(), 10);
          m *= 60;
      }
      return s;
    },
    movePlayHead: function(){
      let musicDuration = this.$store.state.activeMusic.duration;
      let musicDurationSeconds = this.hmsToSecondsOnly(musicDuration);
      tween = TweenMax.to(this.$refs.playTip, musicDurationSeconds, {ease: Power0.easeNone, width:'100%'});
      let width = this.$refs.playHeadWrapper.offsetWidth;
      playKnobTween = TweenMax.to(this.$refs.playKnob, musicDurationSeconds, {ease: Power0.easeNone, x:width});
      // console.log(this.$store.state.activeMusic);
      // console.log(musicDuration);
      // { ease: Power0.easeNone, y: -500 }
    },
    nextTrack: function(){
      this.$store.dispatch('nextTrack')
    },
    previousTrack: function(){
      this.$store.dispatch('previousTrack')
    }
  },
  computed: {
    activeMusic: function(){
      return this.$store.state.activeMusic
    },
    musicState: function(){
      // console.log('getter - ' + this.$store.getters['musicState']);
      return this.$store.state.musicState
    },
    playTipHeadWidth: function(){
      return this.$store.state.playTipHeadWidth
    }
  },
  created: function(){
  },
  watch:{
    musicState : function(val){
      console.log('from watch -  ' + val);
      if(val === 'changed'){
        TweenMax.killTweensOf(this.$refs.playTip);
        TweenMax.killTweensOf(this.$refs.playKnob);

        // tween.kill();
        TweenMax.to(this.$refs.playTip, .005, {width:'0%'});
        TweenMax.to(this.$refs.playKnob, .005, {x:0});
      }else if(val === 'playing'){
        this.movePlayHead();
      }
    }
  }
  
}
</script>

<style>
  .play-knob{
    left:0px;
    top:-4px
  }


  .circle-dot{
    @apply w-3 h-3 rounded-full bg-color-grey-700 mr-2;
  }
  .nav-link{
    @apply text-base text-color-grey-200 block mt-4;
  }
  .activity-link{
    @apply text-sm text-color-grey-500  mt-4;
  }
</style>

