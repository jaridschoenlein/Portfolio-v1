import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.flexarea}>
      
      <div className={styles.width}>
      
      <div className={styles.tbmargin}>
        <p>Jarid Schoenlein is a Front-End Developer
          passionate about building digital products that blend function
          with aesthetics. His work strives to bridge the gap between
          contemporary graphic design and code and he is interested
          in creating digital experiences that emphasize the strategic use
          of typography, animation and visual identity.
          </p>

          <p style={{ ["margin-top" as any]: "20px" }}>Full site under construction. Resume available upon request.</p>
      </div>

      <div className={styles.tbmargin}>

      <h3>SERVICES</h3>
        <p>Web Development  </p>
        <p>Product Design</p>
        <p>Animation</p>
        <p>Typography</p>
        <p>Brand Strategy</p>
      </div>

      <div className={styles.tbmargin}>

      <h3>CONTACT</h3>
      <p><a href="mailto:jrschoenlein@gmail.com.com">Email</a> &#8599;</p>
      <p><a href="https://www.linkedin.com/in/jarid-schoenlein-69089617b/">LinkedIn</a> &#8599;</p>
      <p><a href="https://github.com/jaridschoenlein">Github</a> &#8599;</p>
    </div>
    </div>
    </section>

    </main>
  )
}
