import React from 'react';
import { withRouter } from 'react-router-dom';
import StockTag from './stock_tag';
import StockScrollNavigation from './stock_scroll_navigation';

const NavigationStockTag = () => (
  <div className='navigation-stock-tag'>
    <StockTag typeStock='DOW' valueStock='1.25%' typeChange='up'/>
    <StockTag typeStock='S&P500' valueStock='1.25%' typeChange='down'/>
    <StockTag typeStock='DASDAQ' valueStock='1.25%' typeChange='up'/>

    <StockScrollNavigation/>
  </div>
);

export default withRouter(NavigationStockTag);
