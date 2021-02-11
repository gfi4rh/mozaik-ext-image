import React, { Component } from 'react'


class Image extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { url } = this.props;
        console.log(url);

        return (
            <div>Image</div>
        );
    }
}

Image.displayName = 'Image';

export default Image;
