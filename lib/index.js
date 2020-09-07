import grid from './grid.js'

export default (Vue) => {
    Vue.prototype.$resize = {
        innerWidth: window.innerWidth
    }

    Vue.component('vGrid', grid)

    window.addEventListener('resize', function () {
        Vue.prototype.$resize.innerWidth = window.innerWidth
    })
}
