import React from 'react'
import withAuth from 'components/tabhoc.js'

function PageB() {
    return <div>PageA</div>
}
export default (withAuth('admin'))(PageB);