import { Amplify } from 'aws-amplify';
import { Route, Routes } from "react-router-dom";
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css'
import awsconfig from './aws-exports';
import Header from './component/Header/Header';
import { ToDoCreateForm, ToDoListCreateForm, ToDoListUpdateForm, ToDoUpdateForm } from './ui-components';
import { useState } from 'react';
Amplify.configure(awsconfig);

const popupForms = {
    1: ToDoListCreateForm,
    2: ToDoListUpdateForm,
    3: ToDoCreateForm,
    4: ToDoUpdateForm,
  };

export function App({ signOut, user }: WithAuthenticatorProps) {
    const [popup,setPopup] = useState(0)
    console.log(popup);
  return (
    <>
    <Header user={user} signOut={signOut} setPopup={setPopup}></Header>
        <div className='container'>
            {popup > 0 && popupForms[popup] && <popupForms[popup] />}
        </div>
    </>
  );
}

export default withAuthenticator(App);