// Create a function to replace a specific color with another color
export function replaceColor(image, targetColorHex, replacementColorHex) {
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = image.width;
  tempCanvas.height = image.height;

  const tempCtx = tempCanvas.getContext('2d');
  tempCtx.drawImage(image, 0, 0);

  const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
  const data = imageData.data;

  const targetColor = hexToRgb(targetColorHex);
  const replacementColor = hexToRgb(replacementColorHex);

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    if (r === targetColor.r && g === targetColor.g && b === targetColor.b) {
      data[i] = replacementColor.r;
      data[i + 1] = replacementColor.g;
      data[i + 2] = replacementColor.b;
    }
  }

  tempCtx.putImageData(imageData, 0, 0);

  const newImage = new Image();
  newImage.src = tempCanvas.toDataURL();

  return newImage;
}

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}
