export type Info = {
  count: number,
  pages: number,
  next?: string,
  prev?: string,
}

export type Locacionesparciales = {
  id: number,
  name: string,
  type: string,
  dimension: string,
  residents: string
}

export interface Listalugares {
  info: Info,
  results: Array<Locacionesparciales>
}
