import { Amplify } from 'aws-amplify';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator, Label, Button, Text, Image } from '@aws-amplify/ui-react';
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
          <Button variation="primary"
          onClick={signOut}>Sign out</Button>
        </div>
        <div className='container'>
          <div className='content'>
          </div>
        </div>
      </div>
  );
}

export default withAuthenticator(App);