export type Character = {
  id: number;
  name: string;
  episodesPlayIn: number;
  image: string;
}

export type ErrorType = {
  isError: boolean;
  message: string;
}