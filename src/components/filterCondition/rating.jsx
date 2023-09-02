import Input from  '../filter'

const ratingFilter = ()=>{
    return(
        <div className=' mt-4'>
            <h1>Rating</h1>
        <Input name={" 1 star"} test={"test1"} value={1} serchFilter="rating"/>
        <Input name={" 2 star"} test={"test1"} value={2} serchFilter="rating"/>
        <Input name={" 3 star"} test={"test1"}  value={3} serchFilter="rating"/>
        <Input name={" 4 star"} test={"test1"}  value={4} serchFilter="rating"/>
        <Input name={" 5 star"} test={"test1"}  value={5} serchFilter="rating"/>
        </div>
    )
}

export default ratingFilter