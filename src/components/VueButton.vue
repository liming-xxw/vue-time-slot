<template>
  <div :class="['VueButton', 'buttype-' + type]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.VueButton {
  display: inline-block;
  padding: 1px 5px;
  border-radius: 4px;
  font-size: 14px;
  color: white;
  cursor: pointer;
  transition: .3s;
}
.buttype- {
  background-color: white;
  color: black;
  border: 1px #dfd8e0 solid;
  &:hover {
    border: 1px #4f9bfa solid;
    color: #4f9bfa;
  }
}
.buttype-primary {
  background-color: #4c96dd;
  &:hover {
    background-color: rgba(76, 150, 221, 0.8);
  }
}
</style>
