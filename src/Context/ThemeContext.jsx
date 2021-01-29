import {React,createContext,Component} from 'react'
import {NavPage,FullPage} from '../Components';
const ThemeContext = createContext("light");

class Layout extends Component {
    render() {
        return (
            <ThemeContext.Provider value={{
                fullPage:FullPage,
                navPage:NavPage,
            }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export { ThemeContext,Layout}
