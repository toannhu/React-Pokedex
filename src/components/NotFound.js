import React from 'react';
import { Image } from 'semantic-ui-react';

const NotFound = () => {
    return (
        <Image
            src="https://learn.getgrav.org/user/pages/11.troubleshooting/01.page-not-found/error-404.png" alt="hi" class="inline"
            as='a' 
            href='/'
            centered
            fluid
        />
    );
};

export default NotFound;
