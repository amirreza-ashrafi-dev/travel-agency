import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import Header from '@/components/header/header.component';
import { Box } from '@mui/material';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Box>
      <Header />
      <Component {...pageProps} />
    </Box>
  )
}
