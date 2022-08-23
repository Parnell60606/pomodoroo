<template>
  <v-row class="text-center">
    <v-col cols="12">
      <h1> {{ currentText }} </h1>
      <h1> {{ timeText }} </h1>
    </v-col>
    <v-col cols="12">
      <v-btn class="mx-3" icon color="green" v-if="status !== 1" @click="startTimer">
        <v-icon icon="mdi-play" />
      </v-btn>
      <v-btn class="mx-3" icon color="blue" v-else @click="pauseTimer">
        <v-icon icon="mdi-pause" />
      </v-btn>
      <v-btn class="mx-3" icon color="red" v-if="current.length > 0" @click="finishTimer(true)">
        <v-icon icon="mdi-skip-next" />

      </v-btn>
    </v-col>

  </v-row>

</template>

<script setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useListStore } from '../stores/list.js'
import { useSettingsStore } from '../stores/setting.js'

const list = useListStore()
const { current, items, timeleft } = storeToRefs(list)
const { countdown, start, finish } = list

const settings = useSettingsStore()
const { selectedAlarmFile } = storeToRefs(settings)

const currentText = computed(() => {
  return current.value.length > 0 ? current.value : items.value.length > 0 ? '點擊開始' : '沒有事項'
})
const timeText = computed(() => {
  const m = Math.floor(timeleft.value / 60).toString().padStart(2, '0')
  const s = (timeleft.value % 60).toString().padStart(2, '0')
  return m + ':' + s
})

let timer
// 0 = 停止
// 1 = 倒數中
// 2 = 暫停
const status = ref(0)

const pauseTimer = () => {
  status.value = 2
  clearInterval(timer)
}

const finishTimer = (skip) => {
  clearInterval(timer)
  status.value = 0
  finish()
  if (!skip) {
    const audio = new Audio()
    audio.src = selectedAlarmFile.value
    audio.play()
  }
  if (items.value.length > 0) {
    startTimer()
  }
}

const startTimer = () => {
  if (status.value === 0 && items.value.length > 0) {
    start()
  }
  if (current.value.length > 0) {
    status.value = 1
    timer = setInterval(() => {
      countdown()
      if (timeleft.value === 0) {
        finishTimer(false)
      }
    }, 1000)
  }
}
</script>
