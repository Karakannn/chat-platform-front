export type ConversationType = {
  id: string;
  name: string;
  lastMessage: string;
};

export type CreateUserParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type UserCredentials = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};
