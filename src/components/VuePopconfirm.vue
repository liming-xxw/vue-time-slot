<template>
  <div
    class="VuePopconfirm"
    v-show="modelValue"
    :style="{ top: top - 140 + 'px', left: left + 'px' }"
  >
    <div class="VuePopconfirmBox">
      <div class="VuePopconfirmBoxHeader">
        <span
          >{{ sections[0] ? getDate(sections[0]) : "00:00" }} ~
          {{ sections[1] ? getDate(sections[1]) : "00:00" }}</span
        >
        <span>{{ getMinutes() || 0 }}分钟</span>
      </div>
      <span class="VuePopconfirmTip">再次点击确认时段</span>
      <div class="VuePopconfirmBoxContent">
        <VueButton> 取消 </VueButton>
        <VueButton type="primary" @click="Ok"> 确认 </VueButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueButton from "./VueButton.vue";
import { defineProps, toRefs } from "vue";

const props = defineProps({
  sections: {
    type: Array,
    default: () => [],
  },
  left: {
    type: Number || String,
    default: 520,
  },
  top: {
    type: Number || String,
    default: 520,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["ok"]);

const { sections, left, top } = toRefs(props);

const getDate = (date: Date) => {
  const Data = new Date(date);
  if (Data.getHours() >= 10) {
    if (Data.getMinutes() == 30) {
      return Data.getHours() + ":" + Data.getMinutes();
    } else {
      return Data.getHours() + ":" + Data.getMinutes() + "0";
    }
  } else {
    if (Data.getMinutes() == 30) {
      return "0" + Data.getHours() + ":" + Data.getMinutes();
    } else {
      return "0" + Data.getHours() + ":" + Data.getMinutes() + "0";
    }
  }
};

const getMinutes = () => {
  let sum = 0;
  const sections1: Date = new Date(sections.value[0] as Date);
  const sections2: Date = new Date(sections.value[1] as Date);
  let d = Math.abs(sections2.getHours() - sections1.getHours());
  if (sections1.getMinutes() == 30) {
    sum += 30;
  }
  if (sections2.getMinutes() == 30) {
    sum += 30;
  }
  sum += d * 60;
  return sum;
};

const Ok = () => {
  emit("ok");
};
</script>

<style lang="scss" scoped>
.VuePopconfirm {
  width: 170px;
  height: 110px;
  position: absolute;
  background-color: white;
  box-shadow: 0 3px 1px -3px #0000001f, 0 6px 10px #00000014,
    0 9px 13px 8px #0000000d;
  .VuePopconfirmBox {
    width: 100%;
    height: 100%;
    padding: 20px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .VuePopconfirmBoxHeader {
      font-size: 13px;
      color: #507387;
      display: flex;
      justify-content: space-between;
    }
    .VuePopconfirmTip {
      font-size: 12px;
      text-align: right;
    }
    .VuePopconfirmBoxContent {
      display: flex;
      justify-content: right;
      gap: 15px;
    }
  }
}
</style>
