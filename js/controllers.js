const controller = {};

const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

controller.validateSingUpInfo = (fullname, email, user, password, repassword) => {
    if(!fullname) {
        view.renderErrorMessage("fullname-error-message", "<h1>You must type your name!</h1>");
    } else {
        view.renderErrorMessage("fullname-error-message", "");
    }

    if(!email) {
        view.renderErrorMessage("email-error-message", "<h1>You must type your email!</h1>");
    } else if (!emailRegex.test(email)) {
        view.renderErrorMessage("email-error-message","Invalid Email Address");
    } else {
        view.renderErrorMessage("email-error-message", "");
    }

    if(!user) {
        view.renderErrorMessage("user-error-message", "<h1>You must type your username!</h1>");
    } else {
        view.renderErrorMessage("user-error-message", "");
    }

    if(!password) {
        view.renderErrorMessage("password-error-message", "<h1>You must type your password!</h1>");
    } else {
        view.renderErrorMessage("password-error-message", "");
    }

    if(!repassword) {
        view.renderErrorMessage("repassword-error-message", "<h1>You must re-type your password!</h1>");
    } else {
        view.renderErrorMessage("repassword-error-message", "");
    }
    if(password != repassword) {
        view.renderErrorMessage("password-error-message", "<h1>Two passwords do not match</h1>");
        view.renderErrorMessage("repassword-error-message", "<h1>Two passwords do not match</h1>");
    }
    if (fullname && emailRegex.test(email) && password && repassword === password){
        window.location.replace("/index.html");
    }   
};