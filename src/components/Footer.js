import React, { Component } from 'react';
import { Icon, Segment } from 'semantic-ui-react';

export default class Footer extends Component {
    render() {
        return (
            <Segment padded='very' textAlign='center'>
                <div style={{fontSize: '14px'}}>
                    <Icon color='red' name='copyright' size='large'/> 2017 Nhu Dinh Toan, BK University  
                </div>
                <div style={{fontSize: '14px'}}>
                    <a href='//fb.co/dinhtoan.nhu.9' target='_blank' rel='noopener'><Icon name='facebook square' size='large' link/></a>
                    <a href='//github.com/toannhu' target='_blank' rel='noopener'><Icon name='github' size='large' color = "black" link/></a>
                    <a href='toanbk21096@gmail.com' target='_blank' rel='noopener'><Icon name='mail' size='large' link/></a>
                </div>
            </Segment>
        );
    }
}
