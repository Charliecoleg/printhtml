// driver.js
const htmlContent = getInput("htmlContent"); // Get input from Glide
const dataUrl = convertHtmlToDataUrl(htmlContent); // Call your JavaScript function
setResult("dataUrl", dataUrl); // Set the result back to Glide
