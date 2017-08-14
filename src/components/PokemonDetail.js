import React, { Component } from 'react';
import { Tab, Segment, Menu, Label, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const panes = /*(items) => */[
    { menuItem: <Button color='red'>Pokedex</Button>/*<Menu.Item key='pokedex' name='Pokedex' active inverted color='red' />*/, render: () => 
        <Tab.Pane>
            <Segment basic inverted color='red'>abc</Segment>
            <Segment basic >abc</Segment>
        </Tab.Pane>
    },
    { menuItem: <Menu.Item key='stats' inverted color='red'>Stats</Menu.Item>, render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: <Menu.Item key='revolution' inverted color='red'>Revolution</Menu.Item>, render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> }
];



export default class PokemonDetail extends Component {
    static propTypes = {
        evolData: PropTypes.object.isRequired
    };

    render() {
        return (
            <div>
                <Tab panes={panes} defaultActiveIndex={0} onTabChange={this.handleTabChange} />
            </div>
        );
    }
}