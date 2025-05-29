"use client";
import Link from "next/link";
import {
	Admin,
	Resource,
	BooleanField,
	Datagrid,
	DateField,
	List,
	TextField,
	BooleanInput,
	DateInput,
	Edit,
	SimpleForm,
	TextInput,
	Menu,
	MenuItemLink,
	useResourceDefinitions,
  Layout
} from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';
import customDataProvider from "@/react-admin/customDataProvider";

export default function ReactAdmin() {
	return (
		<Admin dataProvider={customDataProvider} layout={CustomLayout}>
			<Resource name="services" list={ServiceList} edit={ServiceEdit} />
			<Resource name="materials" list={MaterialList} edit={MaterialEdit} />
		</Admin>
	);
}

const CustomLayout = (props: any) => <Layout {...props} menu={CustomMenu} />;

export const CustomMenu = (props: any) => {
  const resources = useResourceDefinitions();

	return (
		<Menu {...props}>
			{/* Standard resource links (optional, you can just list your resources here) */}
			{/* Your custom link to /profile */}
			<Link style={{padding: "6px 16px", color: "#ffffffb3"}} href="/profile">
				Profile
			</Link>
			{resources.services && (
				<MenuItemLink to="/services" primaryText="Services" />
			)}
			{resources.materials && (
				<MenuItemLink to="/materials" primaryText="Materials" />
			)}

			{/* Add more custom links or standard resources here */}
			{/* <MenuItemLink to="/custom-page" primaryText="Custom Page" leftIcon={<SomeOtherIcon />} /> */}
		</Menu>
	);
};

export const ServiceList = () => (
	<List>
		<Datagrid>
			<TextField source="endescription" />
			<TextField source="spdescription" />
			<TextField source="enname" />
			<TextField source="spname" />
			<DateField source="imgurl" />
			<BooleanField source="reachcapacity" />
			<TextField source="entitle" />
			<TextField source="sptitle" />
			<TextField source="ensummary" />
			<TextField source="spsummary" />
		</Datagrid>
	</List>
);

export const ServiceEdit = () => (
	<Edit>
		<SimpleForm>
			<RichTextInput source="endescription" />
			<RichTextInput source="spdescription" />
			<TextInput source="enname" />
			<TextInput source="spname" />
			<DateInput source="imgurl" />
			<BooleanInput source="reachcapacity" />
			<TextInput source="entitle" />
			<TextInput source="sptitle" />
			<TextInput source="ensummary" />
			<TextInput source="spsummary" />
		</SimpleForm>
	</Edit>
);

export const MaterialList = () => (
	<List>
		<Datagrid>
			<TextField source="endescription" />
			<TextField source="spdescription" />
			<TextField source="enname" />
			<TextField source="spname" />
			<TextField source="imgurl" />
			<BooleanField source="reachcapacity" />
		</Datagrid>
	</List>
);

export const MaterialEdit = () => (
	<Edit>
		<SimpleForm>
			<RichTextInput source="endescription" />
			<RichTextInput source="spdescription" />
			<TextInput source="enname" />
			<TextInput source="spname" />
			<TextInput source="imgurl" />
			<BooleanInput source="reachcapacity" />
		</SimpleForm>
	</Edit>
);
