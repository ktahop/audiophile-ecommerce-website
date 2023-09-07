import '../styles/globals.css'

export const metadata = {
  title: 'audiophile',
  description: 'audiophile eCommerce Website',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
