// This is just an example,
// so you can safely delete all default props below

export default {
  form: {
    logIn: 'LogIn',
    email: 'Email',
    password: 'Password',
    forgotPassword: 'Forgot password?'
  },
  formValidation: {
    email: 'Invalid email format',
    spacedPassword: 'Cannot contain spaces',
    minPassword: 'Must contain at least 8 characters',
    maxPassword: 'Must contain a maximum of 16 characters'
  },
  apiErrors: {
    unauthorized: {
      title: 'Unauthenticated',
      description: 'Invalid username and/or password'
    },
    internalServerError: {
      title: 'Internal error',
      description: 'A server error occurred, please try again later'
    },
    unexpectedError: {
      title: 'Unexpected error',
      description: 'Contact support and try again later'
    },
    badRequest: {
      title: 'Form error',
      description: 'Fill in all the fields, and validate the formatting'
    }
  },
  ui: {
    exit: 'Exit',
    dashboard: 'Dashboard',
    activities: 'Activities',
    settings: 'Settings',
    profile: 'Profile',
    colors: 'Colors',
    language: 'Language'
  },
  colors: {
    blue: 'Blue',
    red: 'Red',
    purple: 'Purple',
    green: 'Green',
    orange: 'Orange'
  }
}
