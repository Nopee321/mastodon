import React from 'react';
import StockTag from './stock_tag';
import { NavLink, withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Icon from 'mastodon/components/icon';

export default 
class StockScrollNavigation extends React.PureComponent {
    constructor(props) {
        super(props);

        let stock = [
            {typeStock: 'DOW', valueStock: '1.25%', typeChange: 'up'},
            {typeStock: 'DOW', valueStock: '1.25%', typeChange: 'down'},
            {typeStock: 'DOW', valueStock: '1.25%', typeChange: 'up'},
            {typeStock: 'DOW', valueStock: '1.25%', typeChange: 'down'},
            {typeStock: 'DOW', valueStock: '1.25%', typeChange: 'up'},
            {typeStock: 'DOW', valueStock: '1.25%', typeChange: 'down'},
            {typeStock: 'DOW', valueStock: '1.25%', typeChange: 'up'},
            {typeStock: 'DOW', valueStock: '1.25%', typeChange: 'down'},
            {typeStock: 'DOW', valueStock: '1.25%', typeChange: 'up'},
            {typeStock: 'DOW', valueStock: '1.25%', typeChange: 'down'},
        ];

        this.state = {stock: stock, icon: 'pause', animation_class: 'stock-scroll-animation'};
    }

    handleClick(e) {
        // console.log("element clicked");
        let tmp_icon = this.state.icon == 'pause'?'play':'pause';
        if(tmp_icon == 'pause') {
            this.setState({ icon: tmp_icon, animation_class: 'stock-scroll-animation' });
        } else {
            this.setState({ icon: tmp_icon, animation_class: '' });
        }
    }

    render () {
        return (
            <div className='stock-scroll-navigation'>
                <NavLink className='column-link column-link--transparent' to='/timelines/home' data-preview-title-id='column.home' data-preview-icon='home'>
                    <FormattedMessage id='trends.trending_now' defaultMessage='Trending now' />
                    <Icon className='column-link__icon' id={this.state.icon} fixedWidth onClick={this.handleClick.bind(this)}/>
                </NavLink>

                <div className={'stock-scroll-navigation ' + this.state.animation_class}>
                    {this.state.stock.map((e, i) => {
                        return (<StockTag key={i} typeStock={e.typeStock} valueStock={e.valueStock} typeChange={e.typeChange}/>)
                    })}
                </div>
            </div>
        );
    }
}
