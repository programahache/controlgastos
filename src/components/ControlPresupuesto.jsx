import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

function ControlPresupuesto({ setPresupuesto, presupuesto, gastos, setGastos, setIsValidPresupuesto }) {

  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0)

  const handleResetApp = () => {
    const resultado = confirm('¿Desea reiniciar presupuesto y gasto?')

    if (resultado) {
      setGastos([])
      setPresupuesto(0)
      setIsValidPresupuesto(false)
    }else{
      console.log("nada")
    }
  }

  useEffect(() => {

    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0
    );
    const totalDisponible = presupuesto - totalGastado;

    //Calcular porcentaje gastado 
    const NuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)


    setGastado(totalGastado)
    setDisponible(totalDisponible)
    setTimeout(() => {
      setPorcentaje(NuevoPorcentaje)
    }, 1500);
  }, [gastos])

  const FormatearMoneda = (cantidad) => {
    return cantidad.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
    });
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6'
          })}
          value={porcentaje}
          text={`${porcentaje}% Gastado`}></CircularProgressbar>
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app"
          type="button"
          onClick={handleResetApp}>
          Resetear App
        </button>
        <p>
          <span>Presupuesto: </span> {FormatearMoneda(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? 'negativo' : ''}`}>
          <span>Disponible: </span> {FormatearMoneda(disponible)}
        </p>
        <p>
          <span>Gastado: </span> {FormatearMoneda(gastado)}
        </p>
      </div>
    </div>
  );
}

export default ControlPresupuesto;
