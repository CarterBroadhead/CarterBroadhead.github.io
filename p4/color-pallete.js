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
