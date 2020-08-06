import React,{Component}from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxi/Auxi';
class Modal extends Component{
    shouldComponentUpdate(nextProps,nextState)
    {
        return nextProps.show!==this.props.show || this.props.children!== nextProps.children;
    }
    componentWillUpdate(){
        console.log('[Modal] will update')
    }
    render(){
        return (
            <Aux>   
                <Backdrop show = {this.props.show} clicked = {this.props.deletebackdrop}/>
                <div className = {classes.Modal}
                 style = {{transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity : this.props.show ? '1':'0'}} >
                 {this.props.children}
                </div>
            </Aux>
        )
    }
}
export default Modal;