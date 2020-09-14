import grid from '@copy-paste/grid/components/grid.js'

function resize() {
    if (window.innerWidth > 1199) {
        return 'xl,lg,md,sm,xs'
    } else if (window.innerWidth > 991) {
        return 'lg,md,sm,xs'
    } else if (window.innerWidth > 767) {
        return 'md,sm,xs'
    } else if (window.innerWidth > 575) {
        return 'sm,xs'
    } else {
        return 'xs'
    }
}

const install = (Vue) => {
    Vue.prototype.$resize = {
        sizes: resize()
    }

    Vue.component('vGrid', grid)

    window.addEventListener('resize', function () {
        Vue.prototype.$resize.sizes = resize()
    })
}

export default { install }
