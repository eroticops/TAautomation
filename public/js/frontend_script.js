function myCreateFunctionTravelling() {
    var table = document.getElementById("myTableTravelling");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    var cell11 = row.insertCell(10);
    var totalRowsInput = document.getElementById("totalRowsTravelling");
    var totalRows = parseInt(totalRowsInput.value);
  
    totalRowsInput.value = totalRows + 1;
  
  
    cell1.innerHTML = totalRows + 1;
    cell2.innerHTML = '<input name="Date' + (totalRows + 1) +'" maxlength="30"></input>' ;
    cell3.innerHTML = '<input name="From' + (totalRows + 1) + '" maxlength="30"></input>' ;
    cell4.innerHTML = '<input name="To'  + (totalRows + 1) + '" maxlength="30"></input>' ;
    cell5.innerHTML = '<input name="Mode'  + (totalRows + 1) + '"maxlength="30"></input>';
    cell6.innerHTML = '<input name="Class'  + (totalRows + 1) + '" maxlength="30"></input>';
    cell7.innerHTML = '<input name="Fare'  + (totalRows + 1) + '" maxlength="30"></input>';
    cell8.innerHTML = '<input name="Convenience'  + (totalRows + 1) +'" maxlength="30"></input>';
    cell9.innerHTML = '<input name="Food_Loddging'  + (totalRows + 1) + '" maxlength="30"></input>';
    cell10.innerHTML = '<input name="Incidental'  + (totalRows + 1) + '" maxlength="30"></input>';
    cell11.innerHTML = '<input name="Total'  + (totalRows + 1) + '" maxlength="30"></input>';
  
  }
  function myCreateFunctionConvenience() {
    var table = document.getElementById("myTableConvenience");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var totalRowsInput = document.getElementById("totalRowsConvenience");
    var totalRows = parseInt(totalRowsInput.value);
  
    totalRowsInput.value = totalRows + 1;
    cell1.innerHTML = totalRows + 1;
    cell2.innerHTML = '<input type="text" name="Convenience_Date'  + (totalRows + 1) + '" maxlength="30" />' ;
    cell3.innerHTML = '<input type="text" name="Convenience_From'  + (totalRows + 1) +'" maxlength="30" /></input>' ;
    cell4.innerHTML = '<input type="text" name="Convenience_To'  + (totalRows + 1) + '" maxlength="30" />';
    cell5.innerHTML = '<input type="text" name="Convenience_Mode'  + (totalRows + 1) + '" maxlength="30" />';
    cell6.innerHTML = '<input type="text" name="Convenience_Purpose'  + (totalRows + 1) + '" maxlength="30" />';
    cell7.innerHTML = '<input type="text" name="Convenience_Amount'  + (totalRows + 1) + '" maxlength="30" />';
    cell8.innerHTML = '<input type="file" name="Convenience_Bill'  + (totalRows + 1) +'" maxlength="30" />';
    
  }
  function myCreateFunctionFoodAndLodging() {
    var table = document.getElementById("myTableFoodAndLodging");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var totalRowsInput = document.getElementById("totalRowsFoodAndLodging");
    var totalRows = parseInt(totalRowsInput.value);
  
    totalRowsInput.value = totalRows + 1;
  
    cell1.innerHTML = totalRows + 1;
    cell2.innerHTML = '<input type="text" name="foodLodging_Date' + (totalRows + 1) + '" maxlength="30" />' ;
    cell3.innerHTML = '<input type="text" name="foodLodging_BillNo' + (totalRows + 1) + '" maxlength="30" />' ;
    cell4.innerHTML = '<input type="text" name="foodLodging_Hotel' + (totalRows + 1) + '" maxlength="30" />';
    cell5.innerHTML = '<input type="text" name="foodLodging_Occupancy' + (totalRows + 1) + '" maxlength="30" />';
    cell6.innerHTML = '<input type="text" name="foodLodging_Amount' + (totalRows + 1) + '" maxlength="30" />';
    cell7.innerHTML = '<input type="file" name="foodLodging_Bill' + (totalRows + 1) + '" maxlength="30" />';
              
  }
  
  function myCreateFunctionIncidental() {
    var table = document.getElementById("myTableIncidental");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var totalRowsInput = document.getElementById("totalRowsIncidental");
    var totalRows = parseInt(totalRowsInput.value);
  
    totalRowsInput.value = totalRows + 1;
  
    cell1.innerHTML = totalRows + 1;
    cell2.innerHTML = '<input type="text" name="incidentals_Date' + (totalRows + 1) + '" maxlength="30" />' ;
    cell3.innerHTML = '<input type="text" name="incidentals_Expense' + (totalRows + 1) + '" maxlength="30" />' ;
    cell4.innerHTML = '<input type="text" name="incidentals_Remarks' + (totalRows + 1) + '" maxlength="30" />';
    cell5.innerHTML = '<input type="text" name="incidentals_Amount' + (totalRows + 1) + '" maxlength="30" />';
    cell6.innerHTML = '<input type="file" name="incidentals_Bill' + (totalRows + 1) + '" maxlength="30" />';
  
  }
  
  function myDeleteFunctionTravelling() {
      var table = document.getElementById("myTableTravelling");
      var totalRowsInput = document.getElementById("totalRowsTravelling");
      var totalRows = parseInt(totalRowsInput.value);
      
      if (totalRows > 1) {
          table.deleteRow(-1);
          totalRowsInput.value = totalRows - 1;
      }
  }
  
  function myDeleteFunctionConvenience() {
      var table = document.getElementById("myTableConvenience");
      var totalRowsInput = document.getElementById("totalRowsConvenience");
      var totalRows = parseInt(totalRowsInput.value);
      
      if (totalRows > 1) {
          table.deleteRow(-1);
          totalRowsInput.value = totalRows - 1;
      }
  }
  
  function myDeleteFunctionFoodAndLodging() {
      var table = document.getElementById("myTableFoodAndLodging");
      var totalRowsInput = document.getElementById("totalRowsFoodAndLodging");
      var totalRows = parseInt(totalRowsInput.value);
      
      if (totalRows > 1) {
          table.deleteRow(-1);
          totalRowsInput.value = totalRows - 1;
      }
  }
  
  function myDeleteFunctionIncidental() {
      var table = document.getElementById("myTableIncidental");
      var totalRowsInput = document.getElementById("totalRowsIncidental");
      var totalRows = parseInt(totalRowsInput.value);
      
      if (totalRows > 1) {
          table.deleteRow(-1);
          totalRowsInput.value = totalRows - 1;
      }
  }