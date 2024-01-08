import type { Data } from './types'

export const data: Data = {
  links: {
    navbar: [
      {
        name: 'Início',
        path: '#inicio',
        target: '_self'
      },
      {
        name: 'Sobre',
        path: '#sobre',
        target: '_self'
      }
    ],
    footer: [
      {
        name: 'Regulamento',
        path: 'https://www.google.com.br',
        target: '_blank'
      },
      {
        name: 'Termos de Uso',
        path: 'https://www.google.com.br',
        target: '_blank'
      },
      {
        name: 'Política de Privacidade',
        path: 'https://www.google.com.br',
        target: '_blank'
      }
    ]
  }
}
