import * as React from 'react'
import { Link } from 'react-router-dom'

import { LINKS } from '../../constants/links'

export class Footer extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="footer">
                <Link to={LINKS.ADMIN}>Консоль администрирования</Link>
            </section>
        )
    }

}