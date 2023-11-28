import React from 'react';

export const ImageWrapper = (props: {
    className?:string,
    alt:string,
    src:string,
    width?:string | number,
    height?:string | number,
    style:object
}) => {
    return <img {...props}/>;
}

export default ImageWrapper