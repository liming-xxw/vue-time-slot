<script setup lang="ts">
import VueTimeSlot from "./components/VueTimeSlot.vue";
const ok = (ok: any) => {
  console.log(ok);
};
</script>

<template>
  <VueTimeSlot @ok="ok" style="margin-top: 400px" />
</template>

<style></style>
