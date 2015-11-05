vue-enter-key [![Build Status](https://travis-ci.org/yasslab/vue-enter-key.svg?branch=master)](https://travis-ci.org/yasslab/vue-enter-key)
=============

Usage:

```js
var Vue = require('vue');
var VueEnterKey = require('vue-enter-key');

Vue.use(VueEnterKey);

var vm1 = new Vue({template: '{{message | enterKey}}', data: {message: "hello\nこんにちは\n你好"});
var vm2 = new Vue({template: '{{message | enterKey "♡"}}', data: {message: "hello\nこんにちは\n你好"});
```
