(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    let countDownDate = new Date().getTime() + (15 * day);

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        let remainingDays = Math.floor(distance / day);
        let remainingHours = Math.floor((distance % day) / hour);
        let remainingMinutes = Math.floor((distance % hour) / minute);
        let remainingSeconds = Math.floor((distance % minute) / second);

        document.getElementById("days").innerText = remainingDays < 10 ? "0" + remainingDays : remainingDays;
        document.getElementById("hours").innerText = remainingHours < 10 ? "0" + remainingHours : remainingHours;
        document.getElementById("minutes").innerText = remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes;
        document.getElementById("seconds").innerText = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

        if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
        }
    }, 0);
})();

var login = document.querySelector("#Login");
var register = document.querySelector("#Register");
var pageLogin = document.querySelector("#loginPage");
var pageRegister = document.querySelector("#registerPage");

login.addEventListener("click", function(){
    pageRegister.style.display = "none";
    pageLogin.style.display = "block";
});

register.addEventListener("click", function(){
    pageLogin.style.display = "none";
    pageRegister.style.display = "block";
});
