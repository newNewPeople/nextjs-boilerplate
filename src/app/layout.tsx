import Web3ModalProvider from "../context/Web3Modal";
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Web3ModalProvider>{children}</Web3ModalProvider></body>
    </html>
  )
}
