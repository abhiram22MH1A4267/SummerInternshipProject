const signupBtn = document.getElementById("signup-btn");
const signinBtn = document.getElementById("signin-btn");
const mainContainer = document.querySelector(".container");
// alert(window.innerHeight);
signupBtn.addEventListener("click", () => {
    mainContainer.classList.toggle("change");
});
signinBtn.addEventListener("click", () => {
    mainContainer.classList.toggle("change");
});

function store(event){
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pw = document.getElementById('pw').value;
    var pw_c = document.getElementById('pw_c').value;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.length == 0){
        alert('Please fill in email');

    }else if(pw.length == 0){
        alert('Please fill in password');

    }else if(email.length == 0){
        alert('Please fill in email');

    }else if(pw_c.length == 0){
        alert('Please fill in password');

    }else if(name.length == 0 && pw.length == 0){
        alert('Please fill in email and password');

    }

    else if(!pw.match(numbers)){
        alert('In password please add 1 number');

    }else if(!pw_c.match(numbers)){
        alert('In password please add 1 number');

    }else if(pw != pw_c){
        alert('please enter same password');

    }else if(!pw.match(upperCaseLetters)){
        alert('In password please add 1 uppercase letter');

    }else if(!pw.match(lowerCaseLetters)){
        alert('In password please add 1 lovercase letter');

    }else{
        if(localStorage[name]!==null){
            if(localStorage[name]===pw){
                alert('Account Already Exist! Login ');
            }
            else{
                localStorage.setItem(name,pw);
            alert('Your account has been created');
            }
        }
    }
}

function check(event){
    event.preventDefault();
    var userName = document.getElementById('userName').value;
    var userPw = document.getElementById('userPw').value;

    if(localStorage[userName]!==null && localStorage[userName]===userPw){
        // alert('You are logged in.');
        location.href = "../../HomePage/RecipeFinder/home.html";
    }else{
        alert('Invalid user name or password');
    }
}
