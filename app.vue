<template>
  <video :class="{ 'flex animate__animated animate__fadeIn': interaction, 'hidden': !interaction }" playsinline loop
    muted autoplay ref="vid" class="fixed w-full min-h-[calc(100dvh)] object-cover object-center left-0 top-0 z-[-1]">
    <source loop src="https://api-magicdonate.kfn.moe/bg.mp4" type="video/mp4">
  </video>
  <button @click="play()" v-if="!interaction"
    class="items-center justify-center backdrop-blur-sm flex w-full min-h-[calc(100dvh)] p-4">
    <div class="text-center">
      <h1 style="text-shadow: white 0px 0px 11px;" class="animate__animated animate__fadeInUp text-4xl title mt-4">
        คลิกที่หน้าจอเพื่อเข้าสู่เพนาคอนี
      </h1>
    </div>
  </button>
  <div :class="{ 'flex animate__animated animate__fadeIn': interaction, 'hidden': !interaction }"
    class="top-0 left-0 fixed z-[10] w-full px-3 text-2xl font-thin">
    <div class="mx-auto w-full max-w-6xl mt-5 flex justify-start text-xl">
      <div class="flex justify-between bg-white/10 border-2 border-white/5 px-3 py-3 rounded-full gap-3 w-full">
        <h1>
          <NuxtLink to="/" class="title">Aventurine888</NuxtLink>
        </h1>
        <div class="flex gap-3 text-end justify-end">
          <button @click="_alert">โปรโมชั่น</button>
          <NuxtLink to="https://hsr.hoyoverse.com/" target="_blank">สมัครสมาชิก</NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <div :class="{ 'flex animate__animated animate__fadeIn': interaction, 'hidden': !interaction }"
    class="min-h-[calc(100dvh)] w-full overflow-hidden bg-black/40 backdrop-blur-sm sm:items-center justify-center p-10">
    <div class="fixed bottom-[-20px] right-[-30px] z-[-1] animate__animated animate__fadeInUp">
      <img src="~/assets/chipcorner.webp" class="h-[190px] animate__pulse animate__animated animate__infinite">
    </div>
    <div class="fixed bottom-0 left-0 animate__animated animate__fadeInUp ">
      <img src="~/assets/boardcorner.webp" class="animate__pulse animate__animated animate__infinite">
    </div>

    <div
      class="bg-gradient-to-t from-black/80 to-transparent min-h-[calc(100dvh)] w-full fixed z-[-1] top-0 left-0 bottom-0 right-0">
    </div>
    <div class="text-center mt-[150px] sm:mt-[0px]">
      <div
        class="-mb-[20px] sm:-mb-[50px] w-fit mx-auto rounded-full min-h-[200px] min-w-[200px] flex items-center justify-center">
        <i class="fa-sharp fa-solid fa-cards text-9xl pb-1"></i>
      </div>
      <h1 style="text-shadow: rgb(209 162 74 / 57%) 0px 0px 10px;"
        class="font-bold md:font-normal animate__flipInX animate__animated text-[37px] sm:text-[70px] sm:p-3 uppercase title text-transparent bg-gradient-to-tr from-orange-300 to-yellow-600 bg-clip-text">
        Aventurine888
      </h1>
      <p class="font-thin sm:-mt-5 sm:text-xl animate__flipInX animate__animated animate__slow">
        " พนันฝากถอนโอนไว ได้รับเงินทันที ที่เพนาคอนี "
      </p>
      <div class="flex items-center justify-center">
        <NuxtLink
          to="https://hsr.hoyoverse.com/th-th/character?utm_source=hsrofficialweb&utm_medium=fab&utm_campaign=button&worldIndex=8&charIndex=2">
          <div class="animate__flipInX animate__animated animate__slower">
            <div class="transition-all duration-200 active:scale-95">
              <div class="relative flex items-center justify-center">
                <img src="/btn.webp" width="90" class="absolute pointer-events-none" alt="">
                <p class="p-10">
                  เริ่มต้น
                </p>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
  <footer class="fixed z-[100] bottom-5 left-5 opacity-80 font-bold uppercase">© <NuxtLink to="https://kfn.moe" target="_blank">
      MagicLab {{ new Date().getFullYear() }}<br><span class="font-thin">By Kafune CH.</span></NuxtLink>
  </footer>
</template>
<script setup>

function _alert() {
  alert('โปรโมชั่น‼️\n\n🦚Aventurine888 เว็บพนันออนไลน์อันดับ 1 ในเพนาคอนี🎰💰\n\n🎮เกมดัง แตก แจกไม่ยั้ง​🤯\n🎰สล็อตเว็บตรง แตกง่ายจ่ายหนัก😼\n🔖รับฟรี150สปิน เพียงฝาก 💸100เครดิต/บิล😍\nแจกโค้ดรับฟรีสปินกันเน้นๆ🤩💵✨\nโค้ด : 🎉TheGoldenTouch🎉\nสมัคร 👉🏻https://Aventurine888.com ติดต่อแอดมิน▶️AventurineIPC \n\n 📌 Website by KafuneCH @MagicLab')
}

const interaction = ref(false)
const vid = ref(null)

function play() {
  interaction.value = true
  const audio = new Audio('/audio.mp3');
  audio.loop = true;
  audio.play();

  vid.value.currentTime = 0;
  vid.value.play()
}
</script>