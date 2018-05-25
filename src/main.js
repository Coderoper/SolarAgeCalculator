import $ from 'jquery';
import {find}  from './solar-age';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
var result1 =;
var result2 =;
var result3 =;
var result4 =;

$(document).ready(function() {
  $("form#length").submit(function() {
    event.preventDefault();
    var input1 = parseInt($("input#age").val());
    var input2 = parseInt($("input#lifeExpectancy").val());
    var finalresult=find(input1,input2);

    if (finalresult ==  result1)
    {

      $("#answer").text(result1);
      $("#result").show();
    }
    else if (finalresult ==  result2)
    {
      $("#answer").text(result2);
      $("#result").show();
    }
    else if (finalresult ==  result3)
    {
      $("#answer").text(result3);
      $("#result").show();
    }
    else if(finalresult ==  result4)
    {
      $("#negative_answer").text(result4);
      $("#negative_result").show();
    }

  });
});
