import { useEffect, useState } from "react";
import { Button, Grid, Typography, TextField, Input } from "@mui/material";
import { PhoneIphone } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core/styles";

import Copyright from "../components/Copyright";
import LogoIcon from "../components/Icons/LogoIcon";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/loginActions';
import { redirect, Navigate } from "react-router-dom";
import logo from '../assets/images/logo.jpeg';

export default function LoginPage() {
	const dispatch = useDispatch();
  const [values, setValues]=useState({
    email: '',
    password:''
  })
	const [erros, setErrors] = useState({
		email: false,
		password: false,
	});
	const { email, password } = values;
  const handleChange = (e) => {
    console.log(e.currentTarget.id);
    console.log(e.currentTarget.value);
    setValues({ ...values, [e.currentTarget.id]: e.currentTarget.value });
  };
  const handleSubmit = e => {
    console.log('aqui');
		e.preventDefault();
		if (email === '' && password === '') {
			setErrors({
				email: true,
				password: true,
			});
			return;
		} else if (email === '') {
			setErrors({
				email: true,
				password: false,
			});
		} else if (password === '') {
			setErrors({
				email: false,
				password: true,
			});
			return;
		}
		dispatch(login(values.email, values.password));
    console.log('aquidos');
    redirect(<Navigate to='/home' />);
	};
  return (
    <Grid container className="login__page-container">
      <Grid item className="login__welcome" xs={12} md={6}>
        <div className="derecho">
					{/* <img src={logo} className="App-logo" alt="logo" /> */}
        </div>
        <form className="form">
        <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={handleChange}
            type="text"
          />
           <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={handleChange}
            type="password"
          />
          <br/>
<br/>
<br/>
<br/>
          <Button
            fullWidth
            variant="contained-primary"
            // startIcon={<PhoneIphone />}
            onClick={handleSubmit}
          >
            Ingresar
          </Button>
        </form>

        <Copyright sx={{ mt: 5 }} />
      </Grid>
    </Grid>
  );
}
