const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/",(req,res)=>{
  var Name=req.body.Name;
  var EmpId=req.body.empID;
  var Location=req.body.location;
  var Designation=req.body.designation;
  var Department=req.body.department;
  var PurposeOfVisit=req.body.Purpose_of_Visit;


  // Conveyance
  var Convenience = [];
  var totalRowsC = parseInt(req.body.totalRowsConvenience);

  for (var i = 1; i <= totalRowsC ; i++) {
    var conveyanceDate = req.body['Convenience_Date' + i];
    var conveyanceFrom = req.body['Convenience_From' + i];
    var conveyanceTo = req.body['Convenience_To' + i];
    var conveyanceMode = req.body['Convenience_Mode' + i];
    var conveyancePurpose = req.body['Convenience_Purpose' + i];
    var conveyanceAmount = req.body['Convenience_Amount' + i];
    var conveyanceBill = req.body['Convenience_Bill' + i];

    Convenience.push({
      conveyance_Id: i,
      conveyance_Date: conveyanceDate,
      conveyanc_From: conveyanceFrom,
      conveyance_To: conveyanceTo,
      conveyance_Mode: conveyanceMode,
      conveyance_Purpose: conveyancePurpose,
      conveyance_Amount: conveyanceAmount,
      conveyance_Bill: conveyanceBill
    });
  }
  // foodAndLodging
  var foodLodgings = [];
  var totalRowsF = parseInt(req.body.totalRowsFoodAndLodging);

  for (var i = 1; i <= totalRowsF ; i++) {
    var foodLodgingDate = req.body['foodLodging_Date' + i];
    var foodLodgingBillNo = req.body['foodLodging_BillNo' + i];
    var foodLodgingHotel = req.body['foodLodging_Hotel' + i];
    var foodLodgingOccupancy = req.body['foodLodging_Occupancy' + i];
    var foodLodgingAmount = req.body['foodLodging_Amount' + i];
    var foodLodgingBill = req.body['foodLodging_Bill' + i];

    foodLodgings.push({
      foodLodging_Id: i,
      foodLodging_Date: foodLodgingDate,
      foodLodging_BillNo: foodLodgingBillNo,
      foodLodging_Hotel: foodLodgingHotel,
      foodLodging_Occupancy: foodLodgingOccupancy,
      foodLodging_Amount: foodLodgingAmount,
      foodLodging_Bill: foodLodgingBill
    });
  }
  // Incidental
  var incidentals = [];
  var totalRowsI = parseInt(req.body.totalRowsIncidental);

  for (var i = 1; i <= totalRowsI ; i++) {
    var incidentalDate = req.body['incidentals_Date' + i];
    var incidentalExpense = req.body['incidentals_Expense' + i];
    var incidentalRemarks = req.body['incidentals_Remarks' + i];
    var incidentalAmount = req.body['incidentals_Amount' + i];
    var incidentalBill = req.body['incidentals_Bill' + i];

    incidentals.push({
      incidental_Id: i ,
      incidental_Date: incidentalDate,
      incidental_Expense: incidentalExpense,
      incidental_Remarks: incidentalRemarks,
      incidental_Amount: incidentalAmount,
      incidental_Bill: incidentalBill
    });
  }
  // Travelling
  var travels = [];
  var totalRowsT = parseInt(req.body.totalRowsTravelling);

  for (var i = 1; i <= totalRowsT ; i++) {
    var travelDate = req.body['Date' + i];
    var travelFrom = req.body['From' + i];
    var travelTo = req.body['To' + i];
    var travelMode = req.body['Mode' + i];
    var travelClass = req.body['Class' + i];
    var travelFare = req.body['Fare' + i];
    var travelConveyance = req.body['Convenience' + i];
    var travelFoodAndLodging = req.body['Food_Lodging' + i];
    var travelIncidental = req.body['Incidental' + i];
    var travelTotal = req.body['Total' + i];

    travels.push({
      travel_Id: i,
      travel_Date: travelDate,
      travel_From: travelFrom,
      travel_To: travelTo,
      travel_Mode: travelMode,
      travel_Class: travelClass,
      travel_Fare: travelFare,
      travel_Conveyance: travelConveyance,
      travel_Food_Lodging: travelFoodAndLodging,
      travel_Incidemtal: travelIncidental,
      travel_Total: travelTotal,
      travelDetails: {
        conveyances: Convenience,
        foodLodgings: foodLodgings,
        incidentals: incidentals
    }
    });
  }

  var data = {
    
    name: Name,
    empId: EmpId,
    location: Location,
    designation: Designation,
    department: Department,
    purposeOfVisit: PurposeOfVisit,
    travels: travels
  };

  var jsonData=JSON.stringify(data);

  var options={
    url:"https://user-be-6dvcrnuzba-uc.a.run.app/upload", 
    method: "POST",
    body: jsonData,
    headers: {
      "Authorization": "Bearer 186ca51480a74b829cd593cb3e560d82410bdfc8cfcfd39fff7b0ad9f7015814",
      "Content-Type": "application/json"
    }
  };
   console.log(jsonData);
  request(options, (error, response, body) => {
    if (error) {
      console.log(response.statusCode);
      console.log(response.body);
    } else {
      console.log(response.statusCode);
    }
  });
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
  console.log("Server Started on port 3000");
});
