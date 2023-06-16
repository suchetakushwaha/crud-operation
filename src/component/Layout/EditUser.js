import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditUser(props) {
  const [show, setShow] = useState(false);
  const [input, setInputs] = useState({});

  const[cureentname,setCureentName] = useState()
  const[curremail,setCurremail] =useState()


  const handleClose = () => setShow(false);



  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleUpdate =()=>{
    console.log(input, 'index:' ,localStorage.getItem('editindex'))

    const _data = props.data.map((usedata, internalIndex)=>{

        if(internalIndex == localStorage.getItem('editindex'))
        {
          return input
        }
      else
      {
          return usedata
      }

      

})


setShow(false);
props.refresh ? props.setRefresh(false):props.setRefresh(true)

   localStorage.setItem('items',JSON.stringify(_data))
    
  //  console.log(_data)



  }
  const handleEdit =(itemindex)=>{
    localStorage.setItem('editindex',itemindex)
    setShow(true)
    setCureentName(localStorage.getItem(JSON.parse(('editindex',itemindex))))
    setCurremail(localStorage.getItem(JSON.parse(('editindex',itemindex))))


  }

  return (
    <>
      <Button variant="primary" onClick={()=>handleEdit(props.index)}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="form-group mb-4">
              <label for="exampleInputEmail1" className="mb-2">
                Name:
              </label>
              <input
                type="text"
                name="name"
                class="form-control m-10"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
                onChange={handleChange}
                value={cureentname}
            required  />
            </div>
            <div class="form-group ">
              <label for="exampleInputPassword1" className="mb-2">
                Email:
              </label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
                onChange={handleChange}
                value={curremail}
            required  />
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditUser;
