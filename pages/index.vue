<template>
  <div class="mx-auto w-full relative">
    <section class="header h-64 w-full px-8 py-3 fixed top-0 bg-no-repeat object-cover object-center" :style="{'background-image':activeMusicAlbumArt}">
      <div class="header-control w-full md:flex items-center justify-between hidden">
        <div class="next-prev w-1/5 flex items-center">
          <i class="fa fa-angle-left text-white text-4xl mr-8"></i>
          <i class="fa fa-angle-right text-white text-4xl "></i>
        </div>
        <div class="w-3/5 relative">
          <div class="flex items-center justify-center w-full">
            <input type="email" class="form-input mr-8 pl-24 prepend w-3/4" placeholder="Search">
          </div>
          <div class="prepend-input">
              <search-icon />
          </div>
        </div>
        <div class="w-1/5">
          <queue-Icon class="ml-auto" />
        </div>
      </div>

    </section>
    <section id="music-section" class="w-full bg-color-black-1000 px-8 py-6 h-auto min-h-screen my-auto pt-64">
      <div class="music-wrapper h-full pt-12 block">
        <div class="toolbar flex items-center justify-between">
          <span class="text-color-grey-800 text-base">
            <i class="fa fa-search mr-3"></i>
            FILTER
          </span>
          <span class="text-color-grey-800 text-base flex items-center">
            <span class="mr-2">Download</span>
            <div class="h-4 w-4 border border-color-grey-800 rounded-full"></div>
          </span>
        </div>

        <div class="table w-full">
          <table class="w-full hidden md:table">
            <thead>
              <tr>
                <th></th>
                <th class="py-2 tracking-wide text-color-black-400 font-normal text-left">TITLE</th>
                <th class="py-2 tracking-wide text-color-black-400 font-normal text-left">ARTIST</th>
                <th class=""><calendar-Icon /></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="musicItem in musicList" :key="musicItem.title">
                <td>
                  <div class="flex items-center">
                    <music-plus-icon class="mr-8"/>
                    <play-icon class="play" @click="playMusic(musicItem)" />

                  </div>
                </td>
                <td class="text-color-grey-200 text-base text-left py-4">{{musicItem.title}}</td>
                <td class="text-color-grey-200 text-base text-left py-4">{{musicItem.artist}}</td>
                <td class="text-color-grey-200 text-base text-left py-4">{{musicItem.time}}</td>
                <td class="dots">
                    <music-dots-icon/>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="mobile-view mt-8 block md:hidden">
            <div v-for="musicItem in musicList" :key="musicItem.title" class="mb-6">
              <div class="flex items-center justify-between">
                <div class="music-info">
                  <h4 class="text-color-grey-200 text-base text-left">{{musicItem.title}}</h4>
                  <p class="text-color-grey-200 text-xs text-left">{{musicItem.artist}}</p>
                </div>
                <play-icon class="" @click="playMusic(musicItem)" />
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SearchIcon from '~/assets/images/svg/search.svg?inline'
import QueueIcon from '~/assets/images/svg/queue.svg?inline'
import CalendarIcon from '~/assets/images/svg/calendar.svg?inline'
import MusicDotsIcon from '~/assets/images/svg/music-dots.svg?inline'
import MusicPlusIcon from '~/assets/images/svg/music-plus.svg?inline'
import PlayIcon from '~/assets/images/svg/play.svg?inline'

export default {
  components: {
    Logo,
    SearchIcon,
    QueueIcon,
    CalendarIcon,
    MusicDotsIcon,
    MusicPlusIcon,
    PlayIcon
  },
  data: function(){
    return {
    }
  },
  methods: {
    playMusic: function(musicItem){
      this.$store.dispatch('playMusic', musicItem)
    }
  },
  computed: {
    counter: function(){
      return this.$store.state.counter
    },
    musicList: function(){
      return this.$store.state.musicList
    },
    activeMusicAlbumArt: function(){
      if(!this.$store.state.activeMusic)
        return `url(/albumart/top_bg.png)`;
      else
        return `url(/albumart/${this.$store.state.activeMusic.albumArt})` 
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.header{
    padding-right:40rem; 
    background-position: contain;
    background-size: cover;
    /* background-image:url(~assets/images/top_bg.png) */
  }
.form-input{
    @apply appearance-none bg-color-grey-600 rounded-full py-2 px-3 text-color-black leading-tight
}
.form-input:focus{
    /* border-width: 2px; */
    outline: none;
}

.prepend-input{
    @apply absolute flex items-center px-2;
    top:9px;
    left:45px
}

.append-input{
    @apply absolute right-0 flex items-center px-2;
    top:36px;
}

.prepend{
    padding-left: 36px;
}

.play,
.dots{
  opacity: 0
}

tr:hover .play,
tr:hover .dots{
  opacity: 1;
}

</style>
