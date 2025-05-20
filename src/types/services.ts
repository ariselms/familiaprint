export interface ServiceType {
	id: string;
	spname: string;
	enname: string;
	spdescription: string;
	endescription: string;
	reachcapacity: boolean;
	sptitle: string;
	entitle: string;
	spsummary: string;
	ensummary: string;
	imgurl?: string;
}

export type ServiceListType = ServiceType[];