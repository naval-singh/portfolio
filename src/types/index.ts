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
