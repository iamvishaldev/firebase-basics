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
