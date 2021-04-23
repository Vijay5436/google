import React, { Component } from 'react';
import {Form} from 'react-bootstrap'
import csc from 'country-state-city';

export default class Userform extends Component{

    constructor(props){
        super(props);        
        this.state={            
            countries:[],
            states:[],
            cities:[]   ,
            disableState:true,
            disableCity:true,   
        }
    }  

    componentDidMount(){        
        let countriesData =csc.getAllCountries();
        this.setState({
            countries:countriesData,          
        })
    }

    countryChange= (event) =>{
        let country =event.target.value;
        const {countries} = this.state;
        this.setState({disableCity:true,disableState:false,cities:''});

        let temp= countries.filter(elm => elm.name === country)
        if(country==='--- Select Country ---') {
            this.setState({
                disableState:true,
                disableCity:true,
                states:'',
                cities:'',
        }) 
        }
        if(temp.length) {
            const id =temp[0].id;
            let statesList = csc.getStatesOfCountry(id);
            this.setState({
                    states:statesList
            }) 
        }
               
    }

    stateChange= (event) =>{
        let state =event.target.value;
        const {states} = this.state;
        let temp= states.filter(obj => obj.name === state);
       this.setState({disableCity:false})
        if(temp.length) {
            const id =temp[0].id;
            let citiesList = csc.getCitiesOfState(id);
            this.setState({
                cities:citiesList
            })      
        }
          
    }

    render(){

    const {countries,states,cities,disableCity,disableState} = this.state;
    
    const countryOptions =[];
    const stateOptions=[];
    const cityOptions =[];

    if(countries.length){
        countries.map(value =>{
            countryOptions.push(
            <option key={value.name}>{value.name}</option>
            )
        })
    }

    if(states.length){
        states.map(value =>{
            stateOptions.push(
            <option key={value.name}>{value.name}</option>
            )
        })
    } 
    
    if(cities.length){
        cities.map(value =>{
            cityOptions.push(
            <option key={value.name}>{value.name}</option>
            )
        })
    } 
    
    return(
        <>
            <Form.Group id='form'>
                <label>Country</label>
                <Form.Control as="select"  onChange={this.countryChange} size="lg">
                    <option >--- Select Country --- </option>
                    {countryOptions}
                </Form.Control>
                <br />
                <label>State</label>
                    {
                        stateOptions.length ?
                            <Form.Control as="select" disabled={this.state.disableState} onChange={this.stateChange}>
                                <option >--- Select a state  --- </option>
                                {stateOptions}
                            </Form.Control> :
                            <Form.Control as="select" disabled={this.state.disableState} onChange={this.stateChange}>
                                <option>--- Select a Country first --- </option> 
                            </Form.Control> 
                    }
                <br />
                <label>City</label>
                {
                    cityOptions.length ?
                        <Form.Control as="select" disabled={this.state.disableCity} onChange={this.stateChange}>
                            <option >--- Select a City  --- </option>
                            {cityOptions}
                        </Form.Control> :
                        <Form.Control as="select" disabled={this.state.disableCity} onChange={this.stateChange}>
                            <option>--- Select a State first --- </option> 
                        </Form.Control> 
                }
            </Form.Group>
        </>
    )
    }
}
