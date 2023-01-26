import { reactive } from 'vue'

export const store = reactive({
  backend_uri: import.meta.env.PROD ? 'https://scamnum-backend.vercel.app/' : import.meta.env.VITE_BACKEND_DEV_SERVER,
  count:0
})