import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor")
  }
  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }
  render() {
    //console.log("Parent Render")

    return (
      <div className="bg-slate-300 h-[490px] p-4">
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>

        {/* <h2 className="font-bold text-lg ">This is a Namaste React WebSeries</h2>
    
      <UserClass name={"First"} location={"Delhi"}/> */}
      </div>
    );
  }
}
export default About;
