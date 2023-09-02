import Input from "../filter";

const brandfilter = () => {
  return (
    <div className="mt-4">
      <h3>Category</h3>
      <Input name={" smartphones"} test={"test2"} value={"smartphones"} serchFilter="category"/>
      <Input name={" laptops"} test={"test2"} value={"laptops"} serchFilter="category"/>
      <Input name={" fragrances"} test={"test2"} value={"fragrances"}  serchFilter="category"/>
      <Input name={" skincare"} test={"test2"} value={"skincare"} serchFilter="category"/>
      <Input name={" groceries"} test={"test2"} value={"groceries"} serchFilter="category"/>
      <Input name={" home-decoration"} test={"test2"} value={"home-decoration"} serchFilter="category"/>
    </div>
  );
};

export default brandfilter;
