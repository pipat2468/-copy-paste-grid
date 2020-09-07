import grid from './grid.js'

export default (Vue) => {
    Vue.prototype.$resize = {
        innerWidth: 0
    }

    Vue.component('vGrid', grid)

    if (process.client) {
        Vue.prototype.$resize.innerWidth = window.innerWidth
        window.addEventListener('resize', function () {
            Vue.prototype.$resize.innerWidth = window.innerWidth
        })
    }
}
