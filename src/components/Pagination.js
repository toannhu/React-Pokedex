import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Pagination extends Component {

    render() {
        const { items } = this.props;
        const Id = items.id;
        const prevId = (Id > 10) ? Id-10 : 1;
        const nextId = (Id < 500 && Id > 489) ? 499 : Id+10;
        let pagination = (Id > 496) ? [497,498,499] : [Id, Id+1, Id+2];
        return (
            <div style={{ textAlign: 'center', padding: '10px 0 10px 0' }} >
                <Menu tabular pagination borderless size='huge' style={{border: 'none'}}  >
                    <Menu.Item as='a' key="first" icon
                        name={1}
                        href={'/pokemon/1'}>
                        <Icon name='angle double left' />
                    </Menu.Item>
                    <Menu.Item as='a' key="second" icon
                        name={prevId}
                        href={`/pokemon/${prevId}`}>
                        <Icon name='angle left' />
                    </Menu.Item>
                    {
                        pagination.map(pageNumber => (
                            <Menu.Item as='a'
                                active={pageNumber === Id}
                                name={pageNumber}
                                href={`/pokemon/${pageNumber}`}
                            >{pageNumber}</Menu.Item>)
                        )
                    }
                    <Menu.Item as='a' key="second last" icon
                        name={nextId}
                        href={`/pokemon/${nextId}`}>
                        <Icon name='angle right' />
                    </Menu.Item>
                    <Menu.Item as='a' key="last" icon
                        name={499}
                        href={'/pokemon/499'}>
                        <Icon name='angle double right' />
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}


Pagination.propTypes = {
    items: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};

export default connect(mapStateToProps,null)(Pagination);

