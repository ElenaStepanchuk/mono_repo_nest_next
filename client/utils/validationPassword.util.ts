const ValidationPassword = (pass: string) => {
  let currentColor2: string = "grey";
  let currentColor3: string = "grey";
  let currentColor: string = "grey";

  let currentMessage: string =
    "The password must contain between 6 and 10 characters, one number and one special character!";

  const strongPassword: string =
    "(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})";
  const mediumPassword: string =
    "((?=.*[a-zA-Z])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,})|(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))";
  const easyPassword: string =
    "((?=.*[a-zA-Z])(?=.{6,})|(?=.*[0-9])(?=.{6,})|(?=.*[^A-Za-z0-9])(?=.{6,}))";

  if (pass === "") {
    currentColor = "grey";
    currentColor2 = "grey";
    currentColor3 = "grey";
  } else if (pass.match(strongPassword)) {
    currentColor = "green";
    currentColor2 = "green";
    currentColor3 = "green";
    currentMessage = "Strong!";
  } else if (pass.match(mediumPassword)) {
    currentColor = "yellow";
    currentColor2 = "yellow";
    currentColor3 = "grey";
    currentMessage = "Medium!";
  } else if (pass.match(easyPassword)) {
    currentColor = "red";
    currentColor2 = "grey";
    currentColor3 = "grey";
    currentMessage = "Easy!";
  } else {
    currentColor = "red";
    currentColor2 = "red";
    currentColor3 = "red";
    currentMessage =
      "The password must contain between 6 and 10 characters, one number and one special character!";
  }
  return { currentColor, currentColor2, currentColor3, currentMessage };
};

export default ValidationPassword;
