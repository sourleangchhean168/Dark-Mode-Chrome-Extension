chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ darkModeEnabled: false });
});
