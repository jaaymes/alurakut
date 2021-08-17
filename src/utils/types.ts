export type comunidadeProps = {
  id: string;
  title: string;
  image: string;
}

export type Friend = {
  id: string;
  login: string;
  avatar_url: string;
  html_url: string;
}

export type HomeProps = {
  friends: Friend[];
};

export type FriendsProps = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export type ListObjectBox = {
  key: string;
  href: string;
  imageSrc: string;
  title: string;
}