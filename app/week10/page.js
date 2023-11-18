"use client";
import React from 'react';
import { useUserAuth } from "./_utils/auth-context"; // Ensure this path is correct.
import Link from 'next/link';

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
      <main style={{ width: '100%', minHeight: '100vh', padding: '20px', boxSizing: 'border-box', backgroundColor: '#f0f0f0' }}>
          <div className="container" style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', padding: '20px' }}>
              {!user ? (
                  <>
                      <h1 style={{ fontSize: '24px', marginBottom: '15px', color: '#333333' }}>Week 8: Firebase Auth</h1>
                      <div style={{ marginBottom: '15px' }}>
                          <p style={{ marginBottom: '15px', fontSize: '16px', color: '#333333' }}>Please log in to access your shopping list.</p>
                          <button 
                              onClick={gitHubSignIn} 
                              style={{ backgroundColor: '#555555', color: '#ffffff', padding: '10px 15px', cursor: 'pointer', border: 'none' }}
                          >
                              Login with GitHub
                          </button>
                      </div>
                  </>
              ) : (
                  <>
                      <p style={{ fontSize: '16px', color: '#333333' }}>Welcome, {user.displayName} ({user.email})</p>
                      <button 
                          onClick={firebaseSignOut} 
                          style={{ backgroundColor: '#555555', color: '#ffffff', padding: '10px 15px', cursor: 'pointer', border: 'none', marginTop: '15px' }}
                      >
                          Log Out
                      </button>
                      <div style={{ marginTop: '15px' }}>
                          <Link href="/week8/shopping-list">
                              <a style={{ backgroundColor: '#555555', color: '#ffffff', padding: '10px 15px', cursor: 'pointer', textDecoration: 'none' }}>
                                  Shopping List
                              </a>
                          </Link>
                      </div>
                  </>
              )}
          </div>
      </main>
  );
}

export default LandingPage;