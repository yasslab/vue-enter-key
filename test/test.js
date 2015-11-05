var assert = require('assert');
var Vue = require('vue');
var VueEnterKey = require('../index.js');

describe('vue-enter-key', function () {
  before(function() {
    Vue.use(VueEnterKey);
  });

  it('should render \n as ↵', function () {
    var vm = new Vue({data: {text: "Hello, World!\nこんにちは、世界!"}});
    var expected = "Hello, World!↵\nこんにちは、世界!";
    var actual = vm.$interpolate('{{text | enterKey}}');
    assert.equal(actual, expected);
  });

  it('should render \n as <specified char>', function () {
    var vm = new Vue({data: {text: "Hello, World!\nこんにちは、世界!"}});
    var expected = "Hello, World!<改行>\nこんにちは、世界!";
    var actual = vm.$interpolate('{{text | enterKey "<改行>"}}');
    assert.equal(actual, expected);
  });
});
