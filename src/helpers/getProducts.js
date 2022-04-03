const getProducts = (array) => {
    return new Promise ( (resolve, reject) => {
        return setTimeout ( () => {
            resolve(array);
        }, 3000);
    })
}
export default getProducts;