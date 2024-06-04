const ValidationEmail = (email: string) => {
  const strongEmail: string =
    "^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$";

  let emailState: string = "bad";

  if (email.match(strongEmail)) {
    emailState = "good";
  } else emailState = "bad";
  return emailState;
};
export default ValidationEmail;
