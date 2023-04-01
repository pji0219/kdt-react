import Item from "./Item";

function List({ data }) {
  return (
    <ul>
      {data.map(item => (
        <Item key={item.id} text={item.text} />
      ))}
    </ul>
  );
}

export default List;
