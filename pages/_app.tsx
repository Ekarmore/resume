import '../styles/globals.css'
import Layout from "../components/layout";
import type { AppProps } from 'next/app'
import {DM_Sans} from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const dm = DM_Sans({ weight:['400'],subsets: ['latin'] })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={dm.className}>
      <Component {...pageProps} />
    </main>
    ) 
    
}
