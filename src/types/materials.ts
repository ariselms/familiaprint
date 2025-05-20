export interface MaterialsType {
  id: string;
  spname: string;
  enname: string;
  spdescription: string;
  endescription: string;
  reachcapacity: boolean
  imgurl?: string;
}

export type MaterialsListType = MaterialsType[];