

export default function DivaCard() {
    return (
        <div>
            <h2>{artist.name}</h2>
          <p>{artist.bio}</p>
          <Image
            src={urlFor(artist.photo)}
            alt={artist.name}
            width={200}
            height={200}
          />
          <p>{artist.genre}</p>
        </div>
    );
}