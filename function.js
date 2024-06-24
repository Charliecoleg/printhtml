// function.js

// Convert HTML content to data URL
function convertHtmlToDataUrl(htmlContent) {
  try {
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    return url;
  } catch (error) {
    console.error('Error converting HTML to data URL:', error.message);
    return null;
  }
}

// Add a print button (hide after clicking)
function addPrintButton() {
  const printButton = document.createElement('button');
  printButton.innerText = 'Print';
  printButton.addEventListener('click', () => {
    window.print();
    printButton.style.display = 'none'; // Hide the button after printing
  });

  // Append the button to the document (customize this part as needed)
  document.body.appendChild(printButton);
}

// Example usage:
const htmlContent = '<html><body><h1>Hello, world!</h1></body></html>';
const dataUrl = convertHtmlToDataUrl(htmlContent);
if (dataUrl) {
  console.log('Data URL:', dataUrl);
  addPrintButton();
}
