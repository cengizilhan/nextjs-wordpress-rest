import Image from 'next/image'
import Product from '@/app/components/products'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        This website has been built using the Next.js and Tailwind CSS frameworks. It connects to the Wordpress Rest API to fetch and display a list of pages.
    </main>
  )
}
