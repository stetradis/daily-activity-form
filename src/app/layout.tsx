import './globals.css'

export const metadata = {
  title: 'Daily Activity',
  description: 'Legends Daily Activity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
