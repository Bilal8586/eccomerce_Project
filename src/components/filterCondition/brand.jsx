import Input from "../filter";

const brandfilter = () => {
  return (
    <div className="mt-4">
      <h3>brand</h3>
      <Input name={" Apple"} test={"test2"} value={"Apple"}/>
      <Input name={" Samsung"} test={"test2"} value={"Samsung"}/>
      <Input name={" OPPO"} test={"test2"} value={"OPPO"} />
      <Input name={" Huawei"} test={"test2"} value={"Huawei"}/>
      <Input name={" Mi"} test={"test2"} value={"Mi"}/>
      <Input name={" Vivo"} test={"test2"} value={"Vivo"}/>
    </div>
  );
};

export default brandfilter;
