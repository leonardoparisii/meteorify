import '../styles/globals.css';
import Navigation from '../components/shared/Navigation'
import Image from 'next/image';

export const metadata = {
  title: 'Wheater-App Project',
  description: 'Wheater-App project created in order to improve my skills and working with Next',
  creator: 'Leonardo Parisi',
  author: 'Leonardo Parisi',
  viewport: {
    width: 'device-width',
    initialScale: 1
},  
}   

    export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <div className='backdrop-blur-sm absolute bg-black/60 top-0 right-0 left-0 bottom-0 -z-10'/>
        <Image
            src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80'
            fill
            className='object-cover -z-20 select-none'
            alt='bg'
        />
            <Navigation />
            <div className='px-8 lg:px-32 pt-4 lg:py-28'>
                {children}
            </div>
        </body>
    </html>
  )
}
        