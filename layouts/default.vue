<template>
  <div>
    <div class="flex items-start">
      <div class="left-sidepanel w-1/5 h-screen gradient-deepblue py-6 px-6">

        <div class="menu flex items-center">
          <div class="circle-dot"></div>
          <div class="circle-dot"></div>
          <div class="circle-dot"></div>
        </div>

        <div class="nav flex items-center justify-around mt-12">
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
        <div class="badge text-color-black text-base px-8 py-3 rounded-full text-center gradient-blue-to-green mt-8">
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
          <div class="action flex items-center justify-between px-8 py-3 rounded-full text-center border border-color-grey-700 mt-6">
            <span class="text-base text-color-grey-300">New Playlist</span>
            <i class="fa fa-plus text-base text-color-grey-300"></i>
          </div>
        </div>
      </div>


      <div class="w-3/5">
          <nuxt />
      </div>
      <div class="right-sidepanel w-1/5 h-screen gradient-deepblue py-6 px-6">
        <div class="profile">
          
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import CompassIcon from '~/assets/images/svg/compass.svg?inline';
import LikedIcon from '~/assets/images/svg/liked.svg?inline';
import RadioIcon from '~/assets/images/svg/radio.svg?inline';

export default {
  components:{
    CompassIcon,
    LikedIcon,
    RadioIcon
  }
  
}
</script>

<style>

  .circle-dot{
    @apply w-3 h-3 rounded-full bg-color-grey-700 mr-2;
  }
  .nav-link{
    @apply text-base text-color-grey-200 block mt-4;
  }
</style>

