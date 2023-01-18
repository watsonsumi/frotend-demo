import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import {
	Container,
	Button,
	Grid,
	Typography,
	FormControl,
	InputLabel,
	CardContent, Box
  } from "@mui/material";
  import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

  import { PhoneIphone } from "@mui/icons-material";
  
  import Copyright from "../components/Copyright";
  import LogoIcon from "../components/Icons/LogoIcon";
  import CustomInput from "../components/Icons/CustomInput";
  import { useSelector } from 'react-redux';
import { register } from '../redux/actions/registerActions';
import { axiosFetch, axiosFetchEmail } from '../config/url/url';
import SweetAlert from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from 'axios';
const MySwal = withReactContent(SweetAlert);
const HomePage = () => {

const estado = JSON.parse(localStorage.getItem('data'));
console.log(estado);
console.log(estado.id);
const [values, setValues]=useState({
  cliente: '',
  nropedido:'',
	telefono:'',
	idcliente:'',
	email:'',
	receptor:'',
	fepedido:'',
	feinicio:'',
	fefinalizacion:'',
	autorizado:'',
	descripcion:''
  })
  // const [values, setValues]=useState({
  //   cliente: '',
  //   nropedido:'',
  //   telefono:'',
  //   idcliente:'',
  //   email:'',
  //   receptor:'',
  //   fepedido:'',
  //   feinicio:'',
  //   fefinalizacion:'',
  //   autorizado:'',
  //   descripcion:''
  //   })
	useEffect(() => {
		// localStorage.setItem('translate', translate);
    setValues({ ...values, cliente: estado.nombre, nropedido: estado.nropedido,
      telefono: estado.telefono,
      idcliente: estado.idcliente,
      email: estado.email,
      receptor: estado.receptor,
      fepedido: estado.fepedido,
      feinicio: estado.feinicio,
      fefinalizacion: estado.fefinalizacion,
      autorizado: estado.autorizado,
      descripcion: estado.descripcion});
	}, []);

  const handleChange = (e) => {
    console.log(e.currentTarget.id);
    console.log(e.currentTarget.value);
    setValues({ ...values, [e.currentTarget.id]: e.currentTarget.value });
  };
  console.log(values.cliente);
  const handleSubmit = e => {
    console.log('aqui');
		e.preventDefault();
    const dataInput = {  cliente: values.cliente,
      nropedido: values.nropedido,
      telefono: values.telefono,
      idcliente: values.idcliente,
      email: values.email,
      receptor: values.receptor,
      fepedido: values.fepedido,
      feinicio: values.feinicio,
      fefinalizacion: values.fefinalizacion,
      autorizado: values.autorizado,
      descripcion: values.descripcion,

    }

    try {
    console.log(dataInput);
  //  const { data } =  axiosFetch.post('/api/registro', dataInput);
        let res =  axiosFetch.post('/api/registro', dataInput);
        // let response =  JSON.stringify(res.data);

        console.log(res.message);
   MySwal.fire({
    allowOutsideClick: false,
    allowEscapeKey: false,
    title: "Se envio Email exitosamente...",
    icon: "success", 
   
    onOpen: async () => {
      MySwal.showLoading();
      setValues({ ...values, cliente: '', nropedido: '',
      telefono: '',
      idcliente: '',
      email: '',
      receptor: '',
      fepedido: '',
      feinicio: '',
      fefinalizacion: '',
      autorizado: '',
      descripcion: ''});
    },
  });
  setValues({ ...values, cliente: '', nropedido: '',
  telefono: '',
  idcliente: '',
  email: '',
  receptor: '',
  fepedido: '',
  feinicio: '',
  fefinalizacion: '',
  autorizado: '',
  descripcion: ''});
} catch (e) {
  MySwal.close();
}
  }
		

	return (
		<Container
			disableGutters={true}
			maxWidth={false}
			sx={{
				backgroundColor: 'rgba(91, 153, 191, 0.1)',
				padding: '58px 64px 41px 32px',
				margin: '0',
			}}
			className='container_Home'
		>
			<Grid
      // container
      wrap="nowrap"
      className="home_orders"
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "0px",
        padding: "24px 0 32px 24px",
        boxShadow: "0px 1px 12px rgba(0, 0, 0, 0.06)",
      }}
    >
      {/* <Grid item xl={4} lg={4} md={15} sm={24} xs={3}> */}
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: "700",
            color: "rgba(40, 40, 40, 0.8)",
            textAlign: "center",
          }}
        >
          Servicio Solicitud
        </Typography>
        <form className="form">
          <CardContent>
            {/* <Grid item container spacing={3} justify="center">
              <Grid item xs={32} sm={6} md={16}> */}
                  <Grid
              container
              wrap='nowrap'
              columnGap={{ xs:1, lg: 9 }}
              className='home_products_record'
          >
                <CustomInput
                  labelText="Nombre del cliente"
                  id="cliente"
                  name="cliente"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  type="text"
				          defaultValue={estado.nombre}//'Sumilda Bengolea'//{values.cliente}
                  handleChange={handleChange}
                />
                <CustomInput
                  labelText="NÚMERO DE PEDIDO"
                  id="nropedido"
                  name="nropedido"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  type="text"
				//   defaultValue={values.nropedido}
                  handleChange={handleChange}
                />
                </Grid>
              {/* </Grid>
            </Grid> */}
          </CardContent>
          <CardContent>
            <Grid 
              container
              wrap='nowrap'
              columnGap={{ xs:1, lg: 9 }}
              // className='home_products_record'
              >
              <CustomInput
                  labelText="Teléfono del cliente"
                  id="telefono"
                  name="telefono"
                  formControlProps={{
                    fullWidth: true
                  }}
				          defaultValue={estado.telefono}//{931741680}
                  handleChange={handleChange}
                  type="text"
                />
                <CustomInput
                  labelText="Identidad de Cliente"
                  id="idcliente"
                  name="idcliente"
                  formControlProps={{
                    fullWidth: true,
                  }}
				          defaultValue={estado.idcliente}//"100001"
                  type="text"
                  handleChange={handleChange}
                />
            </Grid>
          </CardContent>
          <CardContent>
            <Grid 
              container
              wrap='nowrap'
              columnGap={{ xs:1, lg: 9 }}
              className='home_products_record'>
              <CustomInput
                  labelText="Email de cliente"
                  id="email"
                  name="email"
                  formControlProps={{
                    fullWidth: true
                  }}
				          defaultValue={estado.email}//"macu05b@gmail.com"
                  handleChange={handleChange}
                  type="text"
                />
                <CustomInput
                  labelText="Pedido recibido por"
                  id="receptor"
                  name="receptor"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  type="text"
                  handleChange={handleChange}
                />
            </Grid>
          </CardContent>
          <CardContent>
            <Grid 
              container
              wrap='nowrap'
              columnGap={{ xs:4, lg: 4 }}
              className='home_products_record'>
              <CustomInput
                  labelText="Fecha pedido"
                  id="fepedido"
                  formControlProps={{
                    fullWidth: true
                  }}
                  handleChange={handleChange}
                  type="date"
                />
                <CustomInput
                    labelText="Fecha prevista inicio"
                    id="feinicio"
                    formControlProps={{
                      fullWidth: true
                    }}
                    handleChange={handleChange}
                    type="date"
                  />
                <CustomInput
                  labelText="Fecha finalizacion prevista"
                  id="fefinalizacion"
                  name="fefinalizacion"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  type="date"
                  value={"Hola"}
                  onChange={handleChange}
                />
            </Grid>
          </CardContent>
          <CardContent>
            <Grid 
              container
              wrap='nowrap'
              columnGap={{ xs:1, lg: 9 }}
              className='home_products_record'>
              <CustomInput
                  labelText="Trabajos autorizados"
                  id="autorizado"
                  formControlProps={{
                    fullWidth: true
                  }}
                  handleChange={handleChange}
                  type="text"
                />
                <CustomInput
                  labelText="Firma"
                  id="email"
                  name="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  type="text"
                  onChange={handleChange}
                />
            </Grid>
          </CardContent>
          <CardContent>
            <Grid 
              container
              wrap='nowrap'
              columnGap={{ xs:1, lg: 9 }}
              className='home_products_record'>
              <CustomInput width='inherit'
                  labelText="Trabajo descripcion"
                  id="descripcion"
                  formControlProps={{
                    fullWidth: true
                  }}
                  handleChange={handleChange}
                  type="text"
                />
            </Grid>
          </CardContent>
          <Button
            fullWidth
            // variant="contained-primary"
            // startIcon={<PhoneIphone />}
            onClick={handleSubmit} 
            sx={{
              // fontSize: "32px",
              fontWeight: "700",
              color: "rgba(40, 40, 40, 0.8)",
              textAlign: "center",
              background: 'black',
              color: 'aliceblue',
              borderRadius: '30px',
              padding: '10px',
            }}
          >
            Enviar
          </Button>
        </form>
      {/* </Grid> */}
      </Grid>
		</Container>
	);
};

export default HomePage;
