<template>
  <div>
    <div class="VueTimeSlot">
      <div class="VueTimeSlotList">
        <VuePopconfirm
          :top="Domposition.top"
          :left="Domposition.left"
          :sections="sections"
          v-model="visble"
          @ok="OkFuc"
        />
        <div
          class="VueTimeSlotItems"
          v-for="(item, index) in times"
          :key="index"
        >
          <div
            class="VueTimeSlotBox"
            :class="{
              VueTimeSlotBoxSelect: TimeList.includes(index),
              VueTimeSlotBoxItems: getItemsSection(index),
            }"
            @mouseover="ItmeListOnMouseover(index)"
            @click="ItmeListOnclick(index)"
            ref="Refsdom"
          ></div>

          <span style="margin-left: -7px">
            {{ index % 2 == 0 ? item : "" }}</span
          >
          <span v-show="item == 22.5" style="margin-left: 50px"> 23 </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, defineEmits } from "vue";
import VuePopconfirm from "./VuePopconfirm.vue";
const times = ref<number[]>([
  7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15,
  15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22, 22.5,
]);

const emit = defineEmits(["ok", "change"]);

const Refsdom = ref<HTMLElement[] | any>();
const visble = ref<boolean>(false);
const TimeList = ref<number[]>([]);
const TimeItems = ref<number>();
const TimeItemsx = ref<number>();
const sections = ref<Date[]>([]);
const Domposition = reactive<{ left: number; top: number }>({
  left: 0,
  top: 0,
});

const OkFuc = () => {
  visble.value = false;
  emit("ok", sections.value);
};

const getDomposition = (id: number) => {
  Domposition.left = Refsdom.value[id].offsetLeft;
  Domposition.top = Refsdom.value[id].offsetTop;
};

const recoveryFuc = (id: number) => {
  TimeList.value = [];
  sections.value = [];
  TimeItems.value = undefined;
  TimeItemsx.value = undefined;
  sections.value.push(getTimeConversion(times.value[id] || 23));
  sections.value.push(getTimeConversion(times.value[id + 1] || 23));
  TimeList.value.push(id);
  return false;
};

const ItmeListOnclick = (id: number) => {
  visble.value = true;
  getDomposition(id);
  TimeList.value.push(id);
  if (sections.value.length == 0) {
    sections.value.push(getTimeConversion(times.value[id] || 23));
    sections.value.push(getTimeConversion(times.value[id + 1] || 23));
  }

  if (TimeList.value.length > 2) {
    recoveryFuc(id);
  }
};

const ItmeListOnMouseover = (id: number) => {
  if (TimeList.value.length == 1) {
    TimeItems.value = id;
    sections.value[1] = getTimeConversion(times.value[id + 1] || 23);
    console.log(sections.value);
  }
};

const getTimeConversion = (time: number) => {
  const date = new Date();
  const sp = String(time).split(".");
  date.setHours(Number(sp[0]));
  date.setMinutes(sp[1] == "5" ? 30 : 0);
  return date;
};

const getItemsSection = (id: number) => {
  let flag: boolean = false;
  if (id > TimeList.value[0]) {
    flag = id > TimeList.value[0] && id < (TimeItems.value as any) + 1;
  } else {
    flag = id < TimeList.value[0] && id > (TimeItems.value as any) - 1;
  }
  return flag;
};

onMounted(() => {
  getDomposition(0);
});
</script>

<style lang="scss" scoped>
.VueTimeSlot {
  width: 1650px;
  margin: 0 auto;
  .VueTimeSlotList {
    display: flex;
    .VueTimeSlotItems {
      display: inline-block;
      padding: 10px 0px;
      color: #507387;
      &:last-child {
        .VueTimeSlotBox {
          border-right: 1px #dfd8e0 solid;
        }
      }
      .VueTimeSlotBox {
        width: 50px;
        height: 20px;
        border: 1px #dfd8e0 solid;
        border-right: none;
        cursor: pointer;
      }
      .VueTimeSlotBoxSelect {
        background-color: #4f9bfa !important;
      }
      .VueTimeSlotBoxItems {
        background-color: rgba(50, 150, 250, 0.3);
      }
    }
  }
}
</style>
