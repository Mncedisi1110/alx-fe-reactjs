import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
  import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
  import PostsComponent from './components/PostsComponent';

  const queryClient = new QueryClient();

  function App() {
    return (
      <>
      <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
      <button onClick={() => {
        window.location.reload();
      }}>Reload</button>
      </>
    
    );
  }

  export default App;
