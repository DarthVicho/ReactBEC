import React, {useState} from "react";
import "./loginForm.css"
import { useNavigate } from "react-router-dom";

const LoginForm = () =>{
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [showPassword, setShowPassword] = useState("false");
    const navigate = useNavigate();
    const handleSubmit = () => {

        if (email.endsWith('@gmail.com')) {
            //Redirecciona a el html de usuarios
            navigate("/user");
        }

        //Si termina con @hotmail.com
        else if(email.endsWith('@hotmail.com')){
            navigate("/user");
        }

        //PARA LA SECCION DE BIBLIOTECARIOS
        //Si termina en @bibliotecarios.bec
        else if (email.endsWith('@bibliotecarios.bec')) {
            //Redirecciona a el html de bibliotecarios
            navigate("/bibliotecario");
        }

        //PARA LA SECCION DE ADMINISTRATIVOS
        //Si termina en @administrativos.bec
        else if (email.endsWith('@administrativos.bec')) {
            //Redirecciona al html de administrativos
            navigate("/admin")
        }

        //Si el correo no coincide con ninguno de los tipos
        else {
            alert ("Esta malo, intenta de nuevo");
            }
        }

    return(
        <>
        <section>
            <h1 className="title">Bienvenido a BEC </h1>
            <form onSubmit={handleSubmit} className="formulario">
                <h2> Inicie Sesión</h2>
                <div>
                    <label htmlFor="email">Correo:</label>
                    <input id="email" type="email" value={email} onChange={(e) =>setEmail(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input id="password" type="password" value={password} onChange={(e) =>setPassword(e.target.value)} required/>
                </div>
                <button type="submit">Ingresar</button>
            </form>
            <div>
                <div className="texto">
                    <p>¿No tienes cuenta?<a href="">Registrate Aquí</a></p>
                </div>
            </div>
        </section>
        </>
        );
    }

export default LoginForm;