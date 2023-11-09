import { Inter } from 'next/font/google'
import DashboardLayout from '@/Components/DashboardLayout'
import "../../styles/dashboardLayout.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hearing Aid App',
  description: 'Generated by create next app',
}

export default function RootLayout(children) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardLayout>{children}</DashboardLayout>
        </body>
    </html>
  )
}