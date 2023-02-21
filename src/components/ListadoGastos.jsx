import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setGastoEditar,
    eliminarGasto,
    gastosFiltrados,
    filtros }) => {
    return (
        <div className='lista-gasto contenedor'>
            {
                filtros ? (
                    <>
                        <h2>{gastosFiltrados.length ? 'Gastos' : 'Aún no hay gastos en esta categoria'}</h2>
                        {
                            gastosFiltrados.map(gasto => (
                                <Gasto
                                    setGastoEditar={setGastoEditar}
                                    key={gasto.id}
                                    gasto={gasto}
                                    eliminarGasto={eliminarGasto}
                                />
                            ))

                        }
                    </>


                ) : (
                    <>
                        <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
                        {
                            gastos.map(gasto => (
                                <Gasto
                                    setGastoEditar={setGastoEditar}
                                    key={gasto.id}
                                    gasto={gasto}
                                    eliminarGasto={eliminarGasto}
                                />
                            ))
                        }

                    </>

                )
            }

        </div>
    )
}

export default ListadoGastos