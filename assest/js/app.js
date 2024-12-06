import { auth, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, getFirestore, db, doc, collection, setDoc, getDocs,  sendPasswordResetEmail } from "./fire-base.js";

let signUp = () => {
    let name = document.getElementById("user-name").value;
    let email = document.getElementById("user-email").value;
    let password = document.getElementById("user-password").value;
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let userData = {
        name,
        email,
    };
    console.log(userData);
    if (emailRegex.test(email) && passwordRegex.test(password)) {
        console.log("test");
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {

                const user = userCredential.user;
                console.log(user);

                localStorage.setItem('user', JSON.stringify({
                    uid: user.uid,
                    email: user.email,
                    name: user.name,

                }));
                alert("account created successfully")
                setTimeout(() => {
                    window.location.href = "/index.html"
                }, 3000);
                try {
                    await setDoc(doc(db, "users", user.uid), {
                        ...userData,
                        uID: user.uid
                    });
                    console.log("Document written with ID: ", user.uid);
                } catch (e) {
                    console.error("Error adding document: ", e);
                };
            })
            .catch((error) => {
                alert(error.code)
            });
    }
    else {
        alert("Invalid email or Password");
}
}

if (window.location.pathname == "/assest/sign-up.html") {
    let signUpBtn = document.getElementById("sign-up")
    signUpBtn.addEventListener("click", signUp)
}

// ______________________________________log-in___________________________________________________________________

let logIn = ()=>{

    const logEmail = document.getElementById("user-email").value;
    const logPassword = document.getElementById("user-password").value;

    // Validate email and password before sending request
    if (!logEmail || !logPassword) {
        alert("Please enter both email and password.");
        return;
    }

    signInWithEmailAndPassword(auth, logEmail, logPassword)
        .then(async (userCredential) => {
            const user = userCredential.user;
            console.log(user);
            localStorage.setItem('user', JSON.stringify({
                uid: user.uid,
                email: user.email,
            }))
            alert("SuccessFully Log In")
            setTimeout(() => {
                window.location.href = "/index.html"
            }, 3000);
        })
        .catch((error) => {
            console.error("Login Error:", error.code, error.message);
            alert("Login failed: " + error.message);
        });
}
 if (window.location.pathname == "/assest/log-in.html" ) {
    let logInBtn = document.getElementById("log-in")
    logInBtn.addEventListener("click", logIn)
 }



//  _______________________________________forget-password___________________________________________________________________________________

let forgetPassword = () => {
    const forEmail = document.getElementById("user-email").value;
    sendPasswordResetEmail(auth, forEmail)
        .then(() => {
            alert("Password reset email is send reset your password")
        })
        .catch((error) => {
            alert(error.code);
        })
};

if (window.location.pathname == "/assest/log-in.html") {
    let resetpass = document.querySelector("#forgetPass");
    resetpass.addEventListener("click", forgetPassword);
};