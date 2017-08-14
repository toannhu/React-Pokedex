import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData, evolDataFetchData } from '../actions/items';

const Header = (props) => {
    return (
        <header id="header" style={ { height: '400px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: 'url(\'https://s-media-cache-ak0.pinimg.com/originals/76/26/d7/7626d73942c01632c95e9691931166e0.jpg\')'} }>
            <div className="content container text-center">
                <div style={{margin: '130px'}}>
                    <h1 style={{color: 'white', fontWeight: 'bolder'}}>Search Your Pokemon!</h1>
                    <form onSubmit={evt => {
                        evt.preventDefault();
                        const value = isNaN(evt.target.pokeNum.value) ?
                            evt.target.pokeNum.value.toLowerCase()
                            : evt.target.pokeNum.value;
                        props.fetchData('https://pokeapi.co/api/v2/pokemon/' + value);
                        props.fetchEvolData('https://pokeapi.co/api/v2/pokemon-species/' + value);
                        evt.target.pokeNum.value = '';
                    }
                    }>
                        <div className="form-group">
                            <input autoComplete="off" className="form-control input-lg" name="pokeNum" placeholder="Enter Pokemon Number (Ex: 5) " />
                        </div>
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </header>
    );
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        fetchEvolData: (url) => dispatch(evolDataFetchData(url))
    };
};

export default connect(null, mapDispatchToProps)(Header);
