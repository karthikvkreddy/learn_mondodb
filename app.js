const mongoose = require('mongoose');
const { User } = require('./models/employee');


// 1. Create Collection
const addUser = async () => {

    // method 1: Using new operator
    const user = new User({
        "imageUrl": "https://hub.dummyapis.com/Image?text=DS&height=120&width=120",
        "firstName": "Deshawn",
        "lastName": "Shanahan",
        "email": "Deshawn.Shanahan@dummyapis.com",
        "contactNumber": "4471395572",
        "age": 38,
        "dob": "03/08/1985",
        "salary": 2,
        "address": "Address2"
    });
    const saveUser = await user.save();

    // method 2: Using create
    // const user = await User.create({
    //     "imageUrl": "https://hub.dummyapis.com/Image?text=DS&height=120&width=120",
    //     "firstName": "Deshawn",
    //     "lastName": "Shanahan",
    //     "email": "Deshawn.Shanahan@dummyapis.com",
    //     "contactNumber": "4471395572",
    //     "age": 38,
    //     "dob": "03/08/1985",
    //     "salary": 2,
    //     "address": "Address2"
    // });
    // console.log(saveUser);

    console.log(saveUser);
}

// 2. Update Collection
const updateUser = async () => {
    const updatedUser = await User.findByIdAndUpdate(
        '6550aefc2941d47048ec6c38',
        {
            "imageUrl": "https://hub.dummyapis.com/Image?text=DS&height=120&width=120",
            "firstName": "Karthik",
            "lastName": "Shanahan",
            "email": "Deshawn.Shanahan@dummyapis.com",
            "contactNumber": "4471395572",
            "age": 40,
            "dob": "03/08/1985",
            "salary": 2,
            "address": "Address2"
        },
        { new: true });

    console.log(updatedUser);
}

// 3. Get/Find Collection
const getUser = async () => {

    // find
    const userAny = await User.find({
        firstName: 'Karthik'
    });

    // findOne
    const userOne = await User.findOne({
        firstName: 'Karthik'
    });

    // less than / equal to
    const userLess = await User.find({
        age: { $lt: 20 }
    });
    const userLessEq = await User.find({
        age: { $lte: 20 }
    });

    // greater than / equal to
    const userGret = await User.find({
        age: { $gt: 20 }
    });

    const userGretEq = await User.find({
        age: { $gte: 20 }
    });

    // not equal to
    const userNoEq = await User.find({
        age: { $ne: 20 }
    });


    // values in array
    const userInArray = await User.find({
        firstName: { $in: [] }
    });

    // values not in array
    const userNotInArray = await User.find({
        firstName: { $nin: [] }
    });

    // AND : get user with less than 20k salary and age is less than 30

    // OR : get all the users age is less than 20 and firstName starts with 'A'


    console.log(userNoEq);
}

// 4. Remove Collection
const removeUser = async () => {
    const user = await User.findByIdAndRemove(req.params.id)

}
//Database
mongoose.connect('mongodb://127.0.0.1:27017/eshop-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'learn-mongo'
})
    .then(() => {
        console.log('Database Connection is ready...')
    })
    .catch((err) => {
        console.log(err);
    })


// Calling functions:
// 1. add User
// addUser();
// 2. Update User
//updateUser();
// 3. find 
// getUser();
// 4. remove/delete
// removeUser();