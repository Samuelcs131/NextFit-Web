// This is just an example,
// so you can safely delete all default props below

export default {
  form: {
    logIn: 'Entrar',
    email: 'Email',
    password: 'Senha',
    forgotPassword: 'Esqueceu a senha?'
  },
  formValidation: {
    email: 'Formato de email inválido',
    spacedPassword: 'Não pode conter espaços',
    minPassword: 'Deve conter no mínimo 8 caracteres',
    maxPassword: 'Deve conter no máximo 16 caracteres'
  },
  apiErrors: {
    unauthorized: {
      title: 'Não autenticado',
      description: 'Usuário e/ou senha inválidos'
    },
    internalServerError: {
      title: 'Erro interno',
      description: 'Ocorreu um erro no servidor, tente novamente mais tarde'
    },
    unexpectedError: {
      title: 'Erro inesperado',
      description: 'Contate o suporte e tente novamente mais tarde'
    },
    badRequest: {
      title: 'Erro de formulário',
      description: 'Preencha todos os campos, e valide a formatação'
    }
  },
  ui: {
    exit: 'Sair',
    dashboard: 'Dashboard',
    activities: 'Atividades',
    settings: 'Definições',
    profile: 'Perfil',
    colors: 'Cores',
    language: 'Linguagem'
  },
  colors: {
    blue: 'Azul',
    red: 'Vermelho',
    purple: 'Roxo',
    green: 'Verde',
    orange: 'Laranja'
  }
}
