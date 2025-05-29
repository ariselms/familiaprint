"use client";

import {
	Admin,
	Resource,
	ListGuesser,
	EditGuesser,
	BooleanField,
	Datagrid,
	DateField,
	List,
	TextField,
	BooleanInput,
	DateInput,
	Edit,
	SimpleForm,
	TextInput
} from "react-admin";
import customDataProvider from "@/react-admin/customDataProvider";

export default function ReactAdmin() {
	return (
		<Admin dataProvider={customDataProvider}>
			<Resource name="services" list={ServiceList} edit={ServiceEdit} />
			<Resource name="materials" list={MaterialList} edit={MaterialEdit} />
		</Admin>
	);
}

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
			<TextInput source="endescription" />
			<TextInput source="spdescription" />
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
      <TextInput source="endescription" />
      <TextInput source="spdescription" />
      <TextInput source="enname" />
      <TextInput source="spname" />
      <TextInput source="imgurl" />
      <BooleanInput source="reachcapacity" />
    </SimpleForm>
  </Edit>
);