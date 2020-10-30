import React from 'react'
import withAuth from 'components/tabhoc.js'

function PageA() {
    return <div>PageA</div>
}
export default (withAuth('Admin'))(PageA);;