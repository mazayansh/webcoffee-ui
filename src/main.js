import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import './index.css'
import router from './router'
import { formatRupiah } from "./helpers"
import dayjs from 'dayjs'
import UpdateLocale from 'dayjs/plugin/updateLocale'
import 'dayjs/locale/id'
import _ from 'lodash'

dayjs.extend(UpdateLocale)
dayjs.locale('id')
dayjs.updateLocale('id', {
    months: [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ]
})

const app = createApp(App)

app.config.globalProperties.$filters = {
    formatRupiah
}

app.use(createPinia()).use(router).mount('#app')
