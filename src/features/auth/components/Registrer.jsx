export const SignUp = () => {
  return (
    <form>
        <div className="row g-3 mb-3">
            <div className="md:col-6">
                <label htmlFor="signUpFirstName" className="form-label text-dark">Primer Nombre</label>
                <input type="text" className="form-control" id="signUpFirstName"/>
            </div>
            <div className="md:col-6">
                <label htmlFor="signUpLastName" className="form-label text-dark">Segundo Nombre</label>
                <input type="text" className="form-control" id="signUpLastName"/>
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor="signUpEmail" className="form-label text-dark">Correo Electronico</label>
            <input type="email" className="form-control" id="signUpEmail" aria-describedby="signUpEmailHelp"/>
            <div id="signUpEmailHelp" className="form-text">Nunca compartiremos tu Email con nadie.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="signUpPassword" className="form-label text-dark">Contrasena</label>
            <input type="password" className="form-control" id="signUpPassword"/>
        </div>
        <div className="mb-3">
            <label htmlFor="signUpConfirmPassword" className="form-label text-dark">Confirmar contrasena</label>
            <input type="password" className="form-control" id="signUpConfirmPassword"/>
        </div>
        <div className="form-check mb-3">
            <input type="checkbox" id="signUpTerms" className="form-check-input"/>
            <label htmlFor="signUpTerms" className="form-check-label text-dark">Estoy de acuerdo con los termino y condiciones</label>
        </div>
        <button type="submit" className="btn btn-primary">Crear cuenta</button>
    </form>
  )
}