

function App() {
  const [basket,setBasket]=React.useState([])
  function addToBasket(p) {
    setBasket([...basket, p]);
  } 
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
        {basket.map((item) => (
            <button className="product">
              <div>{item.title}</div>
              <div>Цена:{item.price} сом</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
