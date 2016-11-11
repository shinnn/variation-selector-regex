'use strict';

/*!
 * The regular expression used in this module is copied from "strip-variation-selectors"
 * https://mths.be/stripvariationselectors
 *
 * Copyright Mathias Bynens <https://mathiasbynens.be/>
 * Available under the MIT license.
 * https://github.com/mathiasbynens/strip-variation-selectors/blob/master/LICENSE-MIT.txt
 *
 * ======================================================================================
 *
 * variation-selector-regex | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/variation-selector-regex
*/
function variationSelectorRegex() {
  return /([\u180B-\u180D\uFE00-\uFE0F]|\uDB40[\uDD00-\uDDEF])/g;
}

module.exports = variationSelectorRegex;
