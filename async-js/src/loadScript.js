import { loadBootstrap, result } from './loadStyle'
import { BOOTSTRAP } from './scriptSrc'

export const loadScript = (src, cb) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => cb(null, script)
    script.onerror = () => cb(new Error(`Не удалось загрузить скрипт ${script.src}`))
    document.head.appendChild(script)
}

export const addBootstrap = (err, script) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Script ${script.src} is loaded`)
        console.log(_.partition([1, 2, 3, 4], n => n % 2))
        loadBootstrap(BOOTSTRAP, result)
    }
}