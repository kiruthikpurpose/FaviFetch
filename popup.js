document.getElementById('downloadBtn').addEventListener('click', function(e) {
    e.preventDefault();
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const tab = tabs[0];
      const url = new URL(tab.url);
      const faviconUrl = `${url.protocol}//${url.hostname}/favicon.ico`;
      const websiteName = url.hostname.replace('www.', '');
  
      fetch(faviconUrl)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.download = `${websiteName}_favicon.ico`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        })
        .catch(error => {
          console.error('Error downloading favicon:', error);
          alert('Failed to download favicon. The website might not have a favicon or it may not be accessible.');
        });
    });
  });