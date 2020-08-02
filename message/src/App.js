import React, { Component } from 'react';
import axios from './util/axiosinstance';
import { Redirect } from 'react-router-dom';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      district: '',
      loading: false,
      error: null,
      email: '',
      password: '',
      organisation: '',
      role: 'DCPU',
      hideButton: false,
      mesEnter:"",
      message:[]
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async(event) => {
    console.log(this.state.mesEnter)
    console.log(this.state.organisation)
    if(this.state.mesEnter !== "")
    {let token="eyJhbGciOiJSUzI1NiIsImtpZCI6IjU1NGE3NTQ3Nzg1ODdjOTRjMTY3M2U4ZWEyNDQ2MTZjMGMwNDNjYmMiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiRENQVSIsIm9yZ2FuaXNhdGlvbiI6ImNoZW5uYWktZGNwdTEiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZXVkYWVtb24tMjBhNWUiLCJhdWQiOiJldWRhZW1vbi0yMGE1ZSIsImF1dGhfdGltZSI6MTU5NjM1NjgxOCwidXNlcl9pZCI6Ilc2S3FDZlp1V0xWUkpsZGNMVWJGTTdOYXRqNDIiLCJzdWIiOiJXNktxQ2ZadVdMVlJKbGRjTFViRk03TmF0ajQyIiwiaWF0IjoxNTk2MzU2ODE4LCJleHAiOjE1OTYzNjA0MTgsImVtYWlsIjoicXdlMTIzMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicXdlMTIzMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Hy2fLJm4VjzsQtNlnjCDN-gkA71pYbGrUf79sWIQp_g6mVGRNe-nuKrvvk9HlOT_iKjhWVpqtUYH0pqvVXXT4cSqCjircF22qSXb-MTcZg9SidgY_4vYm82rzYwtVYix-Wcaoxnza2vC2QYCUSlFNCO_B9c4WwY0IisE1fhsITsWmjm7FaIf4x3QZwaLaSJo64YKVrROPns_wJ--4HXZ6CD10bD3QAa-yjRdLq6UkoeVHi6we0APA6dXf9_MhgoTc4w1TyrwTLlHoVxMK2-sSkKOpTJDt7260KEpNXikJWJt2PYLWEJBnuTdvtWc4b5nv7-I4jG8LDaN_1H_r9dtkg";
    axios.defaults.headers['Authorization'] = `Bearer ${token}`;
    let response=await axios.post('/message',
    {
      "receiver": this.state.organisation,
      "message": this.state.mesEnter
    })
    console.log(response.data)}
    event.preventDefault();
  }
  
	onInputChangeHandler = (event) => {
		let value = event.target.value;
		let name = event.target.name;
		this.setState({ [name]: value });
	};

	onSelectInputHandler = (event) => {
		let name = event.target.name;
		// this.setState({ [name]: value });
		let role = event.target.value;

		this.setState((st) => {
			return { ...st, role, organisation: st.data[role][0].id };
		});
	};

	onDistrictLookUpHandler = async () => {
		// search for the district
		let { district } = this.state;
		try {
			this.setState({ loading: true });
			let resp = await axios.get('/login', {
				params: { district: "chennai" },
			});
			// console.log(resp);

			let data = resp.data;
			console.log(data);
			if (data['CWC'].length <= 0) {
				this.setState({
					error: 'Invalid District. Try again',
					loading: false,
				});
			} else {
				console.log(data['DCPU']);
				this.setState({
					hideButton: true,
					loading: false,
					error: null,
          data: data,
          value:"",
					organisation: data['DCPU'][0].id,
				});
			}
		} catch (err) {
			console.error(err);
			this.setState({ error: err.message });
		}
	};

	fetchMessage = async() =>{
    let token="eyJhbGciOiJSUzI1NiIsImtpZCI6IjU1NGE3NTQ3Nzg1ODdjOTRjMTY3M2U4ZWEyNDQ2MTZjMGMwNDNjYmMiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiRENQVSIsIm9yZ2FuaXNhdGlvbiI6ImNoZW5uYWktZGNwdTEiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZXVkYWVtb24tMjBhNWUiLCJhdWQiOiJldWRhZW1vbi0yMGE1ZSIsImF1dGhfdGltZSI6MTU5NjM1NjgxOCwidXNlcl9pZCI6Ilc2S3FDZlp1V0xWUkpsZGNMVWJGTTdOYXRqNDIiLCJzdWIiOiJXNktxQ2ZadVdMVlJKbGRjTFViRk03TmF0ajQyIiwiaWF0IjoxNTk2MzU2ODE4LCJleHAiOjE1OTYzNjA0MTgsImVtYWlsIjoicXdlMTIzMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicXdlMTIzMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Hy2fLJm4VjzsQtNlnjCDN-gkA71pYbGrUf79sWIQp_g6mVGRNe-nuKrvvk9HlOT_iKjhWVpqtUYH0pqvVXXT4cSqCjircF22qSXb-MTcZg9SidgY_4vYm82rzYwtVYix-Wcaoxnza2vC2QYCUSlFNCO_B9c4WwY0IisE1fhsITsWmjm7FaIf4x3QZwaLaSJo64YKVrROPns_wJ--4HXZ6CD10bD3QAa-yjRdLq6UkoeVHi6we0APA6dXf9_MhgoTc4w1TyrwTLlHoVxMK2-sSkKOpTJDt7260KEpNXikJWJt2PYLWEJBnuTdvtWc4b5nv7-I4jG8LDaN_1H_r9dtkg";
    axios.defaults.headers['Authorization'] = `Bearer ${token}`;
    let response=await axios.get('/message',
    {
      params:{ user1 : "chennai-dcpu1", user2 : this.state.organisation }
    })
    console.log(response.data)

    this.setState(state => ({
      message:response.data.final
    }));
  }

	render() {
    
    let mesList=this.state.message.map(mess1 => (
      <div>
        <p>Sender: {mess1.sender}</p>
        <p>Message:{mess1.message}</p>
        <br />
      </div>)
    );

		return (
			<div>
				
					<br />
				
        <button onClick={this.onDistrictLookUpHandler}>Enter Message</button>
				
				{this.state.data && (
					
          <div>
						<div className='center py-2'>
							<label className='pr-4' htmlFor='role'>
								Select your role
							</label>
							<select
								className='border-2'
								value={this.state.role}
								onChange={this.onSelectInputHandler}
								name='role'
								id='role'>
								<option value='DCPU'>DCPU</option>
								<option value='CCI'>CCI</option>
								<option value='CWC'>CWC</option>
								<option value='PO'>PO</option>
							</select>{' '}
						</div>

						<div className='center py-2'>
							<label className='pr-4' htmlFor='organisation'>
								Choose the name of your Organisation
							</label>
							<select
								className='border-2'
								value={this.state.organisation}
								onChange={this.onInputChangeHandler}
								name='organisation'
								id='organisation'>
								{this.state.data
									? this.state.data[this.state.role].map(
											(el) => {
												if (this.state.role === 'PO') {
													return (
														<option value={el.id}>
															{el.name}
														</option>
													);
												}
												return (
													<option value={el.id}>
														{el.id}
													</option>
												);
											}
									  )
									: null}
							</select>
						</div>
            <br />
            <textarea
              className='border-2 ml-2'
              rows="10" cols="50"
							id='mesEnter'
							name='mesEnter'
							onChange={this.onInputChangeHandler}
							value={this.state.mesEnter}
							type='text'
						/>
            <br />
						<div className='center py-2'>
							<button
								className='text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blue-500 active:bg-blue-600 uppercase text-sm shadow hover:shadow-lg'
								onClick={this.handleSubmit}>
								submit message
							</button>
						</div>
            <br />
          <button onClick={this.fetchMessage}>Fetch Message</button>
          {mesList}
					</div>
				)}
        
			</div>
		);
	}
}

export default App;