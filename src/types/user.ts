export interface User {
	id: string | null; // or number | null, depending on your actual ID type
	namefirst: string;
	namelast: string;
	email: string;
	tel: string;
	emailcodenumber: string;
	emailcodeexpiry: string | null; // or Date | null, or number | null
	sessiontoken: string;
	sessiontokenexpiry: string | null; // or Date | null, or number | null
	addressstreet: string;
	addresscity: string;
	addressstate: string;
	addresszip: string;
	// Add other properties that 'user' might have if they are part of User interface
}