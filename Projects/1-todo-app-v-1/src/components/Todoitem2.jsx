function Todoitem2() {
  let todoName = "Go to college";
  let todoDate = "4/10/2023";
  return (
    <div class="container ">
      <div class="row kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <span class="badge text-bg-danger kg-button">Delete</span>
        </div>
      </div>
    </div>
  );
}
export default Todoitem2;
