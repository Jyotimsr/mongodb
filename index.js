const { MongooseError } = require('mongoose');


mongoose = require('mongoose')
express = require('express')
 
app = express();

port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)

})

mongoose.connect('mongodb://localhost:27017/adit').then(()=>{
    console.log('connect successfully')


}).catch((error)=>console.log(error));

 empSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    mobile:{
        type:Number,
        required:true
        },
        age:{
            type: Number,
            required:true
    },
    
})
const deleteData = async (xyz) => {
    try {
        // Assuming `employee` is a Mongoose model and you want to update by `name`
        const data = await employee.findOneAndUpdate(
            { name: xyz }, // find a document by name
            { $set: { mobile: 986543210 } }, // update mobile number
            { new: true } // options: return the modified document rather than the original
        );

        // Assuming you want to do something with `data` or at least check if the update was successful
        if (data) {
            console.log('Update successful', data);
        } else {
            console.log('No document found with the name:', xyz);
        }
    } catch (err) {
        console.log(err);
    }
};

deleteData('pihu');
// employee = new mongoose.model('employee',empSchema)

// updateData = async(id) => {
//     try{
//         data = await employee.updateOne({_id:id},
//             {$set:{name:'bill cliton'}})

//     }
//     catch(error){console.log(error)}
// }
// updateData('65b9e0aa4f3958e3e37747d2')
// readData = async()=>{
//     try{
//         data= await employee.find({age:24 }).select({mobile:0}).limit(6)
//         console.log(data);
//     }
//     catch(err)
//     {
//         console.log(error);
// }
// }
// readData();
// createEmp1 = new employee(
//         {
//             name: 'jyoti',
//             mobile: 23344,
//             age:24
//         })
//         createEmp2 = new employee(
//             {
//                 name: 'vaishu',
//                 mobile: 2657,
//                 age:18
//             })
//             createEmp3 = new employee(
//                 {
//                     name: 'anjali',
//                     mobile: 77654,
//                     age:24
//                 })
//                 createEmp4 = new employee(
//                     {
//                         name: 'pihu',
//                         mobile: 1234,
//                         age:22
//                     })

// empD = employee.insertMany([createEmp1,createEmp2,createEmp3,createEmp4]);
// console.log(empD)
                        


// createEmp = new employee(
//     {
//         name: 'jyoti',
//         mobile: 23344,
//         age:56


//     });
//     createEmp.save();
// console.log('data inserted');

