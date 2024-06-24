function applyDarkMode() {
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

chrome.storage.local.get(['darkModeEnabled'], function(result) {
  if (result.darkModeEnabled) {
    applyDarkMode();
  }
});
