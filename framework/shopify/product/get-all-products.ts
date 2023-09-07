



const fetchApi = async() : Promise <any> =>{
    const url = "https://jsonplaceholder.typicode.com/todos";
   const res = await fetch(url,{
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
    })
    // in payini hatman bayad esmesh data bashe vagarna error mide !!!!
    const data = await res.json();
    return {data}

}
// har ja be server sequest bedim asyn bayad bashe tabee


const getAllProducts = async (): Promise<any[]> =>{
    const products = await fetchApi();
    return products.data
}
export default getAllProducts;