function Photos({ photos }) {
  let i = photos.slice(0, 5);
  let j = photos.slice(5, 10);

  return (
    <div className="photos">
      <h2>My photos </h2>
      <div className="photos-conteiner">
        <div className="column">
          {i.map((e) => (
            <img key={e.id} src={e.urls.regular} alt={e.id} />
          ))}
        </div>
        <div className="column">
          {j.map((e) => (
            <img key={e.id} src={e.urls.regular} alt={e.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Photos;
