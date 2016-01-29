var asap = function(callback) {
  var intervalId = setInterval(function() {
    if (document.body) {
      clearInterval(intervalId)
      callback();
    }
  }, 25); // 25=40 checks per second
}


asap(function() {
  'use strict';
  if(!localStorage.__FBFM_isEnabled === 'false') {
    return;
  }
  //if (document.location.hostname.replace(/^www./, '') !== 'facebook.com') {
  //  return;
  //}

  var focusMode = localStorage.____FBFM_focusMode === '0' ? false : true;
  var ENLARGE_CHATS = true;
  var KEEP_DEFAULT_TITLE = "Facebook";
  if (focusMode) {
      var css = 'body {overflow: hidden;} #globalContainer {visibility: hidden} #pagelet_bluebar, #pagelet_canvas_nav_content, #pagelet_ticker, #pagelet_ego_pane {display: none !important}';
      var style = document.createElement('style');

      if (ENLARGE_CHATS) {
          css += ' .fbDockChatTabFlyout {width: 400px !important;height:642px !important;} .fbNubGroup > .fbNub {width:400px !important;}';
      }

      if (KEEP_DEFAULT_TITLE) {
          setInterval(function() {
              if (document.title !== KEEP_DEFAULT_TITLE) {
                  document.title = KEEP_DEFAULT_TITLE;
              }
          }, 200)
      }

      style.appendChild(document.createTextNode(css));
      (document.head || document.body).appendChild(style);
  }
})

