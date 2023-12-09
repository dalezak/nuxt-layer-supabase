import { Storage } from '../utils/storage';
export default defineNuxtPlugin(nuxtApp => {
  console.log("plugins/storage", process.client ? "client" : "server");
  nuxtApp.provide('storage', Storage.instance());
})