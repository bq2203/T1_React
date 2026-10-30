import React from 'react'

export const Contrasena = () => {
  return (
<div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          <form className="p-4 rounded shadow-sm bg-dark border border-secondary text-light">
            <div className="text-center mb-4">
              
              <h3 className="link-light" href="#">Olvidaste tu contrasena?</h3>
              <p className="text-secondary small">
                No te preocupes, te enviaremos un correo con las instrucciones de recuperacion.
              </p>
            </div>

            <div className="mb-3">
              <label htmlFor="resetEmail" className="form-label text-light">
                Email address
              </label>
              <input 
                type="email" 
                className="form-control bg-dark text-white border-secondary" 
                id="resetEmail" 
                placeholder="name@example.com"
                aria-describedby="resetEmailHelp"
              />
              <div id="resetEmailHelp" className="form-text text-secondary">
                Escribe el correo con el que te registraste.
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Recuperar contrasena 
            </button>

            <div className="text-center">
              <a href="/login" className="text-decoration-none small text-secondary">
                &larr; Volver a log in
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
