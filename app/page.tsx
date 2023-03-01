'use client'

// import Link from 'next/link'
// import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <article>
        <section className={styles.caption}>
          {/* <Image
            className={styles.captionImage}
            src="/LtBlue_v3.png"
            alt="SSO"
            fill={true}
          /> */}
          <div className={styles.captionContent}>
            <h2 className={styles.captionTitle}>FDOE Single Sign-On</h2>
            <hr className={styles.captionSeparator} />
            <p>
              The Single Sign-On (SSO) Portal provides users within Florida’s
              educational community with a convenient way to log into multiple
              state resources with one account.
            </p>
            <a href="#" className="arrowLink">
              Select an option below to get started
            </a>
          </div>
        </section>
        <section>
          <div>
            {/* <Link>
              <Image></Image>
            </Link> */}
          </div>
          <div>
            {/* <Link>
              <Image></Image>
            </Link> */}
          </div>
        </section>
      </article>
    </main>
  )
}
