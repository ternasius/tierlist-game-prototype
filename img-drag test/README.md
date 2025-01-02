# Tier List Maker
A drag-and-drop tier list creator built with HTML, CSS, and JavaScript.

## Features
- Drag and drop items between tiers
- Customizable tier labels
- Save tier list as JSON
- Responsive grid layout
- Automatic item arrangement (left to right, top to bottom)

## Project Structure
tier-list/  
├── index.html  
├── style.css  
├── ui.js  
├── buttons.js  
└── data.json

## Components
### HTML Structure
- Container for the entire application
- Tier box region for individual tiers
- Base box for unranked items
- Save button for exporting tier list

### CSS Features
- Grid layout for item arrangement
- Flex layout for tier organization
- Draggable item styling
- Responsive design

### JavaScript Functionality
- Drag and drop implementation
- JSON data loading
- Tier list saving
- Dynamic element creation

## Usage
1. Open `index.html` in a web browser
2. Drag items from the base box into different tiers
3. Items will automatically arrange themselves
4. Click "Save Tier List" to export your arrangement

## Customization
You can modify the tier colors, labels, and items by editing the `data.json` file
