const validate = () => {
  let con = true;
  let name = document.form.name.value;
  let name_pattern = /^[A-Z/.]+$/;
  let result = name_pattern.test(name);
  if (!result) {
    alert("NAME MUST BE IN CAPS  AND DON'T INCLUDE SPACE");
    document.form.name.focus();
    con = false;
  }

  let username = document.form.username.value;
  let user_pattern = /^[a-z0-9_]{6,12}$/;
  let result1 = user_pattern.test(username);
  if (!result1 && con) {
    alert("User Name must be in lowercase and number and length must be greater than 6");
    document.form.username.focus();
    con = false;
  }

  let email = document.form.email.value;
  let email_pattern = /^[a-z]+([a-z0-9])*\@([a-z0-9])+\.([a-z]{2,4})$/;
  let result3 = email_pattern.test(email);
  if (!result3 && con) {
    alert("Email is not in proper format");
    document.form.email.focus();
    con = false;
  }

  let radio = document.form.gender;
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      break;
    }
  }
  if (i == radio.length && con) {
    alert("Please Select your gender");
    document.form.gender.focus();
    con = false;
  }

  let text = document.form.address;
  if (text.value.length == 0 && con) {
    alert("Enter your address");
    document.form.address.focus();
    con = false;
  }

  let select = document.form.city;
  if ((select.selectedIndex == "") & con) {
    alert("Select your city");
    document.form.city.focus();
    con = false;
  }
  
  let num = document.form.phone.value;
  let mobile_pattern = /^\d{10}$/;
  let result4 = mobile_pattern.test(num);
  if (!result4 && con) {
    alert("Mobile number must contain 10 digits");
    document.form.phone.focus();
    con = false;
  }

  let password = document.form.password.value;
  let password_pattern = /^[a-zA-Z0-9_]{8,}$/;
  let result2 = password_pattern.test(password);
  if (!result2 && con) {
    alert("Password Lenght must be greater than 8 and it should be aplhabet, number and '_'");
    document.form.password.focus();
    con = false;
  }

  let check = document.form.check;
  if (!check.checked && con) {
    alert("Please check the checkbox");
    con = false;
  }
  return con;
};
