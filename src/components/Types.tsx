export interface topBarLinkTypes {
  name: string;
  link: string;
  subMenu?: { name: string; link: string; routes: string[] }[];
  routes:string[]
}
