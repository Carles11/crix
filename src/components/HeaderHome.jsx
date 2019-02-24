import React from 'react';

import BurgerMenu from './BurgerMenu';
import Navigation from './Navigation';


class HeaderHome extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active:false,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
    handleClick(){
        this.setState({ active:true})
    }
    handleClose(){
        this.setState({ active:false})
    }

    render(){
        var active = this.state.active
        if(active){
            return (
                <Navigation 
                    handleClose={this.handleClose}
                />                
            );
        }else {
            return(
                <BurgerMenu 
                    handleClick={this.handleClick}
                />
            )
        }
        
    };
};

export default HeaderHome;