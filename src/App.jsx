import Styles from './appDesing.module.scss';
import Testimonio from './components/Testimonio';
import shawn from './components/imagenes/Shawn-Wang.png';
import sarah from './components/imagenes/Sarah-Chima.png';
import emma from './components/imagenes/Emma-Bostian.png';

function App() {
  const arreglo = [
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
  ]

  return (
    <section className={Styles.app}>
      <div className={Styles.contenedor_principal}>
        <h1>Esto es lo que dicen nuestros Alumnos de freecodecamp</h1>
        <article>
          {
            arreglo.map((arreglo) => {
              return <Testimonio key={arreglo.id} nombre={arreglo.nombre} pais={arreglo.pais} img={arreglo.img} cargo={arreglo.cargo} empresa={arreglo.empresa} testimonio={arreglo.testimonio} />
            })
          }
        </article>
      </div>
    </section>
  )
}

export default App
