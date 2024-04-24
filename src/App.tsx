import { Amplify } from 'aws-amplify';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsconfig from './aws-exports';
import { ToDoListCreateForm } from './ui-components';
Amplify.configure(awsconfig);

export function App({ signOut, user }: WithAuthenticatorProps) {
  console.log(user)
  return (
    <>
      <div className='App'>
        <h1>Hello {user?.signInDetails?.loginId}</h1>
        <button onClick={signOut}>Sign out</button>
      </div>
      <div className='container1'>
        <div className='content1'>
          <ToDoListCreateForm></ToDoListCreateForm>
        </div>
      </div>
    </>
  );
}

export default withAuthenticator(App);