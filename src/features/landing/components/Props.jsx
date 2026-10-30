const people = [
  {
    name: 'Katsuko Saruhashi',
    imageId: 'YfeOqp2',
    size: 120,
  },
  {
    name: 'Aklilu Lemma',
    imageId: 'OKS67lh',
    size: 90,
  },
  {
    name: 'Lin Lanying',
    imageId: '1bX5QH6',
    size: 60,
  },
]

function getImageUrl(person) {
  return `https://i.imgur.com/${person.imageId}s.jpg`
}

function Avatar({ person, size }) {
  return (
    <img
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
      className="rounded-circle"
      loading="lazy"
      decoding="async"
      style={{ objectFit: 'cover' }}
    />
  )
}

export const Props = () => {
  return (
    <main className="container py-5">
      <div className="d-flex flex-wrap align-items-center gap-4 rounded bg-body-tertiary border border-secondary-subtle shadow-sm p-4">
        {people.map((person) => (
          <Avatar key={person.name} person={person} size={person.size} />
        ))}
      </div>
    </main>
  )
}