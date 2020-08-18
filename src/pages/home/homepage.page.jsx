import React, { PureComponent } from 'react';
import Featured from '../../components/Featured/featured.component';
import BazuHeader from 'components/Headers/BazuHeader.component';


class Homepage extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
      <BazuHeader/>
      <Featured/>
    </>
        )
    }
}

export default Homepage