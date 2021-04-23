import React,{createContext,Component} from 'react';

export const TheamContext = createContext();

 class TheamContextProvider extends Component {
     state={
        isLightTheam:true,
        light:{syntax:'#555',ui:'#ddd',bg:'#ccc'},
        dark:{syntax:'#ddd',ui:'#333',bg:'#555'}
     }
     toogleTheam=()=>{
        this.setState({isLightTheam:!this.state.isLightTheam})
     }
    render() {
        return (
            <TheamContext.Provider value={{...this.state,toogleTheam:this.toogleTheam}}>
                {this.props.children}
            </TheamContext.Provider>
        )
    }
}

export default TheamContextProvider;