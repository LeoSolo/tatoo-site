import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RouterState } from 'react-router-redux'

import { StoreState } from '../reducers'
import { ApplicationState } from '../reducers/application'
import { setLoading, SetLoadingAction, ApplicationActions } from '../actions/application'

import { GALLERY_ARRAY } from '../constants/temp'
import { GalleryList } from '../components/GalleryList'

interface GalleryProps {
	application: ApplicationState
	routing: RouterState
	setLoading: (isLoading: boolean) => SetLoadingAction
}

export class Gallery extends React.Component<GalleryProps> {

	constructor(props) {
		super(props)

	}

	render() {
		return (
			<div>
				<GalleryList galleryArr={GALLERY_ARRAY} />
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

export const GalleryContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Gallery)
