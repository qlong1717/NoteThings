import React, { PropsWithChildren, useState } from 'react'
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { Label, Text, Image, Menu, MenuItem, Divider ,View, MenuButton } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './Header.css'
import '../../ui-components'

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
              <MenuItem onClick={()=>setPopup(2)}>Update ToDoList</MenuItem>
              <MenuItem onClick={()=>setPopup(3)}>Create ToDo</MenuItem>
              <MenuItem onClick={()=>setPopup(4)}>Update Todo</MenuItem>
              <Divider />
              <MenuItem onClick={signOut}>Sign Out</MenuItem>
            </Menu>
          </View>
        </div>
  );
};

export default Header;