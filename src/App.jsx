import Styles from './appDesing.module.scss';
import Testimonio from './components/Testimonio/Testimonio';

const App = () => {
  return (
    <section className={Styles.app}>
      <div className={Styles.contenedor_principal}>
        <h1>Esto es lo que dicen nuestros Alumnos de freecodecamp</h1>
          <Testimonio/>
      </div>
    </section>
  );
};

export default App;