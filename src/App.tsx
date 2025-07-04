import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './Router';
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster
          position='top-right'
          toastOptions={{
            style: {
              fontFamily: 'Pretendard-Medium',
              fontSize: 14
            }
          }}
        />
      </QueryClientProvider>
    </>
  )
}

export default App
