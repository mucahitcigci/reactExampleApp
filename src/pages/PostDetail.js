import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./postDetail.css";
import { MdCall } from "@react-icons/all-files/md/MdCall";
import { FaCity } from "react-icons/fa";
import { BiStreetView } from "react-icons/bi";
import { TbNumbers } from "react-icons/tb";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

function PostDetail() {
  const location = useLocation();
  const gonderi = location.state.postBilgileri;

  const [image, setImage] = useState([]);
  const [name, setName] = useState(gonderi.name);
  const [street, setStreet] = useState(gonderi.address.street); // sadece olduğu sayfada ise useState kullanılır
  const [city, setCity] = useState(gonderi.address.city);

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

  //  Update Function start
  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateStreet = (e) => {
    setStreet(e.target.value);
  };
  const updateCity = (e) => {
    setCity(e.target.value);
  };

  // Update Function Finish
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
          <EditTextarea
            onChange={updateName}
            value={name}
            defaultValue={name}
          />
          <h3 className="my-3">Edit Text Area</h3>
          <ul className="listUl">
            <li>
              {" "}
              <BiStreetView />
              <EditText
                showEditButton
                onChange={updateStreet}
                value={street}
                defaultValue={street}
              />
            </li>
            <li>
              <FaCity />
              <EditText
                showEditButton
                onChange={updateCity}
                value={city}
                defaultValue={city}
              />
            </li>
            <li>
              <TbNumbers /> {gonderi.address.zipcode}
            </li>
            <li>
              {" "}
              <MdCall /> {gonderi.phone}{" "}
            </li>
          </ul>
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
