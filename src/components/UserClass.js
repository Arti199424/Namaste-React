import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    
   
    this.state = {
      count: 0,
      count2:1,
    };

    console.log(this.props.name+"Child Constructor");
  }
  componentDidMount(){
    console.log(this.props.name+"Child Component Did Mount");
  }
  render() {
   const {name,location}=this.props;
   const {count,count2}=this.state;

   console.log(this.props.name+"Child Render")
   
    return (
      <div className="p-4 m-4 ">
        <h1>Count:{count}</h1>
        <button className="border border-solid border-black rounded-lg bg-green-700 text-white w-40" onClick={()=>{
            this.setState({count:this.state.count+1,
            });
        }}
        >
Count Increase
        </button>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:@artioct24</h4>
      </div>
    );
  }
}
export default UserClass;
