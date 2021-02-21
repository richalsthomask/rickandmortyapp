import React,{Component} from 'react';
import './App.css'
import axios from 'axios';
import Popup from './popup';

export default class App extends React.Component{

  constructor(){
    super();
    this.state={
      data:[],
      usedata:[],
      flag:false,
      value:[],
    };
  }

  componentWillMount(){

    axios.get("https://rickandmortyapi.com/api/character/?name=rick&page=1").then(response=>{this.setState({data:response.data.results,usedata:response.data.results});})
  }

  changeflag(){
    this.setState({flag:!this.state.flag});
  }

  handlesearch=(e)=>{
    document.getElementById("main").style.cursor="wait";
    
    
    var a = [];
       this.state.data.map((value,index)=>{

         var length = e.length;

        if(e==value.name.substring(0,e.length)){

          a=a.concat(value); 
        }
       });
       
       this.setState({usedata:a})
       
    document.getElementById("main").style.cursor = "";
  }

  dataview=()=>{
           
    if(this.state.usedata===[]) 
       return "";
    else{
      var color=false;
      return this.state.usedata.map((value,index)=>{
        if(value.status==="Dead") color=true
          else color=false;
        return <span >
          <span Style="height:21%;width:100%;background-color:white;display:block;cursor:pointer;" onClick={()=>{this.setState({value:value,flag:true})}}>

            <img src={value.image} Style="height:45%;float:left;border-radius:50%;position:relative;top:25%;left:4%"/>

            <a Style="float:left;font-size:16px;font-weight:650;color:rgba(0,0,0,.6);position:relative;left:8%;top:28%;width:40%;text-align:left;">{value.name}</a>

            <div Style="">
              
              {
                color?
                
                  <span Style="height:7px;width:7px;border-radius:50%;background-color:rgba(85, 82, 82,.5);display:inline-block;float:right;position:relative;right:45%;top:27px;"></span>
                 :
                  <span Style="height:7px;width:7px;border-radius:50%;background-color:rgba(68, 170, 64,.8);display:inline-block;float:right;position:relative;right:45%;top:27px;"></span>

                }
              <a Style="color:rgba(0,0,0,.7);float:left;font-weight:550;font-size:13px;position:relative;left:12%;top:19px">{value.status} - {value.species}</a>
              </div>
          </span>
          <div Style="height:5px;width:100%;background-color:rgb(240, 240, 240);"/>
        </span>
      })}
       
    
  }

  render(){
    return(
      
      <div id="main">
          
            <div Style="height:13%"></div>
        <a Style="font-size:50px;font-weight:650;font-family:arial;" >Rick and Morty Search</a>
        
        <br/>

        <div Style="height:9%"/>

        <input id="search" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#128269;&nbsp;&nbsp;&nbsp;&nbsp; Search for contact" onChange={(e)=>{this.handlesearch(e.target.value)}}></input>
        
          
        <div  id="viewer">
          {this.dataview()}
        </div>
        {
          this.state.flag ?
            <Popup value={this.state.value} close={this.changeflag.bind(this)} /> : null
        }
        </div>
    );
  }
}