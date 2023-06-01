const validator = (data) => {
  let errors = {};

  if (!data.email) {
    errors.email = "Ingrese email";
  } else if (!data.email.includes("@")) {
    errors.email = "Ingrese un email válido";
  } else if (data.email.length > 35) {
    errors.email = "Menos de 35 caracteres";
  }

  if (!/^\d+$/.test(data.password)) {
    errors.password = "Al menos un número";
  } else if (data.password.length < 6 || data.password.length > 10) {
    errors.password = "Longitud incorrecta";
  }
  
  return errors;
};

export default validator;
