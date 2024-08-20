const express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const userRoute = require('./routes/UserRoute');
const ownerRoute = require('./routes/OwnerRoute');
const parkRoute = require('./routes/ParkRoute');
const billRoute = require('./routes/BillRoute');
const parkingPointRoute = require('./routes/ParkingPointRoute');
const timeSchemaRoute = require('./routes/TimeSchemaRoute');
const vehicleRoute = require('./routes/VehicleRoute');


const app=express();

app.use(cors());
app.use(bodyParser.json());

app.use('/user',userRoute);
app.use('/owner',ownerRoute);
app.use('/park',parkRoute);
app.use('/bill',billRoute);
app.use('/parkingPoint',parkingPointRoute);
app.use('/timeSchema',timeSchemaRoute);
app.use('/vehicle',vehicleRoute);


module.exports=app;