import React from 'react'
import {Grid,Paper,TextField,Button} from '@material-ui/core'
import {useState,useEffect} from 'react'

const Loginform = (props) =>

{
const {setemail,setpassword} = props;
const newpaperstyle={margin:'30px auto',width:400,padding:'20px 20px'}
const h2style={margin:0,color:'green'}
const buttonstyle={color:'green',margin:'20px 5px'}
const pstyle={color:'red'}
const firstval={email:"",password:""}
const [fvalues,setV]=useState(firstval)
const [submitinit,setSubmitStatus]=useState(false)

const errormsgs={}

const changevalue = (c) => {
	const {name,value}=c.target;
	setV({...fvalues,[name]:value});
	console.log(fvalues)
}

const [ferrors,seterrors]=useState({
	emailvalid:false,
	passvalid:false,

})
const submit = (s) =>{
s.preventDefault()
if(validfields){
seterrors(validationrules(fvalues))

var len = Object.keys(errormsgs).length;
if(len==0){
setSubmitStatus(true);
}
}}


const validfields=()=>{
	if(ferrors.emailvalid || ferrors.passvalid ){
		return true;
	}
	else{
		return false;
	}
}

 
useEffect(() => {
	console.log(ferrors)
	if(Object.keys(ferrors).length === 0 && submitinit){
		console.log(fvalues)
	}
},[ferrors]);



const validationrules = (vals) =>{

const emailregex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i


if(!vals.email){
	errormsgs.email="Email is required!";
}
else if(!emailregex.test(vals.email)){
	errormsgs.email="Please enter a correct email format"
}
if(!vals.password){
	errormsgs.password="Password is required!";
}

else if(vals.password.length<8){
	errormsgs.password="Please enter a password having atleast 8 characters"
}
else if(vals.password.length>8){
	errormsgs.p1="Please enter a password having less than 8 characters"
}

return errormsgs
}

	return(
		<>
	
			<Grid>
           
				<Paper elevation={15} style={newpaperstyle}>
				<Grid>
					<h2 style={h2style}>Login Here!</h2></Grid>
					<form onSubmit={submit}>
						
						<TextField fullWidth type="email" name="email" label='Email' placeholder="Enter your email" value={fvalues.email} onChange={changevalue}/>
						<p style={pstyle}>{ferrors.email}</p>
						<TextField fullWidth type="password" name="password" label='Password' placeholder="Enter your password" value={fvalues.password} onChange={changevalue}/>
						<p style={pstyle}>{ferrors.password}</p>
					
						<Button style={buttonstyle} type='submit' variant='contained' >Submit</Button>

					</form>
				</Paper>
			</Grid> 


		

	
		</>
		)
}


 export default Loginform;