import ReactDOM from 'react-dom/client'
import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import App from './App.tsx'
import awsconfig from './aws-exports';
import  studioTheme  from './ui-components/studioTheme.js'
Amplify.configure(awsconfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
      <ThemeProvider theme={studioTheme}>
        <App />
      </ThemeProvider>
)
