import Input from  '../filter'

const pricefilter = ()=>{
    return(
        <div>
            <h1>price</h1>
        <Input name={" under $100"} test={"test1"} value={100}/>
        <Input name={" $100 - $200"} test={"test1"} value={200}/>
        <Input name={" $200 - $300"} test={"test1"}  value={300}/>
        <Input name={" $300 - $400"} test={"test1"}  value={400}/>
        <Input name={" < $400"} test={"test1"}  value={10000}/>
        </div>
    )
}

export default pricefilter