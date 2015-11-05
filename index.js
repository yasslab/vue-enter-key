'use strict';

exports.install = function (Vue, opts) {
  Vue.filter('enterKey', function (value, char) {
    char = char || '↵';
    return value.replace(/\n/, char + '\n');
  });
}
