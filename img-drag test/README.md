<h1>Tier List Maker</h1>
A drag-and-drop tier list creator built with HTML, CSS, and JavaScript.

<h2>Features</h2>
- Drag and drop items between tiers
- Customizable tier labels
- Save tier list as JSON
- Responsive grid layout
- Automatic item arrangement (left to right, top to bottom)

<h2>Project Structure</h2>
tier-list/
├── index.html
├── style.css
├── ui.js
├── buttons.js
└── data.json

<h2>Components</h2>
<h3>HTML Structure</h3>
- Container for the entire application
- Tier box region for individual tiers
- Base box for unranked items
- Save button for exporting tier list

<h3>CSS Features</h3>
- Grid layout for item arrangement
- Flex layout for tier organization
- Draggable item styling
- Responsive design

<h3>JavaScript Functionality</h3>
- Drag and drop implementation
- JSON data loading
- Tier list saving
- Dynamic element creation

<h2>Usage</h2>
1. Open `index.html` in a web browser
2. Drag items from the base box into different tiers
3. Items will automatically arrange themselves
4. Click "Save Tier List" to export your arrangement

<h2>Customization</h2>

You can modify the tier colors, labels, and items by editing the `data.json` file:
```json
{
  "tiers": [
    {
      "label": "S",
      "color": "#ff7f7f"
    },
    {
      "label": "A",
      "color": "#ffbf7f"
    }
  ],
  "items": [
    {
      "id": "item1",
      "name": "Item 1"
    }
  ]
}
