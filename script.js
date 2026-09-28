'use strict';
const copyButton = document.querySelector('#copy-citation');
const copyStatus = document.querySelector('#copy-status');
copyButton.addEventListener('click', async () => {
  const citation = document.querySelector('#bibtex').textContent;
  try {
    await navigator.clipboard.writeText(citation);
    copyButton.textContent = 'Copied!';
    copyStatus.textContent = 'Citation copied to clipboard.';
    setTimeout(() => { copyButton.textContent = 'Copy citation'; }, 2500);
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#bibtex'));
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = 'Citation selected. Press Ctrl+C or ⌘C to copy.';
  }
});
// Avoid simultaneous audio if the visitor starts another video.
const videos = [...document.querySelectorAll('video')];
videos.forEach(video => video.addEventListener('play', () => {
  videos.forEach(other => { if (other !== video) other.pause(); });
}));
