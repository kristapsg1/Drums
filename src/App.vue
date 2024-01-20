<template>
  <h1>Drums</h1>
  <Drumset></Drumset>
  <Speakers></Speakers>
  <h2 class="Letter E">E</h2>
  <h2 class="Letter R">R</h2>
  <h2 class="Letter T">T</h2>
  <h2 class="Letter Y">Y</h2>
  <h2 class="Letter U">U</h2>
  <h2 class="Letter I">I</h2>
  <h2 class="Letter O">O</h2>
  <h2 class="Letter P">P</h2>
</template>

<script setup lang="ts">
import Drumset from '@/components/Drumset.vue'
import Speakers from '@/components/Speakers.vue'
</script>

<style>
h1 {
  color: wheat;
  display: flex;
  justify-content: center;
  font-size: 100px;
  margin: auto;
}

.Letter {
  border: 1px solid black;
  background-color: wheat;
  width: fit-content;
  padding: 10px 15px;
}

.E {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-720%) translateY(-650%);
}

.R {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-470%) translateY(-510%);
}

.T {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-70%) translateY(-250%);
}

.Y {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-200%) translateY(-650%);
}

.I {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(100%) translateY(-650%);
}

.U {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(530%) translateY(-450%);
  z-index: 3;
}

.O {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(525%) translateY(-850%);
}

.P {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(405%) translateY(-850%);
}
</style>
