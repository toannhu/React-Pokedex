import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { itemsFetchData, evolDataFetchData, itemsHasErrored } from '../actions/items';
import { Image, Segment } from 'semantic-ui-react';
import NotFound from './NotFound';
import DimmerLoader from './DimmerLoader';
import PokemonDetail from './PokemonDetail';
import Header from './Header';
import Pagination from './Pagination';

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('https://pokeapi.co/api/v2/pokemon/1');
        this.props.fetchEvolData('https://pokeapi.co/api/v2/pokemon-species/1/');
    }

    componentDidUpdate (prevProps) {
        let oldId = prevProps.Id;
        let newId = this.props.Id;
        if (isNaN(newId)) {
            if (newId === undefined) {
                newId = '1';
            }
            else {
                newId = this.props.items.id;
            }
            this.props.history.replace(process.env.PUBLIC_URL + '/pokemon/' + newId);
        }
        if (newId !== oldId) {        
            this.props.fetchData('https://pokeapi.co/api/v2/pokemon/' + newId);
            this.props.fetchEvolData('https://pokeapi.co/api/v2/pokemon-species/' + newId);
        }
        else if (newId === oldId && parseInt(newId) !== this.props.items.id) {
            this.props.fetchData('https://pokeapi.co/api/v2/pokemon/' + newId);
        }
        if (this.props.hasErrored || this.props.evolDataHasErrored) {
            this.props.history.push(process.env.PUBLIC_URL + '/not_found_404');
        }
    }

    render() {
        if (this.props.hasErrored || this.props.evolDataHasErrored) {
            return (
                <div>
                    <NotFound /> 
                </div>
            );
        }

        if (this.props.isLoading || this.props.evolDataIsLoading) {
            return <div><Header /><DimmerLoader /></div>;
        }

        const items = this.props.items;
        const evolData = this.props.evolData;
        const hasDataReceived = Object.keys(items).length > 0 && Object.keys(evolData).length > 0 ;
        let sprites;
        if (hasDataReceived) {
            sprites = items.sprites;
            Object.keys(sprites).map((key) => {     
                if (sprites[key] === null) 
                    delete sprites[key];
            });
        }
        
        return (
            <div>
                {(() => {
                    if (hasDataReceived) {
                        return (
                            <div>
                                <Header history={this.props.history}/>
                                <Segment.Group horizontal >
                                    <Segment basic size="large" padded='very' textAlign='center' style={{ margin: '50px 0 30px 0' }}>
                                        <Image src={sprites['front_default']} size="medium" verticalAlign='middle'/>
                                    </Segment>
                                    <Segment basic >
                                        <PokemonDetail items={this.props.items} evolData={this.props.evolData} />
                                    </Segment>
                                </Segment.Group>
                                <Pagination/>
                            </div>
                        );}
                    else 
                        return (<div/>);
                })()}
            </div>

        );
    }
}

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.object.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    evolData: PropTypes.object.isRequired,
    evolData_hasErrored: PropTypes.bool.isRequired,
    evolData_isLoading: PropTypes.bool.isRequired,
    fetchEvolData: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        Id: ownProps.match.params.Id,
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        evolData: state.evolData,
        evolData_hasErrored: state.evolData_hasErrored,
        evolData_isLoading: state.evolData_isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        fetchEvolData: (url) => dispatch(evolDataFetchData(url)),
        itemsHasErrored: (bool) => dispatch(itemsHasErrored(bool))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);