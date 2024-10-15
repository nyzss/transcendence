export const activateDarkMode = (toggle?: HTMLButtonElement) => {
	const html = document.querySelector("html");

	html.setAttribute("data-bs-theme", isDarkMode() ? "dark" : "light");
	if (toggle) toggle.textContent = isDarkMode() ? "🌙" : "☀️";
};

export const isDarkMode = () => {
	const mode = localStorage.getItem("theme");
	return mode === "dark" ? true : false;
};

export const toggleDarkMode = (toggle?: HTMLButtonElement) => {
	localStorage.setItem("theme", isDarkMode() ? "light" : "dark");

	activateDarkMode(toggle);
};
