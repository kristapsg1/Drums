<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="drum-set">
    <img
      v-for="(item, index) in instSounds"
      :key="index"
      :src="item.image"
      :alt="item.alt"
      :class="item.class"
      @click="item.hasSound && playSound(item.sound)"
    />
  </div>
</template>

<script setup lang="ts">
import { instSounds } from '@/drumSounds/instSound'
import '@/drumSounds/instSound.css'

const playSound = (sound: string | null) => {
  if (sound) {
    console.log(sound)

    const audio = new Audio(sound)
    audio.play()
  }
}

const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'e' || event.key === 'E') {
    playSound(instSounds[1].sound)
  }
  if (event.key === 'o' || event.key === 'O') {
    playSound(instSounds[3].sound)
  }
  if (event.key === 'p' || event.key === 'P') {
    playSound(instSounds[4].sound)
  }
  if (event.key === 't' || event.key === 'T') {
    playSound(instSounds[6].sound)
  }
  if (event.key === 'r' || event.key === 'R') {
    playSound(instSounds[7].sound)
  }
  if (event.key === 'y' || event.key === 'Y') {
    playSound(instSounds[8].sound)
  }
  if (event.key === 'i' || event.key === 'I') {
    playSound(instSounds[9].sound)
  }
  if (event.key === 'u' || event.key === 'U') {
    playSound(instSounds[10].sound)
  }
}

window.addEventListener('keydown', handleKeyPress)
</script>

<style scoped></style>
