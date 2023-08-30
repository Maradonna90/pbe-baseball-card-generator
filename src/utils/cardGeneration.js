import { replaceColor } from './replaceColor.js';
export function generateCard(
  canvas,
  selectedSeason,
  selectedTeam,
  playerImage,
  name,
  selectedPosition
) {
  const ctx = canvas.getContext('2d');
  
  // INFO: Create Images and Load Images
  // Load template image and team logo image
  let templateImage = new Image();
  let teamLogoImage = new Image();
  let playerImageImage = new Image();

  // image loading code ...
  templateImage.src = `images/templates/${selectedSeason.id}.png`;
  teamLogoImage.src = `images/teams/${selectedTeam.logo}`;
  playerImageImage.src = playerImage;

  // Replace Colors
  let replacementColor = "#ffb314"
  if (selectedTeam.name !== "Default") {
    templateImage = replaceColor(templateImage, replacementColor, selectedTeam.primary_color);
  }


  // Wait for both images to load before drawing
  Promise.all([
    new Promise(resolve => templateImage.onload = resolve),
    new Promise(resolve => teamLogoImage.onload = resolve),
    new Promise(resolve => playerImageImage.onload = resolve)
  ]).then(() => {
    // clear Rect
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // INFO: process images like a stack of layers, bottom up
    // Replace colors, place text as needed
    // Draw player image
    ctx.drawImage(playerImageImage, 0, 0, canvas.width, canvas.height);

      // Draw template image
    ctx.drawImage(templateImage, 0, 0, canvas.width, canvas.height);

    // Draw team logo image
    ctx.drawImage(teamLogoImage, 7, 187, 50, 50); // Adjust position and size

    // Draw text
    // TODO: Fix positions

    // Player Name
    ctx.font = '13px Arial';
    ctx.fillStyle = ( selectedTeam.secondary_color || '#FFFFFF' );
    ctx.fillText(name, 69, 215);

    // Player Position
    ctx.font = '9px Arial';
    ctx.fillStyle = ( selectedTeam.secondary_color || '#FFFFFF' );
    ctx.fillText(selectedPosition, 60, 246);
    
    return canvas.toDataURL(); // Return the generated card image URL
  });
}
