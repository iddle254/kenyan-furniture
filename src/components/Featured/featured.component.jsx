import React from 'react';
import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux';

import { selectFurnitureItems } from '../../redux/furniture/furniture.selectors';
import FeaturedItem from 'components/FeaturedItem/featuredItem.component';

import {FeaturedMenuContainer } from './featured.styles';


function Featured({items}) {
    
    return (
        <FeaturedMenuContainer>
            {items.map(({ id, ...otherSectionProps}) => (
                <FeaturedItem key={id} {...otherSectionProps}/>
            ))}
        </FeaturedMenuContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    items: selectFurnitureItems
})

export default connect(mapStateToProps)(Featured);
