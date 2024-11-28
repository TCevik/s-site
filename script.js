// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!
// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!
// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!
// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!
// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!
// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!
// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!
// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!
// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!
// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!
// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!
// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!
// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!
// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!
// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!
// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!
// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!
// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!
// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!
// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!
// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!
// er is mij verteld dat er geen opmerkingen bij het script hoeven omdat dit geen onderdeel is van de opdracht!!!

document.addEventListener("DOMContentLoaded", function () {
	sideMenuNav();
});

window.addEventListener('load', function () {
	let loadCount = localStorage.getItem('loadCount') || 0;

	loadCount++;

	if (loadCount < 2) {
		let openButton = document.getElementById('openButton');

		if (openButton) {
			openButton.textContent = "Klik hier voor alle pagina's op de site.";
			openButton.style.maxWidth = '150px';
		}
	}

	localStorage.setItem('loadCount', loadCount);
});

var buttons = `
	<select style="width: 90%; margin-top: 10px;" id="theme-switch">
	    <option value="lightmode">Light Mode</option>
	    <option value="darkmode">Dark Mode</option>
		<option value="highcontrast">High Contrast</option>
	</select>

	<h3>Site Navigatie</h3>
    <button onclick="window.location.href='/s-site/'">Homepagina</button>
	<button onclick="window.location.href='/s-site/algemeen'">Algemene Informatie</button>
	<button onclick="window.location.href='/s-site/kleurmodellen'">Kleurmodellen</button>
    <button onclick="window.location.href='/s-site/binair-stelsel'">Binair Stelsel</button>
	<button onclick="window.location.href='/s-site/compressie'">Compressie</button>
	<button onclick="window.location.href='/s-site/bitmap-vectorafbeeldingen'">Bitmap- en vectorafbeeldingen</button>

    <p></p>
    <div class="hover-menu">
        <button disabled class="hover-btn">Computerarchitectuur - IN ONDERHOUD</button>
        <div class="dropdown-content">
            <button disabled onclick="window.location.href='/s-site/architectuur1'">Architectuur 1</button>
            <button disabled onclick="window.location.href='/s-site/architectuur2'">Architectuur 2</button>
            <button disabled onclick="window.location.href='/s-site/architectuur3'">Architectuur 3</button>
            </div>
    </div>
        
	<p></p>
	<button onclick="window.open('https://github.com/TCevik/s-site', '_blank')">Bekijk de broncode van de site</button>
`;

function sideMenuNav() {
	var sideBar = document.createElement("div");
	sideBar.id = "sidebar";
	sideBar.style.backgroundColor = "var(--background-color)";
	sideBar.style.color = "#fff";
	sideBar.style.borderRight = "1px solid var(--h1234-color)";
	sideBar.style.width = "0";
	sideBar.style.height = "100%";
	sideBar.style.position = "fixed";
	sideBar.style.top = "0";
	sideBar.style.left = "0px";
	sideBar.style.zIndex = "9999";
	sideBar.style.overflowX = "hidden";
	sideBar.style.transition = "0.5s";

	sideBar.innerHTML = buttons;

	var openButton = document.createElement("button");
	openButton.id = "openButton";
	openButton.textContent = ">";
	openButton.style.position = "fixed";
	openButton.style.left = "-5px";
	openButton.style.borderTopLeftRadius = "0px";
	openButton.style.borderBottomLeftRadius = "0px";
	openButton.style.paddingTop = "75px";
	openButton.style.userSelect = "none";
	openButton.style.paddingBottom = "75px";
	openButton.style.zIndex = "9998";
	openButton.style.minWidth = "35px";
	openButton.style.top = "50%";
	openButton.style.zIndex = "10000";
	openButton.style.transform = "translateY(-50%)";

	function adjustOpenButtonPosition() {
		if (sideBar.style.width === "300px") {
			openButton.style.left = "295px";
			openButton.textContent = "<";
		} else {
			openButton.style.left = "-5px";
			openButton.textContent = ">";
		}
	}

	openButton.addEventListener("click", function () {
		if (sideBar.style.width === "300px") {
			sideBar.style.width = "0";
			openButton.style.transition = "left 0.5s ease";
		} else {
			sideBar.style.width = "300px";
			openButton.style.transition = "left 0.5s ease";
		}
		adjustOpenButtonPosition();
	});

	document.addEventListener("click", function (event) {
		if (
			event.target !== openButton &&
			event.target !== sideBar &&
			!sideBar.contains(event.target)
		) {
			if (sideBar.style.width === "300px") {
				sideBar.style.width = "0";
				openButton.style.transition = "left 0.5s ease";
				adjustOpenButtonPosition();
			}
		}
	});

	openButton.addEventListener("transitionend", function () {
		openButton.style.transition = "";
	});

	document.body.appendChild(openButton);
	document.body.appendChild(sideBar);
}

// Functie om elementen één voor één te laten infaden
function fadeInElements() {
	const elements = document.querySelectorAll('.fade-in');
	elements.forEach((element, index) => {
		setTimeout(() => {
			element.classList.add('visible');
		}, index * 100); // De vertraging is 100ms per element
	});
}

window.addEventListener('load', fadeInElements);

document.addEventListener("DOMContentLoaded", function() {
	var footer = document.createElement("footer");
	footer.style.color = "white";
	footer.style.textAlign = "center";
	footer.style.padding = "20px";
	footer.style.bottom = "0";
	footer.style.width = "100%";

	var footerContent = document.createElement("p");
	footerContent.textContent = "Gemaakt door Tamer Çevik";
	footer.appendChild(footerContent);

	document.body.appendChild(footer);
});
