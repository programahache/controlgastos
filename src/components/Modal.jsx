import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";
import CerrarBtn from "../img/cerrar.svg";


function Modal({ setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar }) {



  const [mensaje, setMensaje] = useState("");

  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {

      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setId(gastoEditar.id)
      setFecha(gastoEditar.fecha)

    }
  }, [])

  const ocultarModal = () => {
    setAnimarModal(false);
    setGastoEditar({})
    setTimeout(() => {
      setModal(false);
    }, 500);
  };



  const handlerSubmit = e => {
    e.preventDefault();

    if ([nombre, categoria, cantidad].includes("")) {
      setMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setMensaje("")
      }, 3000);
      return
    }

    guardarGasto({ nombre, cantidad, categoria, id,fecha })

  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="CerrarBtn" onClick={ocultarModal} />
      </div>
      <form
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        onSubmit={handlerSubmit}
      >
        <legend>{gastoEditar.nombre ? 'Editar gasto' : 'Nuevo Gasto'}</legend>

        <div>
          {mensaje && (
            <Mensaje tipo={"error"}>{mensaje}</Mensaje>
          )}
        </div>

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            placeholder="Añade el nombre del gasto"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="text"
            placeholder="Añade la cantidad del gasto: ej. 3000"
            id="cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Categoria</label>
          <select id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">--Seleccione--</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
          <div>
            <input type="submit" value={gastoEditar.nombre ? 'Editar gasto' : 'Añadir Gasto'} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Modal;
