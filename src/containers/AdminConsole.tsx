import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RouterState } from 'react-router-redux'

import { StoreState } from '../reducers'
import { ApplicationState } from '../reducers/application'
import { setLoading, SetLoadingAction, ApplicationActions } from '../actions/application'

interface AdminConsoleProps {
    application: ApplicationState
    routing: RouterState
    setLoading: (isLoading: boolean) => SetLoadingAction
}

export class AdminConsole extends React.Component<AdminConsoleProps, {}> {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <div className="devText">Page in development...</div>
            </div>
        )
    }
}

function mapStateToProps(state: StoreState) {
    return {
        application: state.application,
        routing: state.routing
    }
}

function mapDispatchToProps(dispatch: Dispatch<ApplicationActions>) {
    return bindActionCreators(
        {
            setLoading
        },
        dispatch
    )
}

export const AdminConsoleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminConsole)
