import React from 'react';
import { Image } from 'semantic-ui-react';

const NotFound = () => {
    return (
        <Image
            src='/not_found.jpg'
            as='a' fluid
            href='/'
            centered
        />
    );
};

export default NotFound;
