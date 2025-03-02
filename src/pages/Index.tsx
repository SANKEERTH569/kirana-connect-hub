
import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import PhoneAuth from '@/components/authentication/PhoneAuth';
import HomeContent from '@/components/home/HomeContent';
import PageTransition from '@/components/common/PageTransition';
import { usePageTransition } from '@/utils/animation';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const isPageLoading = usePageTransition();
  const hotelId = "HTL1234";
  
  const handleSuccessfulAuth = () => {
    console.log("Authentication successful, setting isAuthenticated to true");
    setIsAuthenticated(true);
    
    // For demo purposes, set registered status after 2 seconds
    setTimeout(() => {
      console.log("Setting isRegistered to true after timeout");
      setIsRegistered(true);
    }, 2000);
  };

  useEffect(() => {
    console.log("Current state - isAuthenticated:", isAuthenticated, "isRegistered:", isRegistered);
  }, [isAuthenticated, isRegistered]);

  // For development purposes - comment out if you want to use the authentication flow
  useEffect(() => {
    // Force authenticated state to see content
    setIsAuthenticated(true);
    // Optionally also set registered to see that content
    // setIsRegistered(true);
  }, []);

  if (isPageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin-slow h-12 w-12 rounded-full border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-lg mx-auto px-4 py-6 flex flex-col">
      {isAuthenticated ? (
        <>
          <Header hotelId={hotelId} />
          <div className="flex-1 mt-6">
            <HomeContent isRegistered={isRegistered} />
          </div>
          <div className="mt-auto py-4">
            <Navigation className="max-w-xs mx-auto" />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-kirana-purple to-kirana-light-purple opacity-20 blur-xl"></div>
                <div className="relative">
                  <div className="rounded-full bg-white p-4 shadow-soft">
                    <div className="bg-gradient-to-br from-primary to-kirana-purple rounded-full h-20 w-20 flex items-center justify-center">
                      <span className="text-white font-bold text-4xl">K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-kirana-purple bg-clip-text text-transparent">
              My Kirana
            </h1>
            <p className="text-muted-foreground mb-8">
              Simplifying daily grocery deliveries
            </p>
          </div>
          
          <PhoneAuth onSuccess={handleSuccessfulAuth} />
        </div>
      )}
    </div>
  );
};

export default Index;
