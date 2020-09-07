# Other

> <a href="https://github.com/mzabriskie/axios">validate</a> with Vue.js

## Development

mpm install @copy-paste/grid

## Usage

```html
<v-grid
    xs="1fr"
    sm="100px 1fr"
    md="1fr 1fr 1fr"
    lg="1fr 1fr 1fr 1fr"
    xl="1fr 1fr 1fr 1fr 1fr"
    gap="20px"
>
    <input v-model="fname" v-rule="rules.fname" style="width: 100%;" />
    <input v-model="lname" v-rule="rules.lname" style="width: 100%;" />
</v-grid>

<script>
    export default {
        data() {
            return {
                fname: '',
                lname: '',
                rules: this.$create_rules({
                    fname(el) {
                        if (!el.value) {
                            return 'fname is require'
                        }
                        if (el.value == 'ss') {
                            return 'duplicate fname'
                        }
                    },
                    lname(el) {
                        if (!el.value) {
                            return 'lname is require'
                        }
                    }
                })
            }
        }
    }
</script>
```

## 📑 License

[MIT License](./LICENSE)
