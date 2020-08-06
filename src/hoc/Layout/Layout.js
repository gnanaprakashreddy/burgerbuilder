import React,{Component} from 'react';
import Aux from '../Auxi/Auxi';
import classes from './Layout.module.css';
import ToolBar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
class Layout extends Component {
    state = {
        showSideDrawer : false
    }
    sideDrawerClosedHandler = () => (
        this.setState({showSideDrawer:false})
    )
    drawToggleHandler = () => (
        this.setState((prevState) => {
            return {showSideDrawer :!prevState.showSideDrawer };
        })   
    )
    render(){
        return(
            <Aux>
                <ToolBar drawToggleHandler={this.drawToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer}  closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}
export default Layout;