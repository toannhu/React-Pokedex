import React from 'react';
import { Image } from 'semantic-ui-react';

const NotFound = () => {
    return (
        <Image
            src='https://drive.google.com/file/d/0B7HBhw9HfkVNWWhhZUhiRHVSYzQ/view?usp=sharing'
            as='a' fluid
            href='/'
            centered
            size='huge'
        />
    );
};

export default NotFound;
