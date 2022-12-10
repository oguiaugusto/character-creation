import axios, { AxiosError } from 'axios';
import { IUserDTO, IUserLogged } from '../interfaces/IUser';

const { REACT_APP_API_URL = 'http://localhost:3001' } = process.env;

const postUser = async (user: IUserDTO, endpoint: string) => {
  try {
    const response = await axios.post(`${REACT_APP_API_URL}${endpoint}`, user);
    const data = response.data as IUserLogged;

    return data;
  } catch (error) {
    const err = error as AxiosError;
    const errorData = {
      status: 500,
      message: 'Something went wrong. Please try again later.',
    };

    if (err.response?.data) {
      const { message } = err.response.data as { message: string | undefined };

      if (message) {
        errorData.status = err.response.status;
        errorData.message = message;
      }
    }

    return errorData;
  }
};

export default postUser;
