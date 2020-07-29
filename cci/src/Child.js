import React, { Component } from "react";
import axios from 'axios';


let childLi=[]

export default class ChildDetails extends Component {

    constructor(props) {
        super(props);    
    
    
    this.state={
        children1: [],
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
        selectedFile: null,
        fileCheck: ""
    }

   
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
    onFileChange = event => { 
    
        // Update the state 
        this.setState({ selectedFile: event.target.files[0] }); 
           
        }
    onFileUpload= async() => { 
     
        // Create an object of formData 
        const formData = new FormData(); 
           
        // Update the formData object 
        formData.append( 
            "myFile", 
            this.state.selectedFile, 
            this.state.selectedFile.name 
        ); 
           
        // Details of the uploaded file 
        console.log(this.state.selectedFile); 
        console.log(this.state.documentType);
        this.setState(state => ({
            fileCheck: "File Uploaded"
          }));
          try{
          const token="eyJhbGciOiJSUzI1NiIsImtpZCI6IjU1NGE3NTQ3Nzg1ODdjOTRjMTY3M2U4ZWEyNDQ2MTZjMGMwNDNjYmMiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiRENQVSIsIm9yZ2FuaXNhdGlvbiI6ImNoZW5uYWktZGNwdTEiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZXVkYWVtb24tMjBhNWUiLCJhdWQiOiJldWRhZW1vbi0yMGE1ZSIsImF1dGhfdGltZSI6MTU5NTkzOTU2OSwidXNlcl9pZCI6Ilc2S3FDZlp1V0xWUkpsZGNMVWJGTTdOYXRqNDIiLCJzdWIiOiJXNktxQ2ZadVdMVlJKbGRjTFViRk03TmF0ajQyIiwiaWF0IjoxNTk1OTM5NTY5LCJleHAiOjE1OTU5NDMxNjksImVtYWlsIjoicXdlMTIzMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicXdlMTIzMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.ni6AgEy3G9pv32owNjzJ-Fp9nIsm5OPD9KpAIGgKF08WfSE9JaemGRLRzSbVPDCwIRZIAqALOjmx76JRO-vJn28hFQYxnhj8a0iJPyMNdVBxvmGaL4PBoeeq9Tlp-jgsW2UZ1Nj7HG--tzzJET-QAWjuO12Cdgx7b-urA2aWteQ4vmX3oqePtCrpP3g2wleS0dR8cCJs2lvVgcwhpFZSll643TDE7kLjmbSJm-DAGl7prCUNPRbYg7v7qwsL0edjTY54nxFLxYPuQK8J05HGR6VnfRafyW0p_SijwAQawBSsR4v-oKxncXtBaO8sTlI91FVFy_YwKqCoavV3OwaClw";
          axios.defaults.headers['Authorization'] = ` Bearer ${token}`;

          let response = await axios.post(`/child/${this.state.id}/upload/${this.state.documentType}`,this.state.documentType)
          console.log(response.data)  
        }
          catch (err) {
			console.log(err.response);
			if (err.response.data[0]) {
				this.setState({
					error: err.response.data[0].msg,
					loading: false,
				});
			} else if (err.response.data.error) {
				this.setState({
					error: err.response.data.error,
					loading: false,
				});
			}
		}

        }
       
        getDetails = async() => {
        
            try {
                const token="eyJhbGciOiJSUzI1NiIsImtpZCI6IjU1NGE3NTQ3Nzg1ODdjOTRjMTY3M2U4ZWEyNDQ2MTZjMGMwNDNjYmMiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiRENQVSIsIm9yZ2FuaXNhdGlvbiI6ImNoZW5uYWktZGNwdTEiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZXVkYWVtb24tMjBhNWUiLCJhdWQiOiJldWRhZW1vbi0yMGE1ZSIsImF1dGhfdGltZSI6MTU5NjAwMTI1OSwidXNlcl9pZCI6Ilc2S3FDZlp1V0xWUkpsZGNMVWJGTTdOYXRqNDIiLCJzdWIiOiJXNktxQ2ZadVdMVlJKbGRjTFViRk03TmF0ajQyIiwiaWF0IjoxNTk2MDAxMjU5LCJleHAiOjE1OTYwMDQ4NTksImVtYWlsIjoicXdlMTIzMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicXdlMTIzMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.cMyrWQIVfWt9qvFPfH68rT0iQZC13fTMuHqNDMPJzeuDNjE1-VUvo9-uZUc88zc3luvjH4rGaAfb5wCBeey-6OhGxmEjroMgqycUZAuZgBs0GoZ6AbtTCD4GJd4Lc4p5mXM6ZFmNlNnTH7KfB4GOvVHAml87ohU_BaVe4ghWHJ9eLRepd39Zy1aqy0Et2lkI89nYYHmT5ihJW7nY-aQIORw_DYgZVdNXzv4fhDlkmltevl6ebGa1szJN2xnvkfr6DxtUl2xgykpm4Ls-F-kfPF4sd-jluWoZvY6ou2l7paowUHWGsQ8XxEBuM8E_i7UkIcGreUqplug1NDXzRQToVA";
                axios.defaults.headers['Authorization'] = ` Bearer ${token}`;
    
                let response = await axios.get("/cci/children?cci=chennai-cci1")
                let children1 = response.data.result
                console.log(children1)

                this.setState({
					children1:response.data.result
				});
                
                for(let i=0;i<children1.length;i++)
                {
                    console.log(children1[i].name)
                    childLi.push(children1[i])
                    
                }
            
                console.log(childLi)
            }
               
            catch (err) {
                console.error(err);
                this.setState({ error: err.message });
            }

            }
    
    
                

    render(){
        
        let dia =(
            <dialog open>
            <button onClick={(e) => this.setState({ isOpen : false , documentType : ""})}>x</button><br />
            <lable>Name : {this.state.name}</lable><br />
            <lable>Id : {this.state.id}</lable><br />
            <lable>Age : {this.state.age}</lable><br />
            <lable>Date of Birth : {this.state.dob}</lable><br />
            <lable>Gender : {this.state.gender}</lable><br />
            <lable>Education : {this.state.education}</lable><br />
            <lable>Medical Details : {this.state.medicalDetails}</lable><br />
            <lable>Guardian Details:</lable><br />
            <lable>Name : {this.state.gName}</lable><br />
            <lable>Contact Number : {this.state.gContact}</lable><br />
             
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
                <button onClick={this.onFileUpload}> 
                  Upload! 
                </button> 
            </div> 
            
            {this.state.fileCheck}
            
            </dialog>
        );
        
    
        if(!this.state.isOpen){
            dia=null
        }
        
        let childList=this.state.children1.map((child1) => {return(<button key={child1.id} onClick={(e)=>
            this.setState({
                isOpen : true,
                name : child1.name,
                id : child1.id,
                age:child1.age
              })
        }><h3>{child1.name}</h3></button>)}
            
    )
        
        return(
            <div>
                <h1>Child Details page</h1>
                <button onClick={this.getDetails}>Child List</button>
                <ul>
                {childList}
                </ul>
                {dia}
            </div>
        )
    }
}