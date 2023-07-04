import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Auth0Provider} from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider domain='dev-8zg23n3hta4o48tj.us.auth0.com' clientId='MNZaosiMYVog78EWO0noZpufr7g7IL7H' redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
