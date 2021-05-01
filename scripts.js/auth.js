const myModel = document.querySelectorAll(".modal");

// Signup
async function signup(e) {
  e.preventDefault();
  const email = document.querySelector("#signupEmail");
  const password = document.querySelector("#signupPassword");
  console.log(email.value, password.value);

  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value);
    console.log(result);
    await result.user.updateProfile({
      displayName: "User",
    });
    createUserCollection(result.user);
    // await result.user.sendEmailVerification();
    M.toast({ html: `Welcome ${result.user.email}`, classes: "green" });
  } catch (err) {
    console.log(err);
    M.toast({ html: err.message, classes: "red" });
  }
  email.value = "";
  password.value = "";
  M.Modal.getInstance(myModel[0]).close();
}

// Login
async function Login(e) {
  e.preventDefault();
  const email = document.querySelector("#loginEmail");
  const password = document.querySelector("#loginPassword");
  console.log(email.value, password.value);

  try {
    const result = await firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value);
    console.log(result);
    M.toast({ html: `Welcome ${result.user.email}`, classes: "green" });
  } catch (err) {
    console.log(err);
    M.toast({ html: err.message, classes: "red" });
  }
  email.value = "";
  password.value = "";
  M.Modal.getInstance(myModel[1]).close();
}

// LogOut
function logout() {
  firebase.auth().signOut();
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    // ...
  } else {
    console.log("signout success");
    M.toast({ html: "signout success", classes: "green" });
  }
});

// google auth
async function logInWithGoogle() {
  try {
    var provider = new firebase.auth.GoogleAuthProvider();

    const result = await firebase.auth().signInWithPopup(provider);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
