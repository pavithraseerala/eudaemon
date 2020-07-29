import React, {Component} from 'react';
import axios from 'axios';





export default class ChildEdit extends Component{

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
            error:"",
            loading:"",
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
        
        handleSubmit = async(event) => {
            console.log(this.state.age)

            const token="eyJhbGciOiJSUzI1NiIsImtpZCI6IjU1NGE3NTQ3Nzg1ODdjOTRjMTY3M2U4ZWEyNDQ2MTZjMGMwNDNjYmMiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiRENQVSIsIm9yZ2FuaXNhdGlvbiI6ImNoZW5uYWktZGNwdTEiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZXVkYWVtb24tMjBhNWUiLCJhdWQiOiJldWRhZW1vbi0yMGE1ZSIsImF1dGhfdGltZSI6MTU5NjAxODI0MywidXNlcl9pZCI6Ilc2S3FDZlp1V0xWUkpsZGNMVWJGTTdOYXRqNDIiLCJzdWIiOiJXNktxQ2ZadVdMVlJKbGRjTFViRk03TmF0ajQyIiwiaWF0IjoxNTk2MDE4MjQzLCJleHAiOjE1OTYwMjE4NDMsImVtYWlsIjoicXdlMTIzMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicXdlMTIzMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.o-An-5Qv9_9iBleWMkt-VEmKwqRIWVPsvMKHdeUuoDD_qRkdp0clblYTvvo2W_Ex_iBukA50WWRj8rYw8WHa7DxQEQozLJRRiRl6UwJ3NheeBq65G9_25vlQfuSKjNuPN88vweaiaHX6DMM_aJPry6bZmt3qyeTpEbxZDI3sks5a_c5k2-MA6CQ2IPRgXG75CI8pIJaiMi9CMQKInnTkC3N8JkyEhRnddUfoT80vo7kxGWgUIpQn42b9xFwRwmGQiwvpZVj36FkgbZoG6ECbTG7X1CvaiTuJpfRyGz7ttSH8DNd87JtrUXABlPFDS5XttOlbBh_1DX98VPwUaQTmOA";
            axios.defaults.headers['Authorization'] = ` Bearer ${token}`;

            let response = await axios.put(`/child/${this.state.id}`,
            {
                'name' : this.state.name,
                'age' : this.state.age
            })
            console.log(response)
            
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
            
           
                const token="eyJhbGciOiJSUzI1NiIsImtpZCI6IjU1NGE3NTQ3Nzg1ODdjOTRjMTY3M2U4ZWEyNDQ2MTZjMGMwNDNjYmMiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiRENQVSIsIm9yZ2FuaXNhdGlvbiI6ImNoZW5uYWktZGNwdTEiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZXVkYWVtb24tMjBhNWUiLCJhdWQiOiJldWRhZW1vbi0yMGE1ZSIsImF1dGhfdGltZSI6MTU5NjAxODI0MywidXNlcl9pZCI6Ilc2S3FDZlp1V0xWUkpsZGNMVWJGTTdOYXRqNDIiLCJzdWIiOiJXNktxQ2ZadVdMVlJKbGRjTFViRk03TmF0ajQyIiwiaWF0IjoxNTk2MDE4MjQzLCJleHAiOjE1OTYwMjE4NDMsImVtYWlsIjoicXdlMTIzMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicXdlMTIzMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.o-An-5Qv9_9iBleWMkt-VEmKwqRIWVPsvMKHdeUuoDD_qRkdp0clblYTvvo2W_Ex_iBukA50WWRj8rYw8WHa7DxQEQozLJRRiRl6UwJ3NheeBq65G9_25vlQfuSKjNuPN88vweaiaHX6DMM_aJPry6bZmt3qyeTpEbxZDI3sks5a_c5k2-MA6CQ2IPRgXG75CI8pIJaiMi9CMQKInnTkC3N8JkyEhRnddUfoT80vo7kxGWgUIpQn42b9xFwRwmGQiwvpZVj36FkgbZoG6ECbTG7X1CvaiTuJpfRyGz7ttSH8DNd87JtrUXABlPFDS5XttOlbBh_1DX98VPwUaQTmOA";
                axios.defaults.headers['Authorization'] = ` Bearer ${token}`;
      
                let response = await axios.post(`/child/${this.state.id}/upload/${this.state.documentType}`,this.state.selectedFile)
                console.log(response)  
                       

            }
            
            this.setState({
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
                cci:"",
                selectedFile: null
              });
              
            event.preventDefault();
            alert("Child's details updated!")
            
        }

        onFileChange = event => { 
    
            // Update the state 
            this.setState({ selectedFile: event.target.files[0] }); 
               
            }
        

        submitcci = async() => {
            console.log("hello")
            try {
                const token="eyJhbGciOiJSUzI1NiIsImtpZCI6IjU1NGE3NTQ3Nzg1ODdjOTRjMTY3M2U4ZWEyNDQ2MTZjMGMwNDNjYmMiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiRENQVSIsIm9yZ2FuaXNhdGlvbiI6ImNoZW5uYWktZGNwdTEiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZXVkYWVtb24tMjBhNWUiLCJhdWQiOiJldWRhZW1vbi0yMGE1ZSIsImF1dGhfdGltZSI6MTU5NjAxODI0MywidXNlcl9pZCI6Ilc2S3FDZlp1V0xWUkpsZGNMVWJGTTdOYXRqNDIiLCJzdWIiOiJXNktxQ2ZadVdMVlJKbGRjTFViRk03TmF0ajQyIiwiaWF0IjoxNTk2MDE4MjQzLCJleHAiOjE1OTYwMjE4NDMsImVtYWlsIjoicXdlMTIzMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicXdlMTIzMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.o-An-5Qv9_9iBleWMkt-VEmKwqRIWVPsvMKHdeUuoDD_qRkdp0clblYTvvo2W_Ex_iBukA50WWRj8rYw8WHa7DxQEQozLJRRiRl6UwJ3NheeBq65G9_25vlQfuSKjNuPN88vweaiaHX6DMM_aJPry6bZmt3qyeTpEbxZDI3sks5a_c5k2-MA6CQ2IPRgXG75CI8pIJaiMi9CMQKInnTkC3N8JkyEhRnddUfoT80vo7kxGWgUIpQn42b9xFwRwmGQiwvpZVj36FkgbZoG6ECbTG7X1CvaiTuJpfRyGz7ttSH8DNd87JtrUXABlPFDS5XttOlbBh_1DX98VPwUaQTmOA";
                axios.defaults.headers['Authorization'] = ` Bearer ${token}`;
    
                let response = await axios.get("/cci/children?cci=chennai-cci1")
                let children1 = response.data.result
                console.log(children1)
                this.setState({
					children1:response.data.result
				});
                
                
            }
               
            catch (err) {
                console.error(err);
                this.setState({ error: err.message });
            }

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

        let childList=this.state.children1.map(child1 => (<button key={child1.id} onClick={(e)=>
            this.setState({
                isOpen : true,
                name : child1.name,
                id : child1.id,
                age:child1.age
              })
        }><h3>{child1.name}</h3></button>)
            
            );
        
    
        return(
            <div>
                <h1>Child Edit</h1>
                <div>
                    
                    <lable>CCI Name : </lable><br />
                    <input
                        type="text"
                        name="name"
                        placeholder="CCI name"
                        value={this.state.cci}
                        onChange={this.handleChange}
                        required
                    />
                    <button onClick={this.submitcci}><h3>Search</h3></button>
                    
                    {childList}
                    {dia}
                </div>
               
            </div>
        )
    }
}