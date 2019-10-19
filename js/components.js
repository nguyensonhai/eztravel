const components = {};

components.mainPage = `<nav id="log-in">
<img src="images/main/close.svg" class="close-btn" id="close-menu-lg">
<div class="lg-lb">
    <img src="images/base/logo_eztravel.png" id="img-lg">
    <p>Log in</p>
</div>
<p>Email</p>
<input type="email" id="email-lg" type="text" placeholder="Type your email">
<p>Username</p>
<input id="user" type="text" placeholder="Type your username">
<p>Password</p>
<input type="password" id="password-lg" type="text" placeholder="Type your password">
<button id="open-signup">Don't have an account?</button>
<input id='comfirm-lg' type="submit" value="Confirm">
</nav>
<nav id="sign-up">
<img src="images/main/close.svg" class="close-btn" id="close-menu-su">
<div class="lg-lb">
    <img src="images/base/logo_eztravel.png" id="img-su">
    <p>Sign up</p>
</div>
<p>Full Name</p>
<input type="text" id="fullname-su" type="text" placeholder="Type your name">
<p>Email</p>
<input type="email" id="email-su" type="text" placeholder="Type your email">
<p>Username</p>
<input type='text' id="user" type="text" placeholder="Type your username">
<p>Password</p>
<input type="password" id="password-su" type="text" placeholder="Type your password">
<p>Re-Password</p>
<input type="password" id="repassword-su" type="text" placeholder="Re-Type your password">
<button id="open-login">Already has an account?</button>
<input id='comfirm-su' type="submit" value="Confirm">
</nav>
<nav id="about-us">
<img src="images/main/close.svg" class="close-btn" id="close-menu-au">
</nav>
<nav id="overlay">
<img src="images/main/close.svg" class="close-btn" id="close-menu">
<ul>
    <li>
        <a href="/index.html">Home</a>
    </li>
    <li>
        <button id="log-in-btn">Log in</button>
    </li>
    <li>
        <button id="sign-up-btn">Sign up</button>
    </li>
    <li>
        <button id="about-us-btn">About us</button>
    </li>
</ul>
</nav>
<header>
<a href="#" class="logo">Ez Travel</a>
<img src="images/main/menu.svg" class="menu-btn" id="open-menu">
</header>
<section>
<h1>Welcome to Ez Travel</h1>
</section>
`;