<template>
  <div class="mx-auto w-full relative">
    <section class="header h-64 w-full px-8 py-3 fixed top-0 bg-no-repeat object-cover object-center" >
      <div class="header-control w-full flex items-center justify-between">
        <div class="next-prev w-1/5 flex items-center">
          <i class="fa fa-angle-left text-white text-4xl mr-8"></i>
          <i class="fa fa-angle-right text-white text-4xl "></i>
        </div>
        <div class="w-3/5 relative">
          <div class="flex items-center justify-center w-full">
            <input type="email" class="form-input mr-8 pl-24 prepend w-3/4 " placeholder="Search">
          </div>
            <div class="prepend-input">
                <search-icon />
            </div>
        </div>
        <div class="w-1/5 ">
          <queue-Icon class="ml-auto" />
        </div>
      </div>
    </section>
    <section id="music-section" class="w-full bg-color-black-1000 px-8 py-6 h-auto min-h-screen my-auto pt-64">
      <div class="music-wrapper h-full pt-12">
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
          <table class="w-full">
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
                    <play-icon class="play" />

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
      musicList: [
        {
          "title":"I Don’t Like Mondays",
          "artist":"The Boomtown Rats",
          "time":"4 days ago"
        },
        {
          "title":"Good For You",
          "artist":"Selena Gomez",
          "time":"4 days ago"
        },
        {
          "title":"Same Old Love",
          "artist":"Selena Gomez",
          "time":"4 days ago"
        },
        {
          "title":"Muddy Waters",
          "artist":"LP",
          "time":"4 days ago"
        },
        {
          "title":"Birileri",
          "artist":"Nada",
          "time":"4 days ago"
        },
        {
          "title":"Love Came Here",
          "artist":"Lhasa De Sela",
          "time":"4 days ago"
        },
        {
          "title":"Love Came Here",
          "artist":"Lhasa De Sela",
          "time":"4 days ago"
        },
        {
          "title":"Love Came Here",
          "artist":"Lhasa De Sela",
          "time":"4 days ago"
        },
        {
          "title":"Love Came Here",
          "artist":"Lhasa De Sela",
          "time":"4 days ago"
        },
        {
          "title":"Love Came Here",
          "artist":"Lhasa De Sela",
          "time":"4 days ago"
        },
        {
          "title":"Love Came Here",
          "artist":"Lhasa De Sela",
          "time":"4 days ago"
        },
        {
          "title":"Love Came Here",
          "artist":"Lhasa De Sela",
          "time":"4 days ago"
        },
        {
          "title":"Love Came Here",
          "artist":"Lhasa De Sela",
          "time":"4 days ago"
        },
        {
          "title":"Love Came Here",
          "artist":"Lhasa De Sela",
          "time":"4 days ago"
        },
      ]
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
    background-image:url(~assets/images/top_bg.png)
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
