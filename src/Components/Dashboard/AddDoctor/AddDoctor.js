import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = (e) => {
      const newInfo = {...info};
      newInfo[e.target.name] = e.target.value;
      setInfo(newInfo);
      console.log(info);
    }
    const handleFile = (e) => {
        const img = e.target.files[0];
        setFile(img)

    }
    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('file',file)
        formData.append('name',info.name);
        formData.append('email',info.email)
        axios.post('http://localhost:5000/addDoctor',formData)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

    }
    return (
        <section className="container-fluid row" style={{ backgroundColor: "#F4FDFB" }}>
            <div style={{ margin: "0", padding: "0", }} className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <h4>Add doctor</h4>
                <form onSubmit={handleSubmit}>
                    <div class="form-group mb-3">
                        <label for="name">Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" id="name" name="name" placeholder="Name" />
                    </div>
                    <div class="form-group mb-3">
                        <label for="email">Enter email</label>
                        <input onBlur={handleBlur} type="email" class="form-control" id="email" name="email" placeholder="Enter email" />
                    </div>
                    <div class="form-group mb-3">
                        <label className='d-block' for="exampleFormControlFile1">Upload file</label>
                        <input name='file' onChange={handleFile} type="file" class="form-control" id="exampleFormControlFile1"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        </section>
    );
};

export default AddDoctor;