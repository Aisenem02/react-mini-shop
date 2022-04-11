

function App() {
  const [basket,setBasket]=React.useState([])
  
  return (
    <div className="App">
      <div className="product-list" addToBasket={addToBasket}>
      {data.map((el) => (
          <button
            className="product"
            key={el.id}
            onClick={() => addToBasket(el)}
          >
            <div>{el.title}</div>
            <div>Цена : {el.price}</div>
          </button>
        ))}
      </div>
      <div className="basket">
        <div className="total">
          <span>Итого:</span>
          <span>0 c</span>
        </div>
        <div>
          <button className="product" >
            <div>Название</div>
            <div>Цена c</div>
          </button>
        </div>
      </div>
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
