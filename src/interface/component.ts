export interface iComponent {
  template: string;
  createTemplate(): string;
}

export interface iMenuOptions {
  path: string;
  label: string;
}

export interface iSerie{
  length: void;
  id: number,
  name: string,
  creator: string,
  year: number,
  poster: string,
  watched: boolean,
  score: number,
  emmies: number,
}
