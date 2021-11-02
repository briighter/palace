// Query for the toggle that is used to change between themes
toggle = document.querySelector('#themeToggle');

if (toggle) {
    // Listen for the toggle check/uncheck to toggle the dark class on the <body>
    toggle.addEventListener('ionChange', function (ev) {
        document.body.classList.toggle('dark', ev.detail.checked);
    });
}

console.log(toggle);

prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Listen for changes to the prefers-color-scheme media query
prefersDark.addListener((e) => checkToggle(e.matches));

// Called when the app loads
function loadApp() {
    checkToggle(prefersDark.matches);
}

// Called by the media query to check/uncheck the toggle
function checkToggle(shouldCheck) {
    toggle.checked = shouldCheck;
}
