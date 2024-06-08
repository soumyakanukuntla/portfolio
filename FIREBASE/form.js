const form = document.getElementById("myForm"); 

const firebaseConfig = {
    apiKey: "AIzaSyCvR-dB4fwMNt78vZlxT-UQr1LJNqVIJyE",
    authDomain: "formdata-b20e6.firebaseapp.com",
    projectId: "formdata-b20e6",
    storageBucket: "formdata-b20e6.appspot.com",
    messagingSenderId: "215617920415",
    appId: "1:215617920415:web:165124d4f15132e6bff1aa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const ref = database.ref("messages");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("Name").value;
    const email = document.getElementById("Email").value;
    const psw = document.getElementById("Password").value;
    const confmpss = document.getElementById("CnfPssd").value;

    ref.push({
        name: name,
        email: email,
        password: psw,
        confirm_password: confmpss
    }).then(() => {
        alert("Form is successfully submitted");
        form.reset();
    }).catch((error) => {
        console.error("Error submitting form:", error);
    });
});
