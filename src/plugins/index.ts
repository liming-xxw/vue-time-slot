import VueTimeSlot from "../components/VueTimeSlot.vue";
const install = (Vue: any) => {
  Vue.use(VueTimeSlot.name, VueTimeSlot);
};
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== "undefined" && (window as any).Vue) {
  install((window as any).Vue);
}
export default install;
