const createNewProduct=(productId, title, weight, calories)=>{
    const calcKcal=Math.round(calories*(weight/100));

    const product={
        _id:productId,
        title:{
            ua:title.ua,
            ru:title.ru,
        },
        weight,
        kcal:calcKcal,
    };
    return product;
};

module.exports = createNewProduct;
