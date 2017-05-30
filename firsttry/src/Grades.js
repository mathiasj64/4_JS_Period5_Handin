import React from "react";

export default class Grades extends React.Component{

    constructor(props){
        super(props);
        this.state = {filterVal: -2};
        //this.myChange = this.myChange.bind(this);
    }

     myChange = (evt) =>{
        const val = evt.target.value;
        this.setState({filterVal : val});
        };

    render(){
        let data = this.props.data;
        const rows = data.filter((s)=>{return s.grade > this.state.filterVal}).map((s)=>{
            return(
                <tr><td>{s.id} </td><td>{s.name} </td><td>{s.grade}</td></tr>
            )
        })

       

        return (
          <div>
          <p>Grades</p>
          Show grades above <input onChange={this.myChange}/>
          <table>
          {rows}
          </table>
          
          </div>  
        );
    }

}