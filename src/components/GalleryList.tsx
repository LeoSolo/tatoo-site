import * as React from 'react'

interface GalleryListProps {
    galleryArr?: Array<Object>
}

export class GalleryList extends React.Component<GalleryListProps> {

    constructor(props) {
        super ( props )
    }

    render() {

        return (
            <ul className="gallery-list-container">
                {
                    this.props.galleryArr ?
                        this.props.galleryArr.map((item, i) => {
                            return <li key={i} >123</li>
                        })
                        :
                        'Изображений не найдено'
                }
            </ul>
        )
    }

}