export const Login = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label text-dark">
          Correo Electronico
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          Nunca compartiremos tu Email con nadie.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label text-dark">
          Contrasena
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="form-check mb-3">
        <input
          type="checkbox"
          id="exampleCheck1"
          className="form-check-input"
        />
        <label htmlFor="exampleCheck1" className="form-check-label text-dark">
          Recordar contrasena
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Ingresar
      </button>
    </form>
  )
}
