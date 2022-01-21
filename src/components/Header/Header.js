import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = (props) => {
    return (
        <div className='header'>
            <h1>{props.title}</h1>
        </div>
    );
};

Header.defaultProps = {
    title: 'Title'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;