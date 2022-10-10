export type Info = {
  count: number,
  pages: number,
  next?: string,
  prev?: string;
}

export type personajeparcial = {
  id: number,
  name: string,
  status: string,
  species: string,
  gender: string,
  image: string,
  url: string,
}

export interface ListaPesonaje {
  info: Info,
  results: Array<personajeparcial>
}
