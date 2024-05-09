import React from 'react'
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { Label, Text, Image, Menu, MenuItem, Divider ,View, MenuButton } from '@aws-amplify/ui-react';
import './Header.css'

const Header: React.FC<WithAuthenticatorProps & { setPopup: React.Dispatch<React.SetStateAction<number>> }> = ({ signOut, user, setPopup }) => {

  return (
        <div className='heading-top'>
            <Image  
                  width="82px"
                  src="/src/assets/logo.png" 
                  alt="Notethings logo">
            </Image>
          <Label color="white" htmlFor="hi">Hi <Text lineHeight="1.5em" as="span" fontSize="1.1em" isTruncated={true} variation="success">{user?.signInDetails?.loginId}</Text></Label>
           <View>
            <Menu 
              menuAlign="end" trigger={
              <MenuButton variation="link" size="large" width="90%">
                ≡
              </MenuButton>
              }>
              <MenuItem onClick={()=>setPopup(1)}>Create ToDoList</MenuItem>
              <MenuItem onClick={()=>setPopup(2)}>Create ToDo</MenuItem>
              <Divider />
              <MenuItem onClick={signOut}>Sign Out</MenuItem>
            </Menu>
          </View>
        </div>
  );
};

export default Header;