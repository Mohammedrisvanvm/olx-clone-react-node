import React, { Fragment, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { toast } from "react-toastify";

const Create = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const submitHandler=async (e)=>{
    e.preventDefault()
validationErr()

let { data } = await axios.post('/add-product', { image, name, category, price, description, userId: user.details._id }, {
  headers: {
    'content-type': 'multipart/form-data'
  }
})
  }
  const validationErr=()=>{
    if (
      name.replaceAll(" ", "") === "" ||
      category.replaceAll(" ", "") === "" ||
      price.replaceAll(" ", "") === "" ||
      !image

    ) {
      toast.error('fill data')
      
    }
    
    return true;
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="input"
              type="number"
              id="fname"
              name="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
          </form>
          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ""}
          ></img>
          <form>
            <br />
            <input
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />

            <br />
            <button onClick={submitHandler}  className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
