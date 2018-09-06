import * as React from 'react'

export interface HeaderProps {
    title?: string
}

export class Header extends React.Component<HeaderProps, {}> {
    render() {
        return (
            <div className="header-container">
                <h1 className="page-title">{this.props.title ? this.props.title : 'Главная'}</h1>
            </div>
        )
    }
}