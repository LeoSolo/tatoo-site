import * as React from 'react'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'

import {App, AppContainer} from './App'
import { NewsContainer } from './News'
import { GalleryContainer } from './Gallery'
import { ContactsContainer } from './Contacts'
import { AdminConsoleContainer } from './AdminConsole'

import { LINKS } from '../constants/links'

import { Header } from '../components/Header/Header'
import { RouterState } from 'react-router-redux'

import { StoreState } from "../reducers"
import { connect, Dispatch } from "react-redux"

interface RoutesProps {
    routing: RouterState
}

export class Routes extends React.Component<RoutesProps> {
    render() {

        return (
			<React.Fragment>
                <Header title={this.props.routing.location ? this.props.routing.location.pathname : ''} />

				<Switch>
					<Route
						exact={true}
						path={LINKS.MAIN}
						component={AppContainer}
					/>
                    <Route
                        exact={true}
                        path={LINKS.NEWS}
                        component={NewsContainer}
                    />
                    <Route
                        exact={true}
                        path={LINKS.GALLERY}
                        component={GalleryContainer}
                    />
                    <Route
                        exact={true}
                        path={LINKS.CONTACTS}
                        component={ContactsContainer}
                    />
                    <Route
                        exact={true}
                        path={LINKS.ADMIN}
                        component={AdminConsoleContainer}
                    />
				</Switch>
			</React.Fragment>
        )
    }
}

function mapStateToProps(state: StoreState) {
    return {
        routing: state.routing
    }
}

export const RoutesContainer = connect(
    mapStateToProps
)(Routes)
