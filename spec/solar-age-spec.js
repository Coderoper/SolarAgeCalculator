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
    console.log("age in years on Mercury "+ testSolarAge.MercuryAge(AgeInSeconds));
    expect(testSolarAge.MercuryAge(AgeInSeconds)).toEqual(24);
  });
  it('this should return age in years on Venus', function(){
    var AgeInSeconds=100*365*24*60*60;
    var testSolarAge =new SolarAge(1, 1, 1, 100);
    console.log("age in years on Venus "+ testSolarAge.VenusAge(AgeInSeconds));
    expect(testSolarAge.VenusAge(AgeInSeconds)).toEqual(62);
  });
  it('this should return age in years on Mars', function(){
    var AgeInSeconds=100*365*24*60*60;
    var testSolarAge =new SolarAge(1, 1, 1, 100);
    console.log("age in years on Mars "+ testSolarAge.MarsAge(AgeInSeconds));
    expect(testSolarAge.MarsAge(AgeInSeconds)).toEqual(188);
  });
  // it('this test should take year from the new object', function(){
  //   var TestSolarAge = new SolarAge(2000, 9, 15, 100);
  //   console.log("TestSolarAge<<<<<<"+TestSolarAge.YearBorn);
  //   expect(TestSolarAge.YearBorn).toEqual(2000);
  //``
  // });
  // it('should test whether VenusAge method returns a string', function(){('')
  //   var TodaysDate = new Date(2018, 5, 26, 0)
  //   var Dob = new Date(2017, 5, 25, 0);
  //   var TestSolarAge =new SolarAge(1918, 5, 26, 100)
    // console.log("TestDate " +TodaysDate);
    // console.log("TestSolarAge "+ Dob);
    // console.log("AgeYears " + SolarAge.AgeYears());
  //   console.log("Today - Dob " + TodaysDate.getTime()-Dob.getTime());
  //
  //   expect(TestSolarAge.VenusAge()).toEqual(100);
  // });
  // it('should test whether MarsAge method returns a string', function(){
  //
  //   var TestSolarAge = new SolarAge(1918, 5, 25, 100);
  //   expect(TestSolarAge.MarsAge()).toEqual("Mars Age")
  // });
  // it('should test whether MercuryAge method returns a string', function(){
  //
  //   var TestSolarAge = new SolarAge(1918, 5, 25, 100);
  //   expect(TestSolarAge.MercuryAge()).toEqual("Mercury Age")
  // });
  // it('should teest Years to live', function(){
  //   var TestSolarAge = new SolarAge(1918, 5, 25, 100);
  //   console.log(TestSolarAge.DeathAge);
  //   expect(TestSolarAge.YearsLeftToLive()).toEqual("several more years")
  //
  // });
  // it('should test TimeBetweenDatesInDays and give correct return ', function(){
  //   var startDate =new Date(1999, 4, 20, 0);
  //   var endDate=new Date(2000, 4, 20, 0);
  //   var TestSolarAge = new SolarAge(1918, 5, 25, 100);
  //   expect(TestSolarAge.TimeBetweenDatesInDays(startDate, endDate)).toEqual(1*1000)
  // });

});
