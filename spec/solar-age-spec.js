import { SolarAge } from './../src/solar-age.js';

describe('SolarAge', function(){
  it('should give the time in seconds between two dates', function(){
  var startDate=new Date(2018, 5, 25, 0);
  var endDate=new Date(2018, 5, 26, 0);
  var testSolarAge =new SolarAge(1, 1, 1, 100);
  // console.log(testSolarAge.TimeBetweenDatesInSeconds(startDate, endDate));

  expect(testSolarAge.TimeBetweenDatesInSeconds(startDate, endDate)).toEqual(86400);
  });

  it('should convert a persons age into seconds', function(){
    var Dob=new Date(2018, 5, 25, 0);
    var TodaysDate=new Date(2018, 5, 25, 0, 0, 1);
    var testSolarAge =new SolarAge(1, 1, 1, 100);
    // console.log("age in seconds " + testSolarAge.GetAgeInSeconds(Dob, TodaysDate));
    expect(testSolarAge.GetAgeInSeconds(Dob, TodaysDate));
  });
  it('this should return age in years on Mercury', function(){
    var AgeInSeconds=100*365*24*60*60;
    var testSolarAge =new SolarAge(1, 1, 1, 100);
    // console.log("age in years on Mercury "+ testSolarAge.MercuryAge(AgeInSeconds));
    expect(testSolarAge.MercuryAge(AgeInSeconds)).toEqual(24);
  });
  it('this should return age in years on Venus', function(){
    var AgeInSeconds=100*365*24*60*60;
    var testSolarAge =new SolarAge(1, 1, 1, 100);
    // console.log("age in years on Venus "+ testSolarAge.VenusAge(AgeInSeconds));
    expect(testSolarAge.VenusAge(AgeInSeconds)).toEqual(62);
  });
  it('this should return age in years on Mars', function(){
    var AgeInSeconds=100*365*24*60*60;
    var testSolarAge =new SolarAge(1, 1, 1, 100);
    // console.log("age in years on Mars "+ testSolarAge.MarsAge(AgeInSeconds));
    expect(testSolarAge.MarsAge(AgeInSeconds)).toEqual(188);
  });
  it('this should return years left on Mercury', function(){
    var testSolarAge =new SolarAge(1, 1, 1, 100);
    var DeathAge= 100;
    //Get age for 50 year old person
    var AgeInSeconds=50*60*60*24*365;
    // console.log("Age in Mercury Yeas" + 50*.24 + "Age on earth" + 50)
    // // console.log("years left on Mercury"+ testSolarAge.YearsLeftMercury(DeathAge,AgeInSeconds));
    // console.log("Age in Years "+ AgeInSeconds/60/60/24/365);
    console.log(testSolarAge.YearsLeftMercury(DeathAge, AgeInSeconds));
    expect(testSolarAge.YearsLeftMercury(DeathAge,AgeInSeconds)).toEqual(12);
  })
  it('this should return years left on Venus', function(){
    var testSolarAge =new SolarAge(1, 1, 1, 100);
    var DeathAge= 100;
    //Get age for 50 year old person
    var AgeInSeconds=50*60*60*24*365;
    console.log("years left on Venus"+ testSolarAge.YearsLeftVenus(DeathAge,AgeInSeconds));
    console.log()
    expect(testSolarAge.YearsLeftVenus(DeathAge,AgeInSeconds)).toEqual(31);
  })

});
