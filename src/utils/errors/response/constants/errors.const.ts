import { HttpStatus } from 'src/enums/error/HttpStatus.enum'
import { IErroProps } from '../types/erros.type'

interface IErros {
  [key: string]: IErroProps
}

export const ERRORS: IErros = {
  [HttpStatus.GENERIC]: {
    error: 'Algo deu errado',
    message: 'Não foi possível realizar a ação, contate o suporte',
    status: HttpStatus.GENERIC,
  },
  [HttpStatus.UNAUTHORIZED]: {
    error: 'Não autorizado',
    message:
      'Você está tentando acessar um recurso para o qual não tem permissão',
    status: HttpStatus.UNAUTHORIZED,
  },
  [HttpStatus.BAD_REQUEST]: {
    error: 'Requisição mal formada',
    message: 'A requisição não está de acordo com o formato esperado',
    status: HttpStatus.BAD_REQUEST,
  },
  [HttpStatus.NOT_FOUND]: {
    error: 'Não encontrado',
    message: 'Você está tentando acessar um recurso que não existe na NextFit',
    status: HttpStatus.NOT_FOUND,
  },
  [HttpStatus.NOT_ACCEPTABLE]: {
    error: 'Formato não aceito',
    message: 'O formato de dados especificado no cabeçalho não são suportados',
    status: HttpStatus.NOT_ACCEPTABLE,
  },
  [HttpStatus.TOO_MANY_REQUESTS]: {
    error: 'Limite de requisições ultrapassado',
    message:
      'Você fez mais requisições do que o permitido em um determinado recurso',

    status: HttpStatus.TOO_MANY_REQUESTS,
  },
  [HttpStatus.UNPROCESSABLE_ENTITY]: {
    error: 'Entidade não processável',
    message: 'Entidade invalida ou já existente',
    status: HttpStatus.UNPROCESSABLE_ENTITY,
  },
  [HttpStatus.INTERNAL_SERVER_ERROR]: {
    error: 'Erro interno',
    message: 'Ocorreu um erro no servidor, tente novamente mais tarde',
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  },
  [HttpStatus.SERVICE_UNAVAILABLE]: {
    error: 'Serviço indisponível',
    message: 'A API da NextFit está temporariamente fora do ar',
    status: HttpStatus.SERVICE_UNAVAILABLE,
  },
}
