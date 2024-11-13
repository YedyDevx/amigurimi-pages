"use client";
import Inicio from "./pages/inicio/page";
import Header from "./components/Header";
import { useState, useEffect } from 'react';
import Spinner from './components/Spinner';

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  return (
    <> 
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full min-h-screen bg-[#fcfcfc] "> 
          <Header />
          <Inicio />
        </div>
      )}
    </>
  );
}
