import React,{Component} from 'react';

export default class Popup extends React.Component{

    constructor(){
        super();
        this.state={

        };
    }

    render(){
        return(

            <div Style="height:100vh;width:100%;background-color:rgba(0,0,0,.3);position:fixed;top:0;">
                
                   <div Style="margin:0 auto;height:45%;width:28%;background-color:white;top:30%;position:relative;border-radius:3%;">
                       
                    <a Style="font-size:20px;float:right;position:relative;top:3%;right:4%;color:rgba(0,0,0,.6);cursor:pointer" onClick={()=>{this.props.close()}}>&#10005;</a>
                    <br/><br/>
                    <img src={this.props.value.image} Style="height:32%;border-radius:50%;float:left;position:relative;left:10%;"/>

                    <a Style="float:left;font-size:20px;font-weight:850;position:relative;left:16%;top:4%;width:40%;text-align:left;">{this.props.value.name}</a>
                    {
                        this.props.value.color ?

                            <span Style="height:10px;width:10px;border-radius:50%;background-color:rgba(85, 82, 82,.5);display:inline-block;float:right;position:relative;right:55%;top:65px;"></span>
                            :
                            <span Style="height:10px;width:10px;border-radius:50%;background-color:rgba(68, 170, 64,.8);display:inline-block;float:right;position:relative;right:55%;top:65px;"></span>

                    }
                    <a Style="color:rgba(0,0,0,.7);float:left;font-weight:590;font-size:17px;position:relative;right:18%;top:17%;width:30%">{this.props.value.status} - {this.props.value.species}</a>

                    <br /><br /><br /><br /><br /><div Style="height:2%"/>
                    <hr Style="width:85%"/>
                      
                    <a Style="float:left;position:relative;left:13%;top:3%;color:rgba(0,0,0,.7);font-size:13px;font-weight:500;">Gender</a>

                    <a Style="float:left;position:relative;left:43%;top:3%;color:rgba(0,0,0,.7);font-size:13px;font-weight:500;">Location</a>

                    <br/>
                    <a Style="float:left;position:relative;left:13%;top:3%;font-weight:550;font-family:times-new-roman;font-size:16px;">{this.props.value.gender}</a>

                    <a Style="float:left;position:relative;left:45%;top:3%;font-weight:550;font-family:times-new-roman;font-size:16px;">{this.props.value.location.name}</a>

                    <br/><br/>

                    <a Style="float:left;position:relative;left:13%;top:3%;color:rgba(0,0,0,.7);font-size:13px;font-weight:500;">Species</a>

                    <a Style="float:left;position:relative;left:43%;top:3%;color:rgba(0,0,0,.7);font-size:13px;font-weight:500;">Origin</a>

                    <br />
                    <a Style="float:left;position:relative;left:13%;top:3%;font-weight:550;font-family:times-new-roman;font-size:16px;width:10%">{this.props.value.species}</a>

                    <a Style="position:relative;left:8%;top:3%;font-weight:550;font-family:times-new-roman;font-size:16px;width:25%">{this.props.value.origin.name}</a>

                   </div>
                
            </div>
        );
    }
}