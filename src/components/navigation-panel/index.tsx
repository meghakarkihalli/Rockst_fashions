import React, { Component } from 'react'
import './_style.scss'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

class NavigationPanel extends Component {
    render(){
        const blk = 'nav-panel'
        return(
            <div className={blk}>
                <div className={`${blk}__top-bar`}>
                    <div className={`${blk}__contact`}>
                        Contact : +1 000-000-0000
                    </div>
                    <div className={`${blk}__icon`}>
                        
                    </div>
                </div>
                <div className={`${blk}__nav-bar`}>
                    <div className={`${blk}__logo`}>
                        <span style={{color:'#ff0000'}}>Rockst</span><br/>Fashions
                    </div>
                    <div className={`${blk}__list-container`}>
                        <ul className={`${blk}__list`}>
                            <li className={`${blk}__item`}><a href="#">Girls</a></li>
                            <li className={`${blk}__item`}><a href="#">Boys</a></li>
                            <li className={`${blk}__item`}><a href="#">Women</a></li>
                            <li className={`${blk}__item`}><a href="#">Men</a></li>
                            <li className={`${blk}__item`}><a href="#">Home</a></li>
                        </ul>
                    </div>
                    <div className={`${blk}__cart-container`}>
                        <ShoppingCartIcon fontSize="large" style={{color: '#ff0000' }}/>
                    </div>
                </div>
                <div className={`${blk}__divider`}></div>
            </div>
        )
    }
}

export default NavigationPanel 