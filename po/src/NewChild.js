import React, {Component} from 'react';
import axios from 'axios';

export default class NewChild extends Component{

    constructor(props) {
        super(props);    

        this.state={
            isOpen: false,
            name: "",
            id:0,
            age: "",
            dob: "",
            gender: "",
            education: "",
            medicalDetails:"",
            gName: "",
            gContact: ""
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
        
        handleSubmit= async(event) => {
            event.preventDefault();
            console.log(this.state.id)
            const token="eyJhbGciOiJSUzI1NiIsImtpZCI6IjU1NGE3NTQ3Nzg1ODdjOTRjMTY3M2U4ZWEyNDQ2MTZjMGMwNDNjYmMiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiRENQVSIsIm9yZ2FuaXNhdGlvbiI6ImNoZW5uYWktZGNwdTEiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZXVkYWVtb24tMjBhNWUiLCJhdWQiOiJldWRhZW1vbi0yMGE1ZSIsImF1dGhfdGltZSI6MTU5NTk1NDQ5NSwidXNlcl9pZCI6Ilc2S3FDZlp1V0xWUkpsZGNMVWJGTTdOYXRqNDIiLCJzdWIiOiJXNktxQ2ZadVdMVlJKbGRjTFViRk03TmF0ajQyIiwiaWF0IjoxNTk1OTU0NDk1LCJleHAiOjE1OTU5NTgwOTUsImVtYWlsIjoicXdlMTIzMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicXdlMTIzMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.eYeCOKQQoDM_yujv44SeHP6l207PsOw0Ys1XMVNFjQjuRc5feaZ0Epic03A3akfdtX17rtAut6gy68kZUvyRkXYkGl7uFYmeIU-hestmVwbGqUWyCC1jECFAJ97kqt9VvoXV2HZh4HZ7NzNQ1tBuDCiYBcmWCpionri58wSzts9sDTQkVe5WQqwBUGPq07ejnX49029iWCrCLNt_qCnAQ7XPt-s69uCAz2lrn6m9wNDCZAYqouXWlrHbv0D1FeBWu7drGj9d3Z0E7J3pbOyVxo2KH_Z8WndnkHO_6HDcnN40wX2tMgfzOmwCblunuLOwsnH-8ezPmAfP-6cwBjGWSQ";
            axios.defaults.headers['Authorization'] = ` Bearer ${token}`;
            console.log(this.state);
            let response = await axios.post("/child",
            {
                "name" : this.state.name,
                "id" : this.state.id
            }
            )
            console.log(response.data)
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
                gContact: ""
              }));
            
            alert("New child created!")
        }

    render(){

        let dia =(
            <dialog open>
            <button onClick={(e) => this.setState({ isOpen : false })}>x</button><br />
            <form onSubmit={this.handleSubmit}>
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
            <lable>Id : </lable><br />
            <input
                type="number"
                name="id"
                placeholder="Id"
                value={this.state.id}
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
            <button type="submit">Submit</button>
            </form>
           
            </dialog>
        );
    
        if(!this.state.isOpen){
            dia=null
        }

        return(
            <div>
                <h1>New Child</h1>
                <button onClick={(e) => this.setState({ isOpen : true })}><h3>Add New Child</h3></button>
                {dia}
            </div>
        )
    }
}