import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default 
class StockTag extends React.PureComponent {
    static propTypes = {
        typeStock: PropTypes.string,
        valueStock: PropTypes.string,
        typeChange: PropTypes.string,
    };

    render () {
        const { typeStock, valueStock, typeChange, ...other } = this.props;

        return (
            <NavLink className='column-link column-link--transparent' to='#' data-preview-title-id='column.home' data-preview-icon='home' >
                <div className="stock-tag">
                    {typeStock}<span className={typeChange=='down'?'text-danger':'text-success'}> {valueStock}</span>
                </div>
            </NavLink>
        );
    }
}
