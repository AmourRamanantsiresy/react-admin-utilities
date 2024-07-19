import {
  Admin,
  BooleanField,
  Create,
  Datagrid,
  DataProvider,
  List,
  required,
  Resource,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from "react-admin";
import "./App.css";
import { postProvider } from "./providers";

export const PostList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <BooleanField source="body" />
    </Datagrid>
  </List>
);

export const PostShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <BooleanField source="body" />
    </SimpleShowLayout>
  </Show>
);

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" validate={[required()]} />
      <TextInput source="body" multiline={true} label="Short description" />
    </SimpleForm>
  </Create>
);

function App() {
  return (
    <Admin dataProvider={postProvider as unknown as DataProvider}>
      <Resource
        name="posts"
        list={PostList}
        show={PostShow}
        create={PostCreate}
      />
    </Admin>
  );
}

export default App;
