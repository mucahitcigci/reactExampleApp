import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function PostDetail() {
  const location = useLocation();
  const gonderi = location.state.postBilgileri;

  const [image, setImage] = useState([]);
  const getDataPic = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos?_limit=4"
    );
    setImage(data);
    console.log(data);
  };
  useEffect(() => {
    getDataPic();
  }, []);

  return (
    <div className="container">
      <h2>Api Detail</h2>
      {/* <h3>Başlık: {postBilgileri.name}</h3>
      <h3>İçerik: {postBilgileri.email}</h3>
      {console.log(postBilgileri)} */}

      <div className="row">
        <div className="col-md-8">
          <img
            className="img-fluid"
            src="https://picsum.photos/id/61/800/600"
            alt=""
          />
        </div>

        <div className="col-md-4">
          <h3 className="my-3">{gonderi.company.name}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
            euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem,
            adipiscing in adipiscing et, interdum nec metus. Mauris ultricies,
            justo eu convallis placerat, felis enim.
          </p>
          <h3 className="my-3">User Address Details</h3>
          <ol>
            <li>{gonderi.address.street}</li>
            <li>{gonderi.address.city}</li>
            <li>{gonderi.address.zipcode}</li>
            <li>{gonderi.phone} </li>
          </ol>
        </div>
      </div>

      <h3 className="my-4">Related Projects</h3>
      <div className="row">
        {image.map((e) => {
          console.log(e);
          return (
            <div className="col-md-3 col-sm-6 mb-4">
              <a href="#">
                <img className="img-fluid" src={e.url} alt="" />
              </a>
              <p>{e.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export { PostDetail };
