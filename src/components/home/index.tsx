import React, { Component } from 'react';
import './_style.scss';
import First from '../../images/andamen-3.jpg'

const blk = 'home'

class Home extends Component {
    render(){
        return(
            <div className={`${blk}__carousel`}>
                <img src={First}></img>
            </div>
        )
    }
}

export default Home