import React from 'react'
import renderRoutes from '../../route';

function Dashboard(props) {
    const { route: { routes } } = props
    return <div>{renderRoutes(routes)}</div>
}
export default Dashboard