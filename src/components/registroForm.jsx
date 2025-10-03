import React, {useState} from "react";
import "./registroForm.css"

const Registro = () =>{
    const [nombre, setNombre] = useState("");
    const [rut, setRut] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    return(
    <>
    <section>
        <div class="title">
            <h1>Creación de Cuenta</h1>
        </div>
        
        <div>
            <form action="" method="" className="formulario">
                <h2>Datos</h2>

                <label htmlFor="nombre">Nombre Completo:</label>
                <input type="text" id="nombre" value={nombre} onChange={(e) =>setNombre(e.target.value)} required/>
                
                <label htmlFor="rut">RUT:</label>
                <input type="text" id="rut" value={rut} onChange={(e) =>setRut(e.target.value)} required/>

                <label htmlFor="telefono">Telefono:</label>
                <input type="tel" id="telefono" value={telefono} onChange={(e) =>setTelefono(e.target.value)} required/>
                
                <label for="direccion">Dirección:</label>
                <input type="text" id="direccion" value={direccion} onChange={(e) =>setDireccion(e.target.value)} required/>

                <label htmlFor="email">Correo:</label>
                <input id="email" type="email" value={email} onChange={(e) =>setEmail(e.target.value)} required/>

                <label htmlFor="password">Contraseña:</label>
                <input id="password" type="password" value={password} onChange={(e) =>setPassword(e.target.value)} required/>

                <button type="submit">Registrar</button>
            </form>
        </div>
    </section>



    </>
    );
}
export default Registro