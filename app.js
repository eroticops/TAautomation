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

  // Travelling

  var t=0;
  var travelId=t++;
  var travelDate = req.body.Date;
  var travelFrom = req.body.Place;
  var travelTo = req.body.Name;
  var travelMode = req.body.Mode;
  var travelClass = req.body.Class;
  var travelFare = req.body.Fare;
  var travelConveyance = req.body.Convenience;
  var travelFoodAndLodging = req.body.Food_Loddging;
  var travelIncidental = req.body.Incidential;
  var travelTotal = req.body.Total;

  // Conveyance
  var u=0;
  var conveyanceId = u++;
  var conveyanceDate = req.body.Convenience_Date;
  var conveyanceFrom = req.body.Convenience_From;
  var conveyanceTo = req.body.Convenience_To;
  var conveyanceMode = req.body.Convenience_Mode;
  var conveyancePurpose = req.body.Convenience_Purpose;
  var conveyanceAmount = req.body.Convenience_Amount;
  var conveyanceBill = req.body.Convenience_Bill;

  // foodAndLodging
  var v=0;
  var foodLodgingId = v++;
  var foodLodgingDate = req.body.foodLodging_Date;
  var foodLodgingBillNo = req.body.foodLodging_BillNo;
  var foodLodgingHotel = req.body.foodLodging_Hotel;
  var foodLodgingOccupancy = req.body.foodLodging_Occupancy;
  var foodLodgingAmount = req.body.foodLodging_Amount;
  var foodLodgingBill = req.body.foodLodging_Bill;

  // Incidental
  var w=0; 
  var incidentalId = w++;
  var incidentalDate = req.body.incidentals_Date;
  var incidentalExpense = req.body.incidentals_Expense;
  var incidentalRemarks = req.body.incidentals_Remarks;
  var incidentalAmount = req.body.incidentals_Amount;
  var incidentalBill = req.body.incidentals_Bill;

  var data = {
    
    name: Name,
    empId: EmpId,
    location: Location,
    designation: Designation,
    department: Department,
    purposeOfVisit: PurposeOfVisit,
    travels: [
      {
        travel_Id:travelId,
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
          conveyances: [
              {
                  conveyance_Id: conveyanceId,
                  conveyance_Date: conveyanceDate,
                  conveyanc_From: conveyanceFrom,
                  conveyance_To: conveyanceTo,
                  conveyance_Mode: conveyanceMode,
                  conveyance_Purpose: conveyancePurpose,
                  conveyance_Amount: conveyanceAmount,
                  conveyance_Bill: conveyanceBill
              }
          ],
          foodLodgings: [
              {
                  foodLodging_Id: foodLodgingId,
                  foodLodging_Date: foodLodgingDate,
                  foodLodging_BillNo: foodLodgingBillNo,
                  foodLodging_Hotel: foodLodgingHotel,
                  foodLodging_Occupancy: foodLodgingOccupancy,
                  foodLodging_Amount: foodLodgingAmount,
                  foodLodging_Bill: foodLodgingBill
              }
          ],
          incidentals: [
              {
                  incidental_Id: incidentalId ,
                  incidental_Date: incidentalDate,
                  incidental_Expense: incidentalExpense,
                  incidental_Remarks: incidentalRemarks,
                  incidental_Amount: incidentalAmount,
                  incidental_Bill: incidentalBill
              }
          ]
      }
        
      },
    ],
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
