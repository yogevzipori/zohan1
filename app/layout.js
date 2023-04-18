import './globals.css'
import Mainnavi from './mainnavi'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Mainnavi />
      <head />
      <body>{children}</body>
    </html>
  )
}
