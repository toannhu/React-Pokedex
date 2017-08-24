import React, { Component } from 'react';
import { Icon, Segment } from 'semantic-ui-react';

export default class Footer extends Component {
    render() {
        return (
            <Segment.Group>
                <Segment padded='very' textAlign='center'>         
                    <div style={{fontSize: '14px'}}>
                        <Icon color='red' name='copyright' size='large'/> 2017 Nhu Dinh Toan, BK University  
                    </div>
                    <div style={{fontSize: '14px'}}>
                        <a href='https://www.facebook.com/dinhtoan.nhu.9' target='_blank' rel="noopener noreferrer"><Icon name='facebook square' size='large' link/></a>
                        <a href='https://github.com/toannhu' target='_blank' rel="noopener noreferrer"><Icon name='github' size='large' color = "black" link/></a>
                        <a href='https://www.linkedin.com/in/toannhu/' target='_blank' rel="noopener noreferrer"><Icon name='linkedin' size='large' link/></a>
                    </div>
                </Segment>
            </Segment.Group>
        );
    }
}