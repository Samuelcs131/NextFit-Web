import { HttpStatus } from 'src/enums/error/HttpStatus.enum'
import { IErroProps } from '../types/erros.type'

interface IErros {
  [key: string]: IErroProps
}

export const ERRORS: IErros = {
  unauthorized: {
    error: 'Não autorizado',
    message:
      'Você está tentando acessar um recurso para o qual não tem permissão',
    statusCode: HttpStatus.UNAUTHORIZED,
  },
  unauthenticated: {
    error: 'Não autenticado',
    message: 'Os dados de autenticação estão incorretos',
    statusCode: HttpStatus.UNAUTHORIZED,
  },
  badRequest: {
    error: 'Requisição mal formada',
    message: 'A requisição não está de acordo com o formato esperado',
    statusCode: HttpStatus.BAD_REQUEST,
  },
  notFound: {
    error: 'Não encontrado',
    message: 'Você está tentando acessar um recurso que não existe na NextFit',
    statusCode: HttpStatus.NOT_FOUND,
  },
  notAcceptable: {
    error: 'Formato não aceito',
    message: 'O formato de dados especificado no cabeçalho não são suportados',
    statusCode: HttpStatus.NOT_ACCEPTABLE,
  },
  tooManyRequests: {
    error: 'Limite de requisições ultrapassado',
    message:
      'Você fez mais requisições do que o permitido em um determinado recurso',

    statusCode: HttpStatus.TOO_MANY_REQUESTS,
  },
  unprocessableEntity: {
    error: 'Entidade não processável',
    message: 'Entidade invalida ou já existente',
    statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
  },
  internalServerError: {
    error: 'Erro interno',
    message: 'Ocorreu um erro no servidor, tente novamente mais tarde',
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  },
  serviceUnavailable: {
    error: 'Serviço indisponível',
    message: 'A API da NextFit está temporariamente fora do ar',
    statusCode: HttpStatus.SERVICE_UNAVAILABLE,
  },
}
