export interface IOnboard {
  color: string,
  title: string,
  body: string,
  image: string,
  bg: string,
}

export type PageDto<T> = {
  item_count: number,
  items: T[],
}
