# myh5xm

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

##

第一次进入页面，图片发生形变。
当刷新之后，不会产生形变。
原因：左侧的图片被右侧的区域挤压了、所以发生形变
控制右侧区域
width: calc(100% - 51px);
overflow: hidden;
