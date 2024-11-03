export interface Event {
  id: string;
  title: string;
  date: string;
  type: string;
  description: string;
  theme: {
    primary: string;
    secondary: string;
  };
  coverImage: string;
}

export interface Gift {
  id: string;
  name: string;
  price: number;
  image: string;
  store: string;
  url: string;
  reserved: boolean;
  contributors: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}