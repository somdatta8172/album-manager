import React, { useContext } from "react";

class AddAlbum extends React.Component {

   constructor() {
      super();
      this.state = {
         userId: "",
         id: "",
         title: ""
      };
   }
   //add an album
   add = (e) => {
      e.preventDefault();
      if (this.state.userId === "" || this.state.title === "") {
         alert("All the fields are mandatory!");
         return;
      }
      fetch('https://jsonplaceholder.typicode.com/albums', {
         method: 'POST',
         body: JSON.stringify({
            userId: this.state.userId,
            id: this.state.id,
            title: this.state.title,
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((response) => response.json())
         .then((json) => {
            this.props.setItems(this.props.items.concat(json));
            console.log(json);
         });
      this.setState({ userId: "", id: "", title: "" });
   }

   render() {
      return (
         <div className="container my-3">
            <h2>Add an album</h2>
            <form onSubmit={this.add}>
               <div className="form-group my-3">
                  <label className="my-1" htmlFor="exampleInput1">UserId:</label>
                  <input
                     type="text"
                     className="form-control"
                     id="exampleInput1"
                     placeholder="Enter UserId"
                     value={this.state.userId}
                     onChange={(e) => this.setState({ userId: e.target.value })} />
               </div>
               <div className="form-group my-3">
                  <label className="my-1" htmlFor="exampleInput2">Id:</label>
                  <input type="text"
                     className="form-control"
                     id="exampleInput2"
                     placeholder="Enter Id"
                     value={this.state.id}
                     onChange={(e) => this.setState({ id: e.target.value })} />
               </div>
               <div className="form-group my-3">
                  <label className="my-1" htmlFor="exampleInput3">Title:</label>
                  <input type="text"
                     className="form-control"
                     id="exampleInput3"
                     placeholder="Enter Title"
                     value={this.state.title}
                     onChange={(e) => this.setState({ title: e.target.value })} />
               </div>
               <button type="submit" className="btn btn-dark" style={{ width: "10rem" }}>Add</button>
            </form>
         </div>
      );
   }
}

export default AddAlbum;







