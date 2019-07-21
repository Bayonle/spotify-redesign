<template>
  <div>
    <div class="relative w-full">
      <div class="left-sidepanel w-1/5 h-screen gradient-deepblue py-6 px-6 fixed left-0 top-0">

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

      <div class="w-3/5 mx-auto">
          <nuxt />
      </div>

      <div class="right-sidepanel w-1/5 h-screen gradient-deepblue py-6 px-6 fixed right-0 top-0">
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
  </div>
</template>

<script>
import CompassIcon from '~/assets/images/svg/compass.svg?inline';
import LikedIcon from '~/assets/images/svg/liked.svg?inline';
import RadioIcon from '~/assets/images/svg/radio.svg?inline';
import LoveIcon from '~/assets/images/svg/love.svg?inline';
import DiscIcon from '~/assets/images/svg/disc.svg?inline';
import MusicIcon from '~/assets/images/svg/music.svg?inline';

export default {
  components:{
    CompassIcon,
    LikedIcon,
    RadioIcon,
    LoveIcon,
    DiscIcon,
    MusicIcon
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
  .activity-link{
    @apply text-sm text-color-grey-500  mt-4;
  }
</style>

