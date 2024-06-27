document.getElementById('collapse-btn').addEventListener('click', () => {
    console.log('collapse button clicked')
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: collapseFiles
    });
  });
});

document.getElementById('hide-btn').addEventListener('click', () => {
    console.log('hide button clicked')
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: hideFiles
    });
  });
});

function collapseFiles() {
    console.log('collapseFiles')
  const fileHeaders = document.querySelectorAll('.file-header');
  fileHeaders.forEach(header => {
    const filename = header.querySelector('.file-info').textContent.trim();
    console.log('collapseFiles filename', filename)
    if (filename.endsWith('.spec.tsx') || filename.endsWith('.tsx.snap')) {
      const collapseButton = header.querySelector('button[aria-label="Toggle diff contents"]');
      if (collapseButton && collapseButton.getAttribute('aria-expanded') === 'true') {
        console.log('found collapse button')
        collapseButton.click();
      }else{
          console.log('collapse button not found')
      }
    }
  });
}

function hideFiles() {
    console.log('hideFiles')
  const fileHeaders = document.querySelectorAll('.file-header');
  fileHeaders.forEach(header => {
    const filename = header.querySelector('.file-info').textContent.trim();
    console.log('hideFiles filename', filename)
    if (filename.endsWith('.tsx') || filename.endsWith('.tsx.snap')) {
      const fileDiffContainer = header.closest('div[data-details-container-group="file"]');
      if (fileDiffContainer) {
        console.log('fileDiffContainer  not found')
        fileDiffContainer.style.display = 'none';
      }else{
        console.log('fileDiffContainer  not found')
    }
    }
  });
}
