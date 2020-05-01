export const loadBootstrap = (src, cb) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = src
    link.crossOrigin = 'anonymous'
    link.integrity = "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
    link.onload = () => cb(null, link)
    link.onerror = () => cb(new Error(`Не удалось загрузить скрипт ${link.href}`))
    document.head.appendChild(link)
}

export const result = (err, link) => {
    if (err) {
        console.log('error')
    } else {
        console.log(`${link.href} Bootstrap is loaded`)
    }
}
