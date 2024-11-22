declare type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

declare type Menu = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare type PropsProduct = {
  image: string
  name: string
  recommendation: string
  price: number
  description: string
  id: number
}
