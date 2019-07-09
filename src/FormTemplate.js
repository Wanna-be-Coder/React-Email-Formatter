import React,{Component} from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import axios from 'axios';
import './FormTemplate.css'


class FormTemplate extends Component {
    constructor(props){
        super(props);
        this.state = {email:'',subject:'',body:''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }


        handleChange(evt){
            this.setState({[evt.target.name]:evt.target.value})
        }
        handleSubmit(evt){
            evt.preventDefault();
            console.log(this.state);
            // const data = {
            //   email:this.state.email,
            //   subject:this.state.subject,
            //   body:this.state.body,
            // }
            const url = 'http://localhost:5000/api/nodemailer';
             axios.post( url, this.state)
            .then((res)=> {
              console.log(res);
              this.setState({email:'',subject:'',body:''});
            })
            .catch(err => {console.log('not sent'+err)});
  
        }
      

    render(){
    
        return(
            <div className="container">
                <div>
                <form onSubmit={this.handleSubmit}> 

          
        <TextInput name='email'  title='Email' value={this.state.email} onChange={this.handleChange} type="text" />
        <TextInput name='subject'  title='Subject' value={this.state.subject} onChange={this.handleChange} type="text" />
        <TextArea name="body" title="Write Your Email Here" value={this.state.body} onChange={this.handleChange} />
          
   
      {/* <div className="row">
        <div className="input-field col s12">
          <textarea id="body" className="materialize-textarea" name="body" value={this.state.body} onChange={this.handleChange} ></textarea>
          <label htmlFor="body">Write your email here</label>
        </div>
      </div> */}


<button className="btn waves-effect waves-light" type="submit" name="action">Submit
  </button>
        
 
                </form>
                </div>
 
        </div>
 
        );
    }
}


export default FormTemplate;