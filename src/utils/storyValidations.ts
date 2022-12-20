import { IStoryDTO, IStoryValidation } from '../interfaces/IStory';
import { FieldsValidation } from '../interfaces/types';

type StoryFieldsValidation = FieldsValidation<IStoryDTO, IStoryValidation>;

const isValidHttpUrl = (string: string) => {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
};
// Source: https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url

const validateStoryFields: StoryFieldsValidation = (fields) => {
  const isTitleValid = fields.title.length >= 3 && fields.title.length <= 100;
  const isDescriptionValid = fields.description.length >= 3 && fields.description.length <= 510;
  const isPictureValid = isValidHttpUrl(fields.picture);

  const validations = {
    title: isTitleValid,
    description: fields.description === '' || isDescriptionValid,
    picture: fields.picture === '' || isPictureValid,
  };

  return [Object.values(validations).every(Boolean), validations];
};

export { validateStoryFields };
