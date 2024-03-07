const express=require("express");
const bodyParser=require("body-parser")
const request=require("request")

const app =express();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended :true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

app.post("/",(req,res)=>{

  
  var Name=req.body.Name;
  console.log(req.body.Name);
  var EmpId=req.body.Code_No;
  console.log(req.body.Code_no);
  var Location=req.body.location;
  console.log(req.body.location);
  var Designation=req.body.designation;
  console.log(req.body.designation);
  var Department=req.body.department;
  console.log(req.body.department);
  var PurposeOfVisit=req.body.Purpose_of_Visit;

  var travelDate=req.body.Date;
  var travelFrom=req.body.Place;
  // var travelTo=req.body.Name;
  var travelMode=req.body.Mode;
  var travelClass=req.body.Class;
  var travelFare=req.body.Fare;
  var travelConveyance=req.body.Convenience;
  var travelFoodAndLodging=req.body.Food_Loddging;
  var travelIncidental=req.body.Incenditial;
  var travelTotal=req.body.Total;


  
  var data={
    name: Name, 
    empId: EmpId,
    location: Location,
    designation: Designation,
    department: Department,
    purposeOfVisit: PurposeOfVisit,
    travels: [
        {
            travel_Date: travelDate,
            travel_From: travelFrom,
            travel_Mode: travelMode,
            travel_Class: travelClass,
            travel_Fare: travelFare,
            travel_Conveyance: travelConveyance,
            travel_Food_Lodging: travelFoodAndLodging,
            travel_Incidemtal: travelIncidental,
            travel_Total: travelTotal,
        }]
  }

  var jsonData=JSON.stringify(data);
  console.log(jsonData);
  var options={
    url:"https://rnjqgcs0-5000.inc1.devtunnels.ms/upload", 
    method: "POST",
    body: jsonData
  }

  request(options,(error, response,body) =>{
    if(error){
      console.log(error);
    }else{
      console.log(response.statusCode);
      
      console.log("Submitted");
    }
  })
})

app.listen(3000,function(){
    console.log("Server Started on port 3000");
});