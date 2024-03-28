// import { Fragment } from "react/jsx-runtime";
// So if you remove Frangment keyword then use  <> </> instead for short-cut
// Fragment;
function ListGroup() {
  let items = ["Bengluru", "Delhi", "Pune", "Hyderabad", "Chennai"];
  // items = [];
  return (
    // <Fragment>
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No Items Found</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
    // </Fragment>
  );
}
export default ListGroup;
