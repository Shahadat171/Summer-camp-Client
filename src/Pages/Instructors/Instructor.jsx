const Instructor = ({ instructor }) => {
  const { image, name, email } = instructor;
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img
            src={image}
            alt="car!"
          />
        </figure>
        <div className="card-body bg-slate-100">
          <h2 className="card-title">Name: {name}</h2>
          <p>Email: {email}</p>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
