import React, { Component } from 'react'


class Image extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { image } = this.props;

        return (
            <img src={image}></img>
        );
    }
}

Image.displayName = 'Image';

export default Image;
