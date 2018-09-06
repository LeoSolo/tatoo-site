import * as React from 'react'

import { Menu } from './Menu'

import { LINKS } from '../../constants/links'
import { PAGE_TITLES } from '../../localization/pageTitles'

interface HeaderProps {
    title: string
}

export class Header extends React.Component<HeaderProps, {}> {

    constructor(props) {
        super(props)
    }

    render() {

        let title
        switch (this.props.title) {
            case LINKS.MAIN:
                title = PAGE_TITLES.MAIN
                break
            case LINKS.NEWS:
                title = PAGE_TITLES.NEWS
                break
            case LINKS.GALLERY:
                title = PAGE_TITLES.GALLERY
                break
            case LINKS.CONTACTS:
                title = PAGE_TITLES.CONTACTS
                break
            case LINKS.ADMIN:
                title = PAGE_TITLES.ADMIN
                break
        }


        return (
            <section className="header-container">
                <div className="logo-container">
                    <div className="logo" />
                    <h2>Tatoo</h2>
                </div>

                <Menu link={this.props.title}/>

                <h2 className="page-title">{title}</h2>
            </section>
        )
    }
}