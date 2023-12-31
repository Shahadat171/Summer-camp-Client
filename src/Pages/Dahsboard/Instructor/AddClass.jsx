import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.photo.value;
    const instructorName = form.instructorName.value;
    const instructorEmail = form.email.value;
    const seats = form.seats.value;
    const price = parseFloat(form.price.value);
    const status = "pending";
    const newClass = {
      name,
      image,
      instructorName,
      seats,
      instructorEmail,
      price,
      status,
    };
    console.log(newClass);

    fetch("https://assignment-12-server-puce.vercel.app/addedClass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Added", "Your Class has been Successfully", "success");
        }
      });
  };

  return (
    <div
      style={{ paddingLeft: "15%" }}
      className="hero place-items-start min-h-screen bg-base-200"
    >
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left"></div>
        <div
          style={{ minWidth: "650px" }}
          className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <h1 className="text-3xl mt-5 text-center font-bold font-serif">
            Add Your Class
          </h1>
          <div className="card-body ">
            <form onSubmit={handleAddToy}>
              <div className="grid gap-3 grid-cols-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Class Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="photo"
                    name="photo"
                    placeholder="Photo Url"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Instructor Name</span>
                  </label>
                  <input
                    defaultValue={user.displayName}
                    type="text"
                    name="instructorName"
                    placeholder="Your name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Instructor Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user.email}
                    placeholder="Your Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available Seats</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Category"
                    name="seats"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className=" w-full mt-6">
                <input
                  type="submit"
                  value="Add Your Class"
                  className="btn w-full btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
