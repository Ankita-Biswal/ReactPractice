function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <span class="badge text-bg-success kg-button">Add</span>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
