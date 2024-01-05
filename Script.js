
      function calculationEasyPercent(){
      let P = document.getElementById("P");
      let I = document.getElementById("I");
      let t = document.getElementById("t");
      const K = 365;
      let S = 0;
      
    //доп. значения для сложного %
      //дни в месяцы
      let Kk = t.value/30;
      //30 дней
      let j = t.value/Kk;
     
    //выбор формулы
      if(document.getElementsByName("percent")[0].checked){
         //простой процент формула
         S = (P.value*I.value*t.value/K)/100;
      }
      else{
         //сложный процент формула
        // let S = 0;
        // let value = 0;
        // for(let i=0; i<Kk; i++){
        //  S = ((P.value+value)*I.value*j/K)/100; 
        // value+= S;
        // }
      }
       //alert(S);
       document.getElementById("result").innerText = "ожидаемый процент по депозиту составит: "
       document.getElementById("S").innerText= S+" у. е."
      }
      

      function calcrange(){
        var r =document.getElementById("R"); //range
        var p =document.getElementById("P"); //input number

        p.value = r.value;
      }
    