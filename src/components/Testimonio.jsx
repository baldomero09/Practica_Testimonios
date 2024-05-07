import styles from './testimonioDesing.module.scss';

function Testimonio(props) {
  return (
    <section className={styles.contenedor_main}>
        <img className={styles.imagen_testimonio} src={props.img} alt="foto testimonio" />
        <div className={styles.contenedor_texto}>
            <p className={styles.nombre}><strong>{props.nombre}</strong> en {props.pais}</p>
            <p className={styles.cargo}>{props.cargo} en <strong>{props.empresa}</strong></p>
            <p className={styles.testimonio}>"{props.testimonio}"</p>
        </div>
    </section>
  )
}

export default Testimonio;