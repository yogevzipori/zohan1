import './globals.css'
import Mainnavi from './mainnavi'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
      <Mainnavi />
        {children}
        </body>
    </html>
  )
}
