// TODO: Make it work instead of using main.js

var template = function(templateStr, data) {
  return Object.keys(data).reduce(function(templateStr, key) {
    let findRegExp = new RegExp('{{' + key + '}}', 'g')
    return templateStr.replace(findRegExp, data[key])
  }, templateStr);
};

var code = `
    (function() {
      'use strict';
      console.log('runned!');
      if(!{{ENABLED}}) {
        return;
      }
      if (document.location.hostname.replace(/^www./, '') === 'facebook.com') {
        return;
      }

      var focusMode = localStorage.getItem('____focusMode') === '0' ? false : true;
      var ENLARGE_CHATS = {{ENLARGE_CHATS}};
      var KEEP_DEFAULT_TITLE = {{KEEP_DEFAULT_TITLE}};
      if (focusMode) {
          var css = '#globalContainer {visibility: hidden} #pagelet_bluebar, #pagelet_canvas_nav_content, #pagelet_ticker, #pagelet_ego_pane {display: none !important}';
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
    })();
`;

code = template(code, {
  'ENABLED': localStorage.ENABLED ? 'true' : 'false',
  'ENLARGE_CHATS': localStorage.ENLARGE_CHATS || 'true',
  'KEEP_DEFAULT_TITLE': JSON.parse(localStorage.KEEP_DEFAULT_TITLE || 'true') ? '"Facebook"' : 'false'
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {
    code: code
  });
});
chrome.tabs.onUpdated.addListener(function() {
  chrome.tabs.executeScript(null, {
    code: code
  });
})


