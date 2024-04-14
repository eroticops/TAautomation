function randomAlpha(length = 10) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

document.getElementById("yourFormId").addEventListener("submit", function(event) {
  event.preventDefault();

  var formData = new FormData(this);

  var data = {
    name: formData.get("Name"),
    empId: formData.get("empID"),
    location: formData.get("location"),
    designation: formData.get("designation"),
    department: formData.get("department"),
    purposeOfVisit: formData.get("Purpose_of_Visit"),
    travels: []
  };

  var totalRowsT = parseInt(formData.get("totalRowsTravelling"));

  for (var i = 1; i <= totalRowsT; i++) {
    var travel = {
      travelId: randomAlpha(),
      travelDate: formData.get("Date" + i),
      travelFrom: formData.get("From" + i),
      travelTo: formData.get("To" + i),
      travelMode: formData.get("Mode" + i),
      travelClass: formData.get("Class" + i),
      travelFare: formData.get("Fare" + i),
      travelConveyance: formData.get("Convenience" + i),
      travelFoodLodging: formData.get("Food_Lodging" + i),
      travelIncidental: formData.get("Incidental" + i),
      travelTotal: formData.get("Total" + i),
      travelDetails: {
        conveyances: [],
        foodLodgings: [],
        incidentals: []
      }
    };

    var totalRowsC = parseInt(formData.get("totalRowsConvenience"));
    for (var j = 1; j <= totalRowsC; j++) {
      if (formData.has("Convenience_Date" + j)) {
        travel.travelDetails.conveyances.push({
          conveyanceId: randomAlpha(),
          conveyanceDate: formData.get("Convenience_Date" + j),
          conveyanceFrom: formData.get("Convenience_From" + j),
          conveyanceTo: formData.get("Convenience_To" + j),
          conveyanceMode: formData.get("Convenience_Mode" + j),
          conveyancePurpose: formData.get("Convenience_Purpose" + j),
          conveyanceAmount: formData.get("Convenience_Amount" + j),
          conveyanceBill: formData.get("Convenience_BillId" + j)
        });
      }
    }

    var totalRowsF = parseInt(formData.get("totalRowsFoodAndLodging"));
    for (var k = 1; k <= totalRowsF; k++) {
      if (formData.has("foodLodging_Date" + k)) {
        travel.travelDetails.foodLodgings.push({
          foodLodgingId: randomAlpha(),
          foodLodgingDate: formData.get("foodLodging_Date" + k),
          foodLodgingBillNo: formData.get("foodLodging_BillNo" + k),
          foodLodgingHotel: formData.get("foodLodging_Hotel" + k),
          foodLodgingOccupancy: formData.get("foodLodging_Occupancy" + k),
          foodLodgingAmount: formData.get("foodLodging_Amount" + k),
          foodLodgingBill: formData.get("foodLodging_BillId" + k)
        });
      }
    }

    var totalRowsI = parseInt(formData.get("totalRowsIncidental"));
    for (var l = 1; l <= totalRowsI; l++) {
      if (formData.has("incidentals_Date" + l)) {
        travel.travelDetails.incidentals.push({
          incidentalId: randomAlpha(),
          incidentalDate: formData.get("incidentals_Date" + l),
          incidentalExpense: formData.get("incidentals_Expense" + l),
          incidentalRemarks: formData.get("incidentals_Remarks" + l),
          incidentalAmount: formData.get("incidentals_Amount" + l),
          incidentalBill: formData.get("incidentals_BillId" + l)
        });
      }
    }

    data.travels.push(travel);
  }

  var jsonData = JSON.stringify(data);

  fetch("https://user-be-6dvcrnuzba-uc.a.run.app/upload", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 186ca51480a74b829cd593cb3e560d82410bdfc8cfcfd39fff7b0ad9f7015814",
      "Content-Type": "application/json"
    },
    body: jsonData
  })
  .then(response => {
    console.log("Response status:", response.status);
    return response.json();
  })
  .then(data => {
    console.log("Response data:", data);
    // Handle response data as needed
  })
  .catch(error => {
    console.error("Error:", error);
  });
});
  