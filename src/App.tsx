import { Amplify } from 'aws-amplify';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator, ThemeProvider, Heading, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css'
import awsconfig from './aws-exports';
import { ToDoListCreateForm, ToDoListUpdateForm } from './ui-components';
import { myTheme } from './assets/theme';
Amplify.configure(awsconfig);

export function App({ signOut, user }: WithAuthenticatorProps) {
  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">
        <div className='heading-top'>
          <Heading level={4}>Hello {user?.signInDetails?.loginId}</Heading>
          <Button variation="link" size="small"
          onClick={signOut}>Sign out</Button>
        </div>
        <div className='container'>
          <div className='content'>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default withAuthenticator(App);