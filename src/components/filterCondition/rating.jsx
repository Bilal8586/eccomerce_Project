import Input from  '../filter'

const ratingFilter = ()=>{
    return(
        <div className=' mt-4'>
            <h1>Rating</h1>
        <Input name={" 1 star"} test={"test1"} value={1}/>
        <Input name={" 2 star"} test={"test1"} value={2}/>
        <Input name={" 3 star"} test={"test1"}  value={3}/>
        <Input name={" 4 star"} test={"test1"}  value={4}/>
        <Input name={" 5 star"} test={"test1"}  value={5}/>
        </div>
    )
}

export default ratingFilter