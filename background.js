chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: "alert(window.getSelection().toString());"
  });
});
