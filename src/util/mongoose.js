module.exports = {
    mutipleMongooseToObject: (mongooseArrays) => {
        return mongooseArrays.map((mongooseArray) => mongooseArray.toObject());
    },
    mongooseToObject: (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
