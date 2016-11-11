'use strict';

const variationSelectorRegex = require('.');
const test = require('tape');

test('variationSelectorRegex()', t => {
  t.strictEqual(
    variationSelectorRegex().flags,
    'g',
    'should create a regular expression with `global` flag.'
  );

  t.end();
});

test('A regular expression generated with variationSelectorRegex()', t => {
  // http://unicode.org/emoji/charts-beta/emoji-variants.html
  t.deepEqual(
    '☀︎☀️'.match(variationSelectorRegex()).map(char => char.charCodeAt(0)),
    [0xFE0E, 0xFE0F],
    'should match both two emoji variation selectors.'
  );

  // http://www.mirai-ii.co.jp/moji/ivs.html
  t.deepEqual(
    '葛󠄀葛󠄁'.match(variationSelectorRegex()).map(char => char.codePointAt(0)),
    [0xE0100, 0xE0101],
    'should match kanji variation selectors.'
  );

  // http://rishida.net/scripts/block/mongolian
  t.deepEqual(
    '᠀᠋᠀᠌᠀᠍'.match(variationSelectorRegex()).map(char => char.charCodeAt(0)),
    [0x180B, 0x180C, 0x180D],
    'should match Mongolian free variation selectors.'
  );

  // http://babelstone.blogspot.jp/2007/06/secret-life-of-variation-selectors.html
  t.deepEqual(
    'ꡖꡖ︀'.match(variationSelectorRegex()).map(char => char.charCodeAt(0)),
    [0xFE00],
    'should match VS1, used in \'Phags-pa script for example.'
  );

  t.end();
});
