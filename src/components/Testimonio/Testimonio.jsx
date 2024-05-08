import styles from './testimonioDesing.module.scss';
import shawn from '../imagenes/Shawn-Wang.png';
import sarah from '../imagenes/Sarah-Chima.png';
import emma from '../imagenes/Emma-Bostian.png';

const arreglos = [
  {
    id: 1,
    img: shawn,
    nombre: 'Shawn Wang',
    pais: 'Singapur',
    cargo: 'Ingeniero de Software',
    empresa: 'Amazon',
    testimonio: '"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."'
  },
  {
    id: 2,
    img: sarah,
    nombre: 'Sarah Chima',
    pais: 'Nigeria',
    cargo: 'Ingeniera de Software',
    empresa: 'ChatDesk',
    testimonio: '"freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."'
  },
  {
    id: 3,
    img: emma,
    nombre: 'Emma Bostian',
    pais: 'Suecia',
    cargo: 'Ingeniera de Software',
    empresa: 'Spotify',
    testimonio: '"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."'
  }
];

const Testimonio = () => {
  return (
    <>
    {arreglos.map((testimonios) => (
      <section key="" className={styles.contenedor_main}>
        <img className={styles.imagen_testimonio} src={testimonios.img} alt="foto testimonio" />
        <div className={styles.contenedor_texto}>
            <p className={styles.nombre}><strong>{testimonios.nombre}</strong> en {testimonios.pais}</p>
            <p className={styles.cargo}>{testimonios.cargo} en <strong>{testimonios.empresa}</strong></p>
            <p className={styles.testimonio}>{testimonios.testimonio}</p>
        </div>
    </section>
    ) )}
    </>
  );
};

export default Testimonio;