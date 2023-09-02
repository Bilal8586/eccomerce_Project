import Input from  '../filter'

const pricefilter = ()=>{
    return(
        <div>
            <h1>price</h1>
        <Input name={" under $100"} test={"test1"} value={100}  serchFilter="price"/>
        <Input name={" $100 - $200"} test={"test1"} value={200} serchFilter="price"/>
        <Input name={" $200 - $300"} test={"test1"}  value={300} serchFilter="price"/>
        <Input name={" $300 - $500"} test={"test1"}  value={500} serchFilter="price"/>
        <Input name={" < $400"} test={"test1"}  value={10000} serchFilter="price"/>
        </div>
    )
}

export default pricefilter