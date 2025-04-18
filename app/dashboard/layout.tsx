import { SignedIn } from '@clerk/nextjs'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SignedIn>
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    </SignedIn>
  )
}
