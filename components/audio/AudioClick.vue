<template>
  <div>
    <audio
      class="audio-click"
      :src="require('@/assets/audio/waveClick.mp3')"
      controls
    ></audio>
  </div>
</template>

<style scoped>
.audio-click {
  position: absolute;
  right: 25px;
  top: 50%;
  outline: none;
}
</style>