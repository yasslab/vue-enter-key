vue-enter-key [![Build Status](https://travis-ci.org/yasslab/vue-enter-key.svg?branch=master)](https://travis-ci.org/yasslab/vue-enter-key)
=============

[![NPM](https://nodei.co/npm/vue-enter-key.png)](https://www.npmjs.com/package/vue-enter-key)

Usage
-----

```vue
<template>
  <h1>↵</h1>
  <p>{{message | enterKey }}</p>
  <h1>♡<h1>
  <p>{{message | enterKey "♡" }}</p>
</template>
<script>
var Vue = require('vue');
var VueEnterKey = require('vue-enter-key');

Vue.use(VueEnterKey);

module.exports = {
  data: function () {
    return {message: "hello\nこんにちは\n你好"}
  }
}
</script>
```
