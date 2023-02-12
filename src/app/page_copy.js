// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       hello
//     </main>
//   )
// }
import React from 'react'

const Home = () => {
  return (
    <>
    hero banner
    <div>
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>
    </div>
    <div>
    {['Product 1', 'Product2'].map(
      (product)=> product
    )}
    
    </div>
    </>

  )
}

export default Home
