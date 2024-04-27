import { Amplify } from 'aws-amplify';
import { Route, Routes } from "react-router-dom";
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator, Label, Button, Text, Image, Menu, MenuItem, Divider ,View, MenuButton } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css'
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

export function App({ signOut, user }: WithAuthenticatorProps) {
  return (
      <div className="App">
        <div className='heading-top'>
            <Image  
                  width="82px"
                  src="/src/assets/logo.png" 
                  alt="Notethings logo">
            </Image>
          <Label color="white" htmlFor="hi">Hi <Text  lineHeight="1.5em" as="span" fontSize="1.1em" isTruncated={true} variation="success">{user?.signInDetails?.loginId}</Text></Label>
          <View>
            <Menu menuAlign="end" trigger={
              <MenuButton variation="link" size="large" width="90%">
                ≡
              </MenuButton>
              }>
              <MenuItem>Create ToDoList</MenuItem>
              <MenuItem>Update ToDoList</MenuItem>
              <MenuItem>Create ToDo</MenuItem>
              <MenuItem>Update Todo</MenuItem>
              <Divider></Divider>
              <MenuItem onClick={signOut}>Sign Out</MenuItem>
            </Menu>
          </View>
        </div>
        <div className='container'>
          <div className='content'>
          </div>
        </div>
      </div>
  );
}

export default withAuthenticator(App);