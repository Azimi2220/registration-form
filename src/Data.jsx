import Data from "./Information";
import Question from "./Question";

export default function Products() {
  return (
    <div>
      <h1 className="text-center text-7xl font-mono">
        <span className="text-blue-900 text-8xl">2</span>KAN
      </h1>
      <hr className="mb-4"></hr>
      <div className="flex flex-wrap justify-center ">
        {Data.map((product) => (
          <Product key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
}

function Product({ product }) {
  return (
    <div className="flex flex-col m-3  rounded-lg items-center text-center justify-center w-72 hover:scale-90 shadow-md p-2  transition-all duration-500 ">
      <p className="text-lg font-bold bg-black text-white rounded-full w-7 h-7">
        {product.id}
      </p>
      <h2 className="font-thin text-base">{product.title}</h2>
      <p className=" font-serif">{product.price}$</p>
      <p className="font-bold text-gray-600">{product.description}</p>
      <p className="font-bold">{product.category}</p>
      <img src={product.image} className="h-32 w-32" />
      <button
        className="bg-black text-white w-24 rounded-md mt-2 pb-1"
        onClick={() => prompt("Pay the money first!!!")}
      >
        Buy
      </button>
    </div>
  );
}
