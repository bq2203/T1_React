import { useEffect, useState } from 'react'

export const Rickandmorty = () => {
  // Hook para cambio de estado
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');   // texto del buscador
  const [page, setPage] = useState(1);        // pagina actual
  const [totalPages, setTotalPages] = useState(1); // total de paginas
  const [debouncedSearch, setDebouncedSearch] = useState(''); // busqueda "con espera"
  const [message, setMessage] = useState('');  // mensajes de error

  // Espera 500 ms despues de que dejas de escribir para actualizar la busqueda
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  // Hook para el efecto: se ejecuta cuando cambia la busqueda (ya con espera) o la pagina
  useEffect(() => {
    async function getCharacters() {
      try {
        setMessage('');
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${debouncedSearch}`);

        // Si no encuentra nada, la API responde con error
        if (!response.ok) {
          setCharacters([]);
          setTotalPages(1);
          setMessage(response.status === 429
            ? 'Demasiadas peticiones, espera un momento e intenta de nuevo'
            : 'No se encontraron personajes');
          return;
        }

        const data = await response.json();
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      } catch (error) {
        setCharacters([]);
        setMessage('No se pudo conectar con la API, intenta de nuevo en un momento');
      }
    }
    getCharacters();
  }, [debouncedSearch, page]);

  // Cuando escribes en el buscador, vuelve a la pagina 1
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <div className="container">
      <h1>Consumo API Rick y Morty</h1>

      {/* Buscador */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar personaje..."
        value={search}
        onChange={handleSearch}
      />

      {/* Lista de personajes */}
      {message && <div className="alert alert-warning">{message}</div>}

      <div className="row row-cols-3 row-cols-md-4 row-cols-lg-6 g-2">
        {characters.map((character) => (
          <div className="col" key={character.id}>
            <div className="card h-100 shadow-sm">
              <img src={character.image} className="card-img-top" alt={character.name} />
              <div className="card-body text-center p-1">
                <p className="card-title small fw-bold mb-0">{character.name}</p>
                <p className="card-text mb-1" style={{ fontSize: '0.75rem' }}>{character.species}</p>
                <span className={`badge ${
                  character.status === 'Alive' ? 'bg-success' :
                  character.status === 'Dead' ? 'bg-danger' : 'bg-secondary'
                }`}>
                  {character.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Paginacion */}
      <div className="d-flex justify-content-center align-items-center gap-3 my-3">
        <button
          className="btn btn-primary"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Anterior
        </button>

        <span>Pagina {page} de {totalPages}</span>

        <button
          className="btn btn-primary"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}