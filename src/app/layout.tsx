import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tech Portfolio Builders Club | UW Madison',
  description: 'Building portfolios, building futures. Join the Tech Portfolio Builders Club at UW Madison to develop your technical skills and create impressive portfolio projects.',
  keywords: ['tech', 'portfolio', 'club', 'uw-madison', 'programming', 'web development', 'software engineering'],
  authors: [{ name: 'Tech Portfolio Builders Club' }],
  openGraph: {
    title: 'Tech Portfolio Builders Club | UW Madison',
    description: 'Building portfolios, building futures. Join us to develop your technical skills and create impressive portfolio projects.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            <Navigation />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
