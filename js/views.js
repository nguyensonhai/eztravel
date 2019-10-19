const views = {};
views.setActiveScreen = (screenName) => {
    const app = document.getElementById("app");
    switch (screenName) {
        case "mainPage":
            if (app) {
                app.innerHTML = components.mainPage;
            }
            const openMenu = document.getElementById('open-menu')
            const overlay = document.getElementById('overlay');
            const closeMenu = document.getElementById('close-menu');
            const closeMenuLg = document.getElementById('close-menu-lg');
            const closeMenuSu = document.getElementById('close-menu-su');
            const closeMenuAu = document.getElementById('close-menu-au');
            const signUp = document.getElementById('sign-up');
            const logIn = document.getElementById('log-in');
            const logInBtn = document.getElementById('log-in-btn');
            const signUpBtn = document.getElementById('sign-up-btn');
            const aboutUs = document.getElementById('about-us');
            const aboutUsBtn = document.getElementById('about-us-btn');

            if(openMenu) {
                openMenu.addEventListener('click', (event) => {
                overlay.classList.add('show-menu');
                });
            }
            if(closeMenu) {
                closeMenu.addEventListener('click', (event) => {
                overlay.classList.remove('show-menu');
                });
            }
            if(closeMenuLg) {
                closeMenuLg.addEventListener('click', (event) => {
                logIn.classList.remove('show-menu');
                });
            }
            if(closeMenuSu) {
                closeMenuSu.addEventListener('click', (event) => {
                signUp.classList.remove('show-menu');
                });
            }
            if(closeMenuAu) {
                closeMenuAu.addEventListener('click', (event) => {
                aboutUs.classList.remove('show-menu');
                });
            }
            if(logInBtn) {
                logInBtn.addEventListener('click', (event) => {
                    logIn.classList.add('show-menu');
                });
            }
            if(signUpBtn) {
                signUpBtn.addEventListener('click', (event) => {
                    signUp.classList.add('show-menu');
                });
            }
            if(aboutUsBtn) {
                aboutUsBtn.addEventListener('click', (event) => {
                    aboutUs.classList.add('show-menu');
                });
            }
            break;
    }
}
