import * as React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import { LINKS } from '../../constants/links'
import { BUTTONS } from '../../localization/buttons'
import { PAGE_TITLES } from '../../localization/pageTitles'

interface MenuProps {
    link: string
}

export class Menu extends React.Component<MenuProps> {

    constructor(props) {
        super(props)
    }

    render() {

        let isAdminConsoleActive = this.props.link === LINKS.ADMIN

        return (
            <ul className={classnames('menu-list', {withBack: isAdminConsoleActive})}>

                <li className={classnames('btn', {active: this.props.link === LINKS.MAIN})}>
                    <Link to={LINKS.MAIN}>{PAGE_TITLES.MAIN}</Link>
                </li>

                <li className={classnames('btn', {active: this.props.link === LINKS.NEWS})}>
                    <Link to={LINKS.NEWS}>{PAGE_TITLES.NEWS}</Link>
                </li>

                <li className={classnames('btn', {active: this.props.link === LINKS.GALLERY})}>
                    <Link to={LINKS.GALLERY}>{PAGE_TITLES.GALLERY}</Link>
                </li>

                <li className={classnames('btn', {active: this.props.link === LINKS.CONTACTS})}>
                    <Link to={LINKS.CONTACTS}>{PAGE_TITLES.CONTACTS}</Link>
                </li>

                {
                    isAdminConsoleActive &&
                    <li className="btn consoleQuit">
                        <Link to={LINKS.MAIN}>{BUTTONS.BACK}</Link>
                    </li>
                }

            </ul>
        )
    }
}

