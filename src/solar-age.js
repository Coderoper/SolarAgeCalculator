var YearBorn=2000;
var MonthBorn=1;
var DayBorn=1;
var DeathAge=105;
var Year1=1999;
var Year2=2001;
var Month1=5;
var Month2=3;
var Day1=10;
var Day2=20;
var AgeYears=100;
var TodaysDate= new Date();

var Dob= new Date(YearBorn, MonthBorn, DayBorn,0);


export class SolarAge {
  constructor(YearBorn, MonthBorn,DayBorn, DeathAge){
    this.YearBorn=YearBorn;
    this.MonthBorn=MonthBorn;
    this.DayBorn=DayBorn;
    this.DeathAge=DeathAge;
  }
  TimeBetweenDatesInSeconds(startDate, endDate){

    var TimeBetweenDatesInSeconds=(endDate.getTime()-startDate.getTime())/1000;
    return TimeBetweenDatesInSeconds;

  }
  GetAgeInSeconds(Dob,TodaysDate){
    var AgeInSeconds=(TodaysDate.getTime()-Dob.getTime())/1000;
    return AgeInSeconds;
  }
  MercuryAge(AgeInSeconds)
  {
    var MercuryAge=.24* AgeInSeconds/60/60/24/365;
    return MercuryAge;
  };
  VenusAge(AgeInSeconds)
  {
    var VenusAge=.62* AgeInSeconds/60/60/24/365;
    return VenusAge;
  };
  MarsAge(AgeInSeconds)
  {
    var MarsAge=1.88* AgeInSeconds/60/60/24/365;
    return MarsAge;
  };
  //   // return ("Venus Age"
  // AgeYears(){
  //   var AgeYears=parseInt((TodaysDate-Dob));
  //
  //   return (AgeYears)
  // }
  //
  // AgeInSeconds(){
  //   var AgeInSeconds=(TodaysDate.getTime()-Dob.getTime())/1000;
  //   AgeInSeconds=parseFloat(AgeInSeconds);
  //   return AgeInSeconds
  // }
  //
  // TimeBetweenDatesInSeconds(){
  //   var startDate =new Date(Year1, Month1, Day1, 0);
  //   var endDate=new Date(Year2, Month2, Day2,0);
  //   var TimeBetweenDatesInDays=(endDate.getTime()-startDate.getTime())/1000;
  //   return TimeBetweenDatesInDays;
  //
  // }
  // YearsLeftToLive(){
  //   //3153600 seconds in a yearΩ
  //   var YearsLeft=DeathAge-AgeYears;
  //   return YearsLeft;
  //   // return ("several more years")
  // }
  //


  // };
  // MarsAge()
  // {
  //   var MarsAge;
  //   var  AgeYears;
  //   if( AgeYears != null)
  //   {
  //     MarsAge=1.88* AgeYears;
  //   }
  //   return MarsAge;
  //     // return ("Mars Age")
  // };


}
