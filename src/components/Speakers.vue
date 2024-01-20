<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <img
    src="https://freepngimg.com/save/22077-audio-speakers-image/1080x1080"
    alt="Speaker One"
    class="speaker first"
    @click="toggleAudio(speakerOne)"
  />

  <img
    src="https://freepngimg.com/save/22077-audio-speakers-image/1080x1080"
    alt="Speaker Two"
    class="speaker second"
    @click="toggleAudio(speakerTwo)"
  />
</template>

<script setup lang="ts">
import speakerOne from '@/assets/sounds/SpeakerOne.mp3'
import speakerTwo from '@/assets/sounds/SpeakerTwo.mp3'

let isPlaying = false
let currentAudio: HTMLAudioElement | null = null

const toggleAudio = (audio: string) => {
  if (currentAudio) {
    currentAudio.pause()
    currentAudio.currentTime = 0
  }

  currentAudio = new Audio(audio)
  currentAudio.volume = 0.2

  if (!isPlaying) {
    currentAudio.play()
    isPlaying = true
  } else {
    isPlaying = false
  }
}
</script>

<style>
.speaker {
  width: 200px;
  height: 200px;
}

.first {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(330%) translateY(-350%) scaleX(-1) rotate(40deg);
  cursor: pointer;
}

.second {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-350%) translateY(-350%) rotate(40deg);
  cursor: pointer;
}
</style>
