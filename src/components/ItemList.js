import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { itemsFetchData, evolDataFetchData } from '../actions/items';
import { Image, Segment } from 'semantic-ui-react';
import DimmerLoader from './DimmerLoader';
import NotFound from './NotFound';
import PokemonDetail from './PokemonDetail';

class ItemList extends Component {
    componentWillMount() {
        this.props.fetchData('https://pokeapi.co/api/v2/pokemon/2/');
        this.props.fetchEvolData('https://pokeapi.co/api/v2/pokemon-species/2/');
    }

    render() {
        if (this.props.hasErrored || this.props.evolDataHasErrored) {
            return <div><NotFound/></div>;
        }

        if (this.props.isLoading || this.props.evolDataIsLoading) {
            return <div><DimmerLoader /></div>;
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
                            <Segment.Group horizontal >
                                <Segment basic ><Image src={sprites['front_default']} size="medium" centered/></Segment>
                                <Segment basic >
                                    <PokemonDetail />
                                </Segment>
                            </Segment.Group>
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

const mapStateToProps = (state) => {
    return {
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
        fetchEvolData: (url) => dispatch(evolDataFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);