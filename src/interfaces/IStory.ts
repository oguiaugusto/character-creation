export interface IStoryDTO {
  title: string;
  description: string;
  picture: string;
}

export interface IStory extends IStoryDTO {
  id: string;
  authorId: string;
}

export interface IStoryValidation {
  title: boolean;
  description: boolean;
  picture: boolean;
}
