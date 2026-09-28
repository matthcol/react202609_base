import styles from './Headers.module.css'

const Headers = () => {
  console.log('[Headers]')
  return (
    <>
      <section id={styles.headers}>
        Movies | Stars
      </section>
    </>
  )
}

export default Headers