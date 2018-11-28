export const check = (value, rules) => {
  let valid = true;

  

  if (rules.required) {
    valid = value.trim() !== '' && valid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    valid = pattern.test(value) && valid;
    
  }

  if (rules.minLength) {
    valid = value.length >= rules.minLength && valid;

  }

  if (rules.maxLength) {
    valid = value.length <= rules.maxLength && valid;
  }


  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    valid = pattern.test(value) && valid
  }
  return valid
}

export const rules = {
  adder: {
    category: {
      required: true,
    },
    value: {
      required: true,
      isNumeric: true
    },
    name: {
      required: true
    },
  },
  auth: {
    email: {
      required: true,
      isEmail: true
    },
    password: {
      required: true,
      maxLength: 16,
      minLength: 5
    },

  }
}