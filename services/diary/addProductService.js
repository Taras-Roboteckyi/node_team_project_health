const {Diary}=require('../../models/diary');
const {Product}=require('../../models/product');
const {createError}=require('../../helpers/errors');


const addProduct = async(user, body)=>{
    const {date, productTitle, productWeight}=body;

    if (!isCurrentDate(date)){
        throw createError(400,'Date must be current');
    }

    const productDiary = await Diary.findOne({user,date,productTitle});

    if(!productDiary){
        const productCalories= await countCalories(productTitle,productWeight);

        const newProductDiary = new Diary({
            date,
            user,
            productWeight,
            productCalories,
            productTitle,
        });

        await newProductDiary.save();

        return newProductDiary;
    }
};

const isCurrentDate=date=>{
    const inputDay=new Date(date).setHours(0,0,0,0,);
    const today= new Date().setHours(0,0,0,0);

    return inputDay===today;
}

const countCalories= async(productTitle, productWeight)=>{
    const product = await Product.findOne({'title.ua': productTitle})

    if(!product){
        throw createError(404, 'Product  not found')
    }

    const {calories, weight}=product;
    const productKcal=Math.round((calories*productWeight) / weight);

    return productKcal;

}


module.exports={
    addProduct
}