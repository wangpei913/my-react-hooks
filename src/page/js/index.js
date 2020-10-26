import React from 'react'
import { withRouter } from 'react-router-dom'
import renderRoutes from '../../route'

function JavaScript(props) {
    const { route: { routes } } = props
    return <div className='full-size'>{renderRoutes(routes)}</div>
}
export default (withRouter(JavaScript));