import * as React from 'react'

import { GalleryObject } from '../types/galleryObject'

interface GalleryListProps {
    galleryArr?: Array<GalleryObject>
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
                            return <li key={i} style={{background: item.background}} >
                                    {item.name}
                                    {item.author}
                                </li>
                        })
                        :
                        'Изображений не найдено'
                }
            </ul>
        )
    }

}