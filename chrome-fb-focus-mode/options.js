// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var $ = function(el) {
  return document.querySelector('#options input[name=' + el + ']');
}
window.addEventListener('load', function() {
  $('ENABLED').checked = JSON.parse(localStorage.ENABLED || true);
  $('ENLARGE_CHATS').checked = JSON.parse(localStorage.ENLARGE_CHATS || true);
  $('KEEP_DEFAULT_TITLE').checked = JSON.parse(localStorage.KEEP_DEFAULT_TITLE || true);

  $('ENABLED').onchange = function() {
    localStorage.ENABLED = $('ENABLED').checked;
  };

  $('ENLARGE_CHATS').onchange = function() {
    localStorage.ENLARGE_CHATS = $('ENLARGE_CHATS').checked;
  };

  $('KEEP_DEFAULT_TITLE').onchange = function() {
    localStorage.KEEP_DEFAULT_TITLE = $('KEEP_DEFAULT_TITLE').checked;
  };


});
