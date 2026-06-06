import { useState } from "react";
import HomeCard from "../components/HomeCard";
import "./Login.scss";

function Login() {
  const [vista, setVista] = useState("inicio");
  const [seccion, setSeccion] = useState("nuevo");

  return (
    <main className="home-page">
      {vista === "inicio" && (
        <section className="contenedor">
          <section className="panel-blanco">
            <header className="titulo">
              <h1>Ingresa</h1>
            </header>

            <div className="opciones">
              <HomeCard
                titulo="USUARIO"
                descripcion="Reportar falla o solicitud."
                onClick={() => {
                  setVista("usuario");
                  setSeccion("nuevo");
                }}
              />

              <HomeCard
                titulo="ADMIN"
                descripcion="Gestionar tickets."
                onClick={() => alert("Vista administrador pendiente")}
              />
            </div>

            <button className="ayuda" type="button">
              Ayuda
            </button>
          </section>

          <section className="panel-azul">
            <div className="texto-azul">
              <h2>BIENVENIDO</h2>
              <p>Accede al sistema para registrar y revisar solicitudes de mantenimiento.</p>
            </div>
          </section>
        </section>
      )}

      {vista === "usuario" && (
        <section className="ticket-panel">
          <header className="ticket-header">
            <div className="perfil">
              <h2>USUARIO</h2>
              <p>Perfil y cuenta</p>
            </div>

            <div className="estado-header">
              <div>
                <strong>Estado actual:</strong>
                <p>Pendiente</p>
              </div>

              <div>
                <strong>Creado:</strong>
                <p>06/06/2026 16:20</p>
              </div>

              <div>
                <strong>Última actualización:</strong>
                <p>06/06/2026 16:20</p>
              </div>

              <div>
                <strong>ID del ticket:</strong>
                <p>#TK-2024-00125</p>
              </div>
            </div>
          </header>

          <section className="ticket-body">
            <aside className="menu-lateral">
              <button type="button" onClick={() => setSeccion("registro")}>
                Registro de comunicaciones
              </button>

              <button type="button" onClick={() => setSeccion("nuevo")}>
                Nuevo ticket
              </button>

              <button type="button" onClick={() => setSeccion("ayuda")}>
                Ayuda
              </button>

              <button type="button" onClick={() => setVista("inicio")}>
                Volver
              </button>
            </aside>

            <section className="contenido">
              {seccion === "nuevo" && (
                <form className="formulario">
                  <h3>Nuevo ticket</h3>
                  <p>Completa el formulario para crear tu solicitud.</p>

                  <div className="fila">
                    <div>
                      <label htmlFor="nombre">Nombre</label>
                      <input id="nombre" type="text" placeholder="Nombre usuario" />
                    </div>

                    <div>
                      <label htmlFor="tipo">Tipo de falla</label>
                      <select id="tipo">
                        <option>Selecciona el tipo de falla</option>
                        <option>Iluminación</option>
                        <option>Climatización</option>
                        <option>Enchufes</option>
                        <option>Puertas</option>
                      </select>
                    </div>
                  </div>

                  <label htmlFor="zona">Zona</label>
                  <select id="zona">
                    <option>Selecciona la zona o área</option>
                    <option>Cajas</option>
                    <option>Pasillo</option>
                    <option>Bodega</option>
                    <option>Entrada</option>
                  </select>

                  <label htmlFor="descripcion">Descripción del problema</label>
                  <textarea
                    id="descripcion"
                    rows="4"
                    placeholder="Describe detalladamente el problema"
                  ></textarea>

                  <label htmlFor="archivo">Adjuntar archivo</label>
                  <input id="archivo" type="file" />

                  <div className="acciones">
                    <button type="reset">Limpiar</button>
                    <button type="submit" className="crear">
                      Crear ticket
                    </button>
                  </div>
                </form>
              )}

              {seccion === "registro" && (
                <section className="registro">
                  <h3>Registro de comunicaciones</h3>

                  <article>
                    <strong>Soporte técnico</strong>
                    <span>06/06/2026 16:20</span>
                    <p>Solicitud recibida. El equipo revisará la información enviada.</p>
                  </article>

                  <article>
                    <strong>Usuario</strong>
                    <span>06/06/2026 16:20</span>
                    <p>Se adjunta evidencia del problema.</p>
                    <small>captura_pantalla.png</small>
                  </article>
                </section>
              )}

              {seccion === "ayuda" && (
                <section className="ayuda-box">
                  <h3>Ayuda</h3>
                  <p>
                    Completa los datos del formulario, describe el problema y adjunta
                    una imagen si es necesario. Luego presiona Crear ticket.
                  </p>
                </section>
              )}
            </section>
          </section>
        </section>
      )}
    </main>
  );
}

export default Login;
