import * as React from 'react'

import { Menu } from './Menu'

interface HeaderProps {
    title: string
}

export class Header extends React.Component<HeaderProps, {}> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="header-container">
                <div className="logo-container">
                    <div className="logo" />
                    <h2>Tatoo</h2>
                </div>

                <Menu title={this.props.title}/>

                <h2 className="page-title">{this.props.title}</h2>
            </section>
        )
    }
}