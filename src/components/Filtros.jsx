import { useState, useEffect } from 'react'

function Filtros({ filtros, setFiltros }) {
    return (
        <div className='filtros sombra contenedor'>
            <form action="">
                <div className='campo'>
                    <label>Filtros gastos</label>
                    <select
                        value={filtros}
                        onChange={e => setFiltros(e.target.value)}
                    >
                        <option value="">--Todas las categorias--</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
            </form>

        </div>
    )
}

export default Filtros