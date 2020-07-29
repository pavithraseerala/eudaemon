import React, {Component} from 'react';

const updateChild={
            name: "Ria",
            id:"1001",
            age: "10",
            dob: "",
            gender: "",
            education: "",
            medicalDetails:"",
            gName: "",
            gContact: ""
}


export default class ChildEdit extends Component{

    constructor(props) {
        super(props);    

        this.state={
            isOpen: false,
            name: "",
            id:"",
            age: "",
            dob: "",
            gender: "",
            education: "",
            medicalDetails:"",
            gName: "",
            gContact: "",
            documentType: "",
            selectedFile: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
        
        saycheck(event){
            this.setState(state => ({
              isOpen: true
            }));
        }
        
        handleSubmit(event){
            console.log(this.state.age)
            if(this.state.selectedFile!=null)
            { const formData = new FormData(); 
               
            // Update the formData object 
            formData.append( 
                "myFile", 
                this.state.selectedFile, 
                this.state.selectedFile.name 
            ); 
               
            // Details of the uploaded file 
            console.log(this.state.selectedFile); 
            console.log(this.state.documentType);
            }
            
            this.setState(state => ({
                isOpen: false,
                name: "",
                id:"",
                age: "",
                dob: "",
                gender: "",
                education: "",
                medicalDetails:"",
                gName: "",
                gContact: "",
                documentType: "",
                selectedFile: null
              }));
            event.preventDefault();
            
            alert("Child's details updated!")
        }

        onFileChange = event => { 
    
            // Update the state 
            this.setState({ selectedFile: event.target.files[0] }); 
               
            }
       
     
        render(){

            let dia =(
                <dialog open>
                <button onClick={(e) => this.setState({ isOpen : false })}>x</button><br />
                <form onSubmit={this.handleSubmit}>
                <lable>Id : {this.state.id}</lable><br />
                <br />
                <lable>Name : </lable><br />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                />
                <br />
                <lable>Age : </lable><br />
                <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={this.state.age}
                    onChange={this.handleChange}
                />
                <br />
                <lable>Date of Birth : </lable><br />
                <input
                    type="text"
                    name="dob"
                    placeholder="Date of Birth"
                    value={this.state.dob}
                    onChange={this.handleChange}
                />
                <br />
                <lable>Gender : </lable><br />
                <input
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    value={this.state.gender}
                    onChange={this.handleChange}
                />
                <br />
                <lable>Education : </lable><br />
                <input
                    type="text"
                    name="education"
                    placeholder="Education"
                    value={this.state.education}
                    onChange={this.handleChange}
                />
                <br />
                <lable>Medical Details : </lable><br />
                <input
                    type="text"
                    name="medicalDetails"
                    placeholder="Medical Details"
                    value={this.state.medicalDetails}
                    onChange={this.handleChange}
                />
                <br />
                <lable>Guardian Details:</lable><br />
                <lable>Name : </lable><br />
                <input
                    type="text"
                    name="gName"
                    placeholder="Name"
                    value={this.state.gName}
                    onChange={this.handleChange}
                />
                <br />
                <lable>Contact Number : </lable><br />
                <input
                    type="text"
                    name="gContact"
                    placeholder="Contact Number"
                    value={this.state.gContact}
                    onChange={this.handleChange}
                />
                <br />
                <lable>Uploading Document Type:</lable>
            <br />
            <input
                type="text"
                name="documentType"
                placeholder="Document Type"
                value={this.state.documentType}
                onChange={this.handleChange}
            />
            <div>
                <input type="file" onChange={this.onFileChange} /> 
            </div> 
            {this.state.fileCheck}
                <button type="submit">Update Details</button>
                </form>
               
                </dialog>
            );
    
        if(!this.state.isOpen){
            dia=null
        }
    
        return(
            <div>
                <h1>Child Edit</h1>
                <div>
                    <form onSubmit={(e)=>{
                        console.log(this.state.id)
                        this.setState({isOpen : true,
                            name: updateChild.name,
                            age: updateChild.age,
                            dob: updateChild.dob,
                            gender: updateChild.gender,
                            education: updateChild.education,
                            medicalDetails:updateChild.medicalDetails,
                            gName: updateChild.gName,
                            gContact: updateChild.gContact })
                            e.preventDefault();
                    }}>
                    <lable>Child's ID : </lable><br />
                    <input
                        type="text"
                        name="id"
                        placeholder="Child's ID"
                        value={this.state.id}
                        onChange={this.handleChange}
                        required
                    />
                    <button type="submit"><h3>Update</h3></button>
                    </form>
                    {dia}
                </div>
               
            </div>
        )
    }
}