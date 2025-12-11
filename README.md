<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Color Palette Generator & Saver</title>
	<link rel="stylesheet" href="color-pallete.css">
</head>
<body>
	<div class="container">
		<h1>Color Palette Generator</h1>
		<!-- 1. Text Entry: Palette Name -->
		<label for="paletteName">Palette Name:</label>
		<input type="text" id="paletteName" placeholder="Enter palette name">

		<!-- 2. Selection: Number of Colors -->

		<label for="colorCountInput">Number of Colors:</label>
		<input type="number" id="colorCountInput" min="1" max="20" value="5" placeholder="Enter number (1-20)" class="color-count-input">
		<div class="input-note">You can generate up to 20 colors at a time.</div>

		<!-- 3. Button: Generate Palette -->
		<button id="generateBtn">Generate Palette</button>

		<!-- 4. Color Display: Clickable Color Areas -->
		<div id="paletteDisplay" class="palette-display">
			<!-- Colors will be shown here -->
		</div>

		<!-- 5. Button: Save Palette -->
		<button id="saveBtn">Save Palette</button>

		<!-- 6. Saved Palettes Section -->
		<h2>Saved Palettes</h2>
		<div id="savedPalettes" class="saved-palettes">
			<!-- Saved palettes will appear here -->
		</div>
	</div>
	<script src="color-pallete.js"></script>
</body>
</html>






/* Input note styling */
.input-note {
	text-align: center;
	font-size: 0.95rem;
	color: #6366f1;
	margin-bottom: 16px;
	margin-top: -8px;
}
/* Custom color count input styling */
.color-count-input {
	width: 120px;
	padding: 10px;
	border-radius: 8px;
	border: 1px solid #c9c9c9;
	font-size: 1rem;
	margin-bottom: 12px;
	box-sizing: border-box;
	transition: border 0.2s;
	text-align: center;
	outline: none;
	display: block;
	margin-left: auto;
	margin-right: auto;
}
.color-count-input:focus {
	border: 1.5px solid #4f46e5;
	background: #f3f4f6;
}
/* Visually integrated color save button */
.color-box-wrapper {
	position: relative;
	display: inline-block;
	margin-right: 8px;
	margin-bottom: 8px;
}
.save-color-btn {
	position: absolute;
	top: 4px;
	right: 4px;
	background: rgba(255,255,255,0.85);
	border: none;
	border-radius: 50%;
	width: 28px;
	height: 28px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.1rem;
	color: #4f46e5;
	box-shadow: 0 1px 4px rgba(34,34,59,0.10);
	cursor: pointer;
	transition: background 0.2s, transform 0.2s;
	z-index: 2;
}
.save-color-btn:hover {
	background: #e0e7ff;
	color: #22223b;
	transform: scale(1.08);
}
/* Professional Color Palette Generator Styles */

body {
	background: linear-gradient(120deg, #f8fafc 0%, #e0e7ff 100%);
	font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
	margin: 0;
	padding: 0;
	color: #22223b;
}

.container {
	max-width: 600px;
	margin: 40px auto;
	background: #fff;
	border-radius: 16px;
	box-shadow: 0 4px 24px rgba(34, 34, 59, 0.12);
	padding: 32px 28px 28px 28px;
}

h1, h2 {
	text-align: center;
	font-weight: 700;
	margin-bottom: 24px;
}

label {
	display: block;
	margin-top: 18px;
	margin-bottom: 6px;
	font-size: 1rem;
	font-weight: 500;
}

input[type="text"], select {
	width: 100%;
	padding: 10px;
	border-radius: 8px;
	border: 1px solid #c9c9c9;
	font-size: 1rem;
	margin-bottom: 12px;
	box-sizing: border-box;
	transition: border 0.2s;
}
input[type="text"]:focus, select:focus {
	border: 1.5px solid #4f46e5;
	outline: none;
}

button {
	background: #4f46e5;
	color: #fff;
	border: none;
	border-radius: 8px;
	padding: 12px 24px;
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	margin: 10px 0;
	box-shadow: 0 2px 8px rgba(79, 70, 229, 0.08);
	transition: background 0.2s, transform 0.2s;
}
button:hover {
	background: #6366f1;
	transform: translateY(-2px) scale(1.03);
}

.palette-display {
	display: flex;
	gap: 16px;
	margin: 24px 0;
	justify-content: flex-start;
	flex-wrap: wrap;
	min-height: 60px;
	max-width: 100%;
	overflow-x: auto;
	box-sizing: border-box;
}
.color-box {
	width: 60px;
	height: 60px;
	border-radius: 10px;
	box-shadow: 0 2px 8px rgba(34, 34, 59, 0.10);
	border: 2px solid #e0e7ff;
	cursor: pointer;
	transition: transform 0.2s, box-shadow 0.2s;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 600;
	color: #22223b;
	box-sizing: border-box;
	margin-bottom: 8px;
}
.color-box.selected {
	border: 2.5px solid #4f46e5;
	box-shadow: 0 4px 16px rgba(79, 70, 229, 0.15);
	transform: scale(1.08);
}

.saved-palettes {
	margin-top: 18px;
	display: flex;
	flex-direction: column;
	gap: 18px;
}
.saved-palette {
	background: #f3f4f6;
	border-radius: 10px;
	padding: 12px 18px;
	box-shadow: 0 2px 8px rgba(34, 34, 59, 0.07);
	display: flex;
	align-items: center;
	gap: 16px;
	justify-content: space-between;
}
.saved-palette-name {
	font-weight: 600;
	color: #4f46e5;
	margin-right: 12px;
}
.saved-palette-colors {
	display: flex;
	gap: 8px;
}
.saved-palette-color {
	width: 28px;
	height: 28px;
	border-radius: 6px;
	border: 1.5px solid #e0e7ff;
	box-shadow: 0 1px 4px rgba(34, 34, 59, 0.08);
}

@media (max-width: 700px) {
	.container {
		max-width: 98vw;
		padding: 18px 8px;
	}
	.palette-display {
		gap: 8px;
		flex-wrap: wrap;
		overflow-x: auto;
	}
	.color-box {
		width: 40px;
		height: 40px;
		margin-bottom: 6px;
	}
}




// Color Palette Generator & Saver
// Author: [Carter Broadhead]
// Date: 2025-12-02
// This script generates random color palettes, allows naming and saving them, and displays saved palettes.

// Array to store saved palettes
let savedPalettes = [];
// Array to store saved individual colors
let savedColors = [];

// Utility: Generate a random hex color
function getRandomColor() {
	const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
	return `#${hex}`;
}

// Generate a palette of n colors (returns array)
function generatePalette(n) {
	const palette = [];
	for (let i = 0; i < n; i++) {
		palette.push(getRandomColor());
	}
	return palette;
}

// Render palette colors in the display area
function renderPalette(colors) {
	const display = document.getElementById('paletteDisplay');
	display.innerHTML = '';
	colors.forEach((color, idx) => {
		// Wrapper for color and button
		const colorBoxWrapper = document.createElement('div');
		colorBoxWrapper.className = 'color-box-wrapper';

		// Color box
		const box = document.createElement('div');
		box.className = 'color-box';
		box.style.background = color;
		box.title = color;
		box.textContent = '';
		box.onclick = () => selectColorBox(idx);

		// Save color button visually integrated
		const saveColorBtn = document.createElement('button');
		saveColorBtn.className = 'save-color-btn';
		saveColorBtn.textContent = '💾';
		saveColorBtn.title = 'Save this color';
		saveColorBtn.onclick = (e) => {
			e.stopPropagation();
			saveIndividualColor(color);
		};

		// Place button in top-right of color box
		colorBoxWrapper.appendChild(box);
		colorBoxWrapper.appendChild(saveColorBtn);
		display.appendChild(colorBoxWrapper);
	});
}

// Highlight selected color box (for demonstration)
function selectColorBox(index) {
	const boxes = document.querySelectorAll('.color-box');
	boxes.forEach((box, i) => {
		box.classList.toggle('selected', i === index);
	});
}

// Save an individual color with a name
function saveIndividualColor(color) {
	let name = prompt('Enter a name for this color:', '');
	if (!name) return;
	savedColors.push({ name, color });
	renderSavedColors();
}

// Save the current palette with a name
function savePalette(name, colors) {
	if (!name || !colors || colors.length === 0) return;
	savedPalettes.push({ name, colors });
	renderSavedPalettes();
}

// Render all saved palettes
function renderSavedPalettes() {
	const container = document.getElementById('savedPalettes');
	container.innerHTML = '';
	savedPalettes.forEach(palette => {
		const paletteDiv = document.createElement('div');
		paletteDiv.className = 'saved-palette';

		const nameDiv = document.createElement('span');
		nameDiv.className = 'saved-palette-name';
		nameDiv.textContent = palette.name;

		const colorsDiv = document.createElement('div');
		colorsDiv.className = 'saved-palette-colors';
		palette.colors.forEach(color => {
			const colorDiv = document.createElement('div');
			colorDiv.className = 'saved-palette-color';
			colorDiv.style.background = color;
			colorDiv.title = color;
			colorsDiv.appendChild(colorDiv);
		});

		paletteDiv.appendChild(nameDiv);
		paletteDiv.appendChild(colorsDiv);
		container.appendChild(paletteDiv);
	});
}

// Render all saved individual colors
function renderSavedColors() {
	let colorSection = document.getElementById('savedColors');
	if (!colorSection) {
		// Create section if not present
		colorSection = document.createElement('div');
		colorSection.id = 'savedColors';
		colorSection.className = 'saved-colors';
		// Insert after saved palettes
		const savedPalettesDiv = document.getElementById('savedPalettes');
		savedPalettesDiv.parentNode.insertBefore(colorSection, savedPalettesDiv.nextSibling);
		// Add heading
		const heading = document.createElement('h2');
		heading.textContent = 'Saved Colors';
		colorSection.parentNode.insertBefore(heading, colorSection);
	}
	colorSection.innerHTML = '';
	savedColors.forEach(item => {
		const colorDiv = document.createElement('div');
		colorDiv.className = 'saved-palette';
		colorDiv.style.justifyContent = 'flex-start';

		const nameDiv = document.createElement('span');
		nameDiv.className = 'saved-palette-name';
		nameDiv.textContent = item.name;

		const colorBox = document.createElement('div');
		colorBox.className = 'saved-palette-color';
		colorBox.style.background = item.color;
		colorBox.title = item.color;

		colorDiv.appendChild(nameDiv);
		colorDiv.appendChild(colorBox);
		colorSection.appendChild(colorDiv);
	});
}

// Event handlers and initialization
let currentPalette = [];


document.getElementById('generateBtn').addEventListener('click', () => {
	let countInput = document.getElementById('colorCountInput').value;
	let count = parseInt(countInput);
	if (isNaN(count) || count < 1 || count > 20) {
		alert('Please enter a valid number of colors (1-20).');
		return;
	}
	currentPalette = generatePalette(count);
	renderPalette(currentPalette);
});

document.getElementById('saveBtn').addEventListener('click', () => {
	const name = document.getElementById('paletteName').value.trim();
	if (!name) {
		alert('Please enter a palette name.');
		return;
	}
	if (!currentPalette || currentPalette.length === 0) {
		alert('Generate a palette first.');
		return;
	}
	savePalette(name, currentPalette);
	document.getElementById('paletteName').value = '';
	document.getElementById('paletteDisplay').innerHTML = '';
	currentPalette = [];
});

// Initial render for saved palettes and colors (if any)
renderSavedPalettes();
renderSavedColors();

