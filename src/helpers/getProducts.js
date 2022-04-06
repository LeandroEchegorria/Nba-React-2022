const getProducts = (array) => {
    return new Promise ( (resolve, reject) => {
        return setTimeout ( () => {
            resolve(array);

        }, 2000);
    })
}
export default getProducts;