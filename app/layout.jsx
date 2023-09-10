import '../styles/globals.css'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'audiophile',
  description: 'audiophile eCommerce Website',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
