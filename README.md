# Other

> <a href="https://github.com/pipat2468/copy-paste-validate">validate</a> with Vue.js

## Development

mpm install @copy-paste/grid

## Config

```js
import grid from '@copy-paste/grid'

Vue.use(grid)
```

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
    <input style="width: 100%;" />
    <input style="width: 100%;" />
</v-grid>
```

```bash
# or gap with object
```

```html
<v-grid
    xs="1fr"
    sm="100px 1fr"
    md="1fr 1fr 1fr"
    lg="1fr 1fr 1fr 1fr"
    xl="1fr 1fr 1fr 1fr 1fr"
    :gap="{
        xs: '5px',
        sm: '10px',
        md: '15px',
        lg: '20px',
        xl: '25px'
    }"
>
    <input style="width: 100%;" />
    <input style="width: 100%;" />
</v-grid>
```

## 📑 License

[MIT License](./LICENSE)
