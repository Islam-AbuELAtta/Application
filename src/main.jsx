
import { createRoot } from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import AuthContextProvider from './ContextApi/AuthContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';


const queryClient = new QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:false}}})

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
    <ReactQueryDevtools initialIsOpen={false} />
    <ToastContainer></ToastContainer>
      <App />
    </AuthContextProvider>
  </QueryClientProvider>

)
