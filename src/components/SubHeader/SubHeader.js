import React from 'react';
import PropTypes from 'prop-types';
import './SubHeader.scss';

const SubHeader = (props) => {
    return (
        <div className='subheader'>
            <h2>{props.title}</h2>
        </div>
    );
};

SubHeader.defaultProps = {
    title: 'Title'
};

SubHeader.propTypes = {
    title: PropTypes.string
};

export default SubHeader;