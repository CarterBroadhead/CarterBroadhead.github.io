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
