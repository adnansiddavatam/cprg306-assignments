// Display a login button if the user is not logged in. If the user is logged in, display a welcome message, a logout button and a link to the shopping list page.

import React, { useEffect, useState } from 'react';
import { useUserAuth } from "./_utils/auth-context";

function YourComponent() {
  const [isClient, setIsClient] = useState(false);
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  useEffect(() => {
    setIsClient(true); // set client state to true when component mounts
    async function signIn() {
      await gitHubSignIn();
    }
    signIn();
  }, [gitHubSignIn]);

  if (!isClient) {
    return null; // render nothing on the server
  }

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
}

export default YourComponent;
