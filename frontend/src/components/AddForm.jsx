
function AddForm() {

    function submitHandler(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData.entries());
    const returnObj = { ...formObj, deposit: Number(formObj.deposit), credit: Number(formObj.credit)};
    console.log(returnObj);

    }

    return (
      <div>
        <form onSubmit={submitHandler}>

            <label htmlFor="name">Name</label>
            <input type="text" name="name" required/>

            <label htmlFor="deposit">Deposit</label>
            <input type="number" name="deposit" required/>

            <label htmlFor="credit">Credit</label>
            <input type="number" name="credit" required/>

            <button type="submit">Add User</button>
        </form>
      </div>
    )
  }
  
  export default AddForm
  