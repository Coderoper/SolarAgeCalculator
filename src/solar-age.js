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
  AgeInSeconds(){
    var AgeInSeconds=(TodaysDate.getTime()-Dob.getTime())/1000;
    return AgeInSeconds
  }
  AgeYears(){
    var AgeYears=(TodaysDate.getTime()-Dob.getTime())/1000/60/60/24/365;
    return AgeYears
  }
  TimeBetweenDatesInDays(){
    var startDate =new Date(Year1, Month1, Day1, 0);
    var endDate=new Date(Year2, Month2, Day2,0);
    var TimeBetweenDatesInDays=(endDate.getTime()-startDate.getTime())/86400000;
    return TimeBetweenDatesInDays;

  }
  YearsLeftToLive(){
    //3153600 seconds in a yearΩ
    var YearsLeft=DeathAge-AgeYears;
    return YearsLeft;
    // return ("several more years")
  }

  MercuryAge()
  {
    var MercuryAge;
    var  AgeYears;
    if( AgeYears != null)
    {
      MercuryAge=.24* AgeYears;
    }
    return MercuryAge;
    // return ("Mercury Age")

  };
  VenusAge()
  {
    var VenusAge;
    var  AgeYears;
    if( AgeYears != null)
    {
      VenusAge=.62* AgeYears;
    }
    return VenusAge;
    // return ("Venus Age")
  };
  MarsAge()
  {
    var MarsAge;
    var  AgeYears;
    if( AgeYears != null)
    {
      MarsAge=1.88* AgeYears;
    }
    return MarsAge;
      // return ("Mars Age")
  };


}
