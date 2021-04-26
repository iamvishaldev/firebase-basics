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
}
