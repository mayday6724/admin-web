export default function Validation(values) {
  let error = {};
  const phone_pattern = /^09\d{2}[-]?\d{3}[-]?\d{3}$/;
  const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const email_pattern = /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;

  if (values.name === "") {
    error.name = "姓名欄位不可空白";
  } else {
    error.name = "";
  }

  if (values.email === "") {
    error.email = "Email欄位不可空白";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email格式有誤";
  } else {
    error.email = "";
  }

  if (values.phone === "") {
    error.phone = "手機號碼欄位不可空白";
  } else if (!phone_pattern.test(values.phone)) {
    error.phone = "手機號碼格式有誤";
  } else {
    error.phone = "";
  }

  if (values.password === "") {
    error.password = "密碼欄位不可空白";
  } else if (!password_pattern.test(values.password)) {
    error.password = "密碼需要包含英文及數字，且共8位以上";
  } else {
    error.password = "";
  }

  return error;
}
