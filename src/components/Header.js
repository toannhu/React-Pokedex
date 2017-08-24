import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react';
import { itemsFetchData, evolDataFetchData } from '../actions/items';

const Header = (props) => {
    return (
        <Image fluid children={
            <header id="header" style={ { backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: 'url(\'https://s-media-cache-ak0.pinimg.com/originals/76/26/d7/7626d73942c01632c95e9691931166e0.jpg\')'} }>
                <div className="content container text-center">
                    <div style={{margin: '130px'}}>
                        <h1 style={{color: 'white', fontWeight: 'bolder', fontSize:'45', paddingBottom: '15px'}}>Search Your Pokemon!</h1>
                        <form onSubmit={evt => {
                            evt.preventDefault();
                            const value = isNaN(evt.target.pokeNum.value) ?
                                evt.target.pokeNum.value.toLowerCase()
                                : parseInt(evt.target.pokeNum.value);
                            const pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,./{}|\\":<>\?@()]/);
                            if (value.length === undefined && isNaN(value)) {
                                return;
                            }
                            else if (pattern.test(value.toString())) {
                                evt.target.pokeNum.value = '';
                                return;
                            }
                            else {
                                props.history.push(process.env.PUBLIC_URL + '/pokemon/' + value.toString());
                                props.fetchData('https://pokeapi.co/api/v2/pokemon/' + value.toString());
                                props.fetchEvolData('https://pokeapi.co/api/v2/pokemon-species/' + value.toString());
                                evt.target.pokeNum.value = '';
                            }
                        }
                        }>
                            <div className="form-group">
                                <input autoComplete="off" className="form-control input-lg" name="pokeNum" placeholder='Enter Pokemon Number or Name (E.g: "1" or "Bulbasaur")' />
                            </div>
                            <button type="submit" 
                                style={{backgroundColor: 'teal',
                                    border: '2px solid',
                                    borderRadius: '20px',
                                    color: 'white',
                                    padding: '15px 32px',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    fontSize: '21',
                                    marginTop: '15px',
                                }}>Search</button>
                        </form>
                    </div>
                </div>
            </header>}
        />
    );
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        fetchEvolData: (url) => dispatch(evolDataFetchData(url))
    };
};

export default connect(null, mapDispatchToProps)(Header);
