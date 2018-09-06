import * as React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import { LINKS } from '../../constants/links'


interface MenuProps {
    link: string
}

export class Menu extends React.Component<MenuProps> {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <ul className="menu-list">
                <li className={classnames('btn', {active: this.props.link === LINKS.MAIN})}>
                    <Link to={LINKS.MAIN}>Главная</Link>
                </li>
                <li className={classnames('btn', {active: this.props.link === LINKS.NEWS})}>
                    <Link to={LINKS.NEWS}>Новости</Link>
                </li>
                <li className={classnames('btn', {active: this.props.link === LINKS.GALLERY})}>
                    <Link to={LINKS.GALLERY}>Галерея</Link>
                </li>
                <li className={classnames('btn', {active: this.props.link === LINKS.CONTACTS})}>
                    <Link to={LINKS.CONTACTS}>Контакты</Link>
                </li>
            </ul>
        )
    }
}

