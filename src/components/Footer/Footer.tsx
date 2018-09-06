import * as React from 'react'
import { Link } from 'react-router-dom'

import { LINKS } from '../../constants/links'
import { PAGE_TITLES } from '../../localization/pageTitles'

interface FooterProps {
    isConsoleActive?: boolean
}

export class Footer extends React.Component<FooterProps> {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <section className="footer">
                {
                    !this.props.isConsoleActive &&
                    <div className="btn">
                        <Link to={LINKS.ADMIN}>{PAGE_TITLES.ADMIN}</Link>
                    </div>
                }
            </section>
        )

    }

}