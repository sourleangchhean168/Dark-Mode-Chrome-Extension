document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: toggleDarkMode,
  });

  // Update the dark mode state in storage
  chrome.storage.local.get(['darkModeEnabled'], function(result) {
    let newDarkModeState = !result.darkModeEnabled;
    chrome.storage.local.set({ darkModeEnabled: newDarkModeState });
  });
});

function toggleDarkMode() {
  let darkModeStyle = document.getElementById('dark-mode-style');
  if (darkModeStyle) {
    darkModeStyle.remove();
  } else {
    let darkModeStyle = document.createElement('style');
    darkModeStyle.id = 'dark-mode-style';
    darkModeStyle.innerText = `
      html, body, div, span, applet, object, iframe,
      h1, h2, h3, h4, h5, h6, p, blockquote, pre,
      a, abbr, acronym, address, big, cite, code,
      del, dfn, em, img, ins, kbd, q, s, samp,
      small, strike, strong, sub, sup, tt, var,
      b, u, i, center, dl, dt, dd, ol, ul, li,
      fieldset, form, label, legend, table, caption,
      tbody, tfoot, thead, tr, th, td, article,
      aside, canvas, details, embed, figure,
      figcaption, footer, header, hgroup, menu,
      nav, output, ruby, section, summary, time,
      mark, audio, video {
        background: #121212 !important;
        color: #e0e0e0 !important;
      }
    `;
    document.head.appendChild(darkModeStyle);
  }
}
