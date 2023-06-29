import StyledComponentsRegistry from '@/lib/registry'
import './globals.css'
import { Inter } from 'next/font/google'
import Menu from './menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Today's exercise",
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Menu/>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
