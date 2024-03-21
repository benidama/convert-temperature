function toCelcius(temp){
    return Math.ceil((temp - 32) * 5/9);
  }
  
  function toFahrenheit(temp){
   return Math.ceil((temp * 9/5) + 32);
  }
  
  document.getElementById("submit-btn").onclick = function(){
      let temp;
      if(document.getElementById("radio-btn1").checked){
          temp = document.getElementById("txt-btn").value;
          temp = toCelcius(temp);
          temp = Number(temp);
          document.getElementById("temp-result").innerHTML =
          "Yur temperature is equal to " + " " + temp + " " + "degree Celcius.";
  
      }
      else if(document.getElementById("radio-btn2").checked){
          temp = document.getElementById("txt-btn").value;
          temp = toFahrenheit(temp);
          temp = Number(temp);
          document.getElementById("temp-result").innerHTML =
          "Your temperature is equal to " + temp + " " + "degree Fahrenheit.";
      }
      else{
          document.getElementById("temp-result").innerHTML =
           "Please Enter the value in temparature box";
      }
      
  }