export type InfoContainerItem = {
  id: number;
  start: string;
  end: string;
  title: string;
  company: string;
  desc: string;
};

export type TabItem = {
  id: number;
  title: string;
  list: InfoContainerItem[];
};

export type SocialLink = {
  id: number;
  title: string;
  icon?: React.ReactNode;
  color?: string;
  to?: string;
};

export type Tech = {
  alt: string;
  src: string;
}