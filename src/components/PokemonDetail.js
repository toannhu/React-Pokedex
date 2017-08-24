import React, { Component } from 'react';
import { Tab, Segment, Menu, Label, Divider, Grid, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const pokemonType = [

  { type: 'normal', text: 'Normal', color: '' },
  { type: 'fighting', text: 'Fighting', color: 'red' },
  { type: 'flying', text: 'Flying', color: '' },
  { type: 'poison', text: 'Poison', color: 'purple' },
  { type: 'ground', text: 'Ground', color: '' },
  { type: 'rock', text: 'Rock', color: '' },
  { type: 'bug', text: 'Bug', color: '' },
  { type: 'ghost', text: 'Ghost', color: '' },
  { type: 'steel', text: 'Steel', color: '' },
  { type: 'fire', text: 'Fire', color: 'orange' },
  { type: 'water', text: 'Water', color: 'blue' },
  { type: 'grass', text: 'Grass', color: 'green' },
  { type: 'electric', text: 'Electric', color: 'yellow' },
  { type: 'psychic', text: 'Psychic', color: '' },
  { type: 'ice', text: 'Ice', color: '' },
  { type: 'dragon', text: 'Dragon', color: '' },
  { type: 'dark', text: 'Dark', color: '' },
  { type: 'fairy', text: 'Fairy', color: '' },
  { type: '???', text: '???', color: '' }

];

const panes = (color, onTabClick, items, evolData) => { 
    console.log(items);
    console.log(evolData['flavor_text_entries'][1]['flavor_text']);
    let type = [];
    items.types.slice().sort((a,b) => {return a.slot - b.slot }).map((slot)=>{
       type.push(pokemonType.filter( typeName => typeName['type'] === slot.type.name ))
    });
    return (
        [
            { menuItem: <Menu.Item name='pokedex' onClick={onTabClick}><span style={{margin: '5px 10px 5px 10px'}}><font size="4" color={color[0]}>Pokedex</font></span></Menu.Item>, render: () => 
                <Tab.Pane>
                    <Segment basic size="large" style={{margin: '-15px 0 -15px 0'}} >                  
                        <Grid>
                            <Grid.Column floated='left'>
                                <Label content="ID" size='large' color='teal'/>
                            </Grid.Column>
                            <Grid.Column floated='right' width={10}>
                                {
                                    <p style={{fontWeight: 'bolder', fontSize: 'large', color: 'grey', marginTop: '4px'}}>{items.id}</p>
                                }
                            </Grid.Column>
                        </Grid>
                    </Segment>
                    <Divider />
                    <Segment basic size="large" style={{margin: '-15px 0 -15px 0'}} >                  
                        <Grid>
                            <Grid.Column floated='left'>
                                <Label content="Name" size='large' color='teal'/>
                            </Grid.Column>
                            <Grid.Column floated='right' width={10}>
                                {
                                    <p style={{fontWeight: 'bolder', fontSize: 'large', color: 'grey', marginTop: '4px'}}>{items.name.charAt(0).toUpperCase()+items.name.slice(1)}</p>
                                }
                            </Grid.Column>
                        </Grid>
                    </Segment>
                    <Divider />
                    <Segment basic size="large" style={{margin: '-15px 0 -15px 0'}}>
                        <Grid>
                            <Grid.Column floated='left'>
                                <Label content="Type" size='large' color='teal'/>
                            </Grid.Column>
                            <Grid.Column floated='right' width={10}>
                                {
                                    type.map(element => (
                                        <Label content={Object.values(element)[0]['text']} size='large' color={Object.values(element)[0]['color']}/>
                                    ))
                                }
                            </Grid.Column>
                        </Grid>
                    </Segment>
                    <Divider/>
                    <Segment basic size="large" style={{margin: '-15px 0 -15px 0'}} >
                        <Grid>
                            <Grid.Column floated='left'>
                                <Label content="Height" size='large' color='teal'/>
                            </Grid.Column>
                            <Grid.Column floated='right' width={10}>
                                {
                                    <p style={{fontWeight: 'bolder', fontSize: 'large', color: 'grey', marginTop: '4px'}}>{items.height/10} m</p>
                                }
                            </Grid.Column>
                        </Grid>
                    </Segment>
                    <Divider />
                    <Segment basic size="large" style={{margin: '-15px 0 -15px 0'}} >
                        <Grid>
                            <Grid.Column floated='left'>
                                <Label content="Weight" size='large' color='teal'/>
                            </Grid.Column>
                            <Grid.Column floated='right' width={10}>
                                {
                                    <p style={{fontWeight: 'bolder', fontSize: 'large', color: 'grey', marginTop: '4px'}}>{items.weight/10} kg</p>
                                }
                            </Grid.Column>
                        </Grid>
                    </Segment>
                    <Divider />
                    <Segment basic size="large" style={{margin: '-15px 0 -15px 0'}} >
                        <Grid>
                            <Grid.Column floated='left'>
                                <Label content="Base Exp" size='large' color='teal'/>
                            </Grid.Column>
                            <Grid.Column floated='right' width={10}>
                                {
                                    <p style={{fontWeight: 'bolder', fontSize: 'large', color: 'grey', marginTop: '4px'}}>{items['base_experience']}</p>
                                }
                            </Grid.Column>
                        </Grid>
                    </Segment>                 
                </Tab.Pane>
            },
            { menuItem: <Menu.Item name='stats' onClick={onTabClick}><span style={{padding: '5px 23px 5px 23px'}}><font size="4" color={color[1]}>Stats</font></span></Menu.Item>, render: () => 
                <Tab.Pane>
                    <Segment basic size="huge" style={{margin: '-7px 0 -7px 0'}} children={<Label content="Type" size='huge'/>}></Segment>
                    <Divider/>
                    <Segment basic size="huge" style={{margin: '-7px 0 -7px 0'}} children={<Label content="Type" size='huge'/>}></Segment>
                    <Divider />
                    <Segment basic size="huge" style={{margin: '-7px 0 -7px 0'}} children={<Label content="Type" size='huge'/>}></Segment>
                </Tab.Pane>
            },
            { menuItem: <Menu.Item name='stats' onClick={onTabClick}><span style={{padding: '5px 10px 5px 10px'}}><font size="4" color={color[1]}>Summary</font></span></Menu.Item>, render: () => 
                <Tab.Pane>
                    <Segment basic size="huge" style={{margin: '-7px 0 -7px 0'}} children={<Label content="Type" size='huge'/>}></Segment>
                    <Divider/>
                    <Segment basic size="huge" style={{margin: '-7px 0 -7px 0'}} children={<Label content="Type" size='huge'/>}></Segment>
                    <Divider />
                    <Segment basic size="huge" style={{margin: '-7px 0 -7px 0'}} children={<Label content="Type" size='huge'/>}></Segment>
                </Tab.Pane>
            },
            { menuItem: <Menu.Item name='revolution' onClick={onTabClick}><span style={{padding: '5px 23px 5px 23px'}}><font size="4" color={color[2]}>Shiny</font></span></Menu.Item>, render: () => 
                <Tab.Pane>
                   <Segment basic size="large" padded='very' textAlign='center' >                  
                        <Image src={items.sprites['front_shiny']} size="medium" verticalAlign='middle'/>
                    </Segment>
                </Tab.Pane>
            }
        ]
    )
}

export default class PokemonDetail extends Component {
    static propTypes = {
        items: PropTypes.object.isRequired,
        evolData: PropTypes.object.isRequired    
    };

    state = { index: 0 };

    handleOnTabClick = (e, data) => {
        this.setState({ index: data.index });
    }
    
    render() {
        let color = Array.apply(null, Array(3)).map(()=>'black');
        color[this.state.index] = 'red';
        return (
            <div>
                <Tab panes={panes(color, this.handleOnTabClick, this.props.items, this.props.evolData)} menu={{tabular:true, secondary: true, pointing: true, color: 'red'}} defaultActiveIndex={0} />
            </div>
        );
    }
}