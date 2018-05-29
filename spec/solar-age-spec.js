import { SolarAge } from './../src/solar-age.js';

describe('SolarAge', function(){
  it('this test should take year from the new object', function(){
    var TestSolarAge = new SolarAge(2000, 9, 15, 100);
    console.log("TestSolarAge<<<<<<"+TestSolarAge.YearBorn);
    expect(TestSolarAge.YearBorn).toEqual(2000);

  });
  it('should test whether VenusAge method returns a string', function(){

    var TestSolarAge = new SolarAge(1918, 5, 25, 100);
    expect(TestSolarAge.VenusAge()).toEqual("Venus Age")
  });
  it('should test whether MarsAge method returns a string', function(){

    var TestSolarAge = new SolarAge(1918, 5, 25, 100);
    expect(TestSolarAge.MarsAge()).toEqual("Mars Age")
  });
  it('should test whether MercuryAge method returns a string', function(){

    var TestSolarAge = new SolarAge(1918, 5, 25, 100);
    expect(TestSolarAge.MercuryAge()).toEqual("Mercury Age")
  });
  it('should teest Years to live', function(){
    var TestSolarAge = new SolarAge(1918, 5, 25, 100);
    console.log(TestSolarAge.DeathAge);
    expect(TestSolarAge.YearsLeftToLive()).toEqual("several more years")

  });
  it('should test TimeBetweenDatesInDays and give correct return ', function(){
    var startDate =new Date(1999, 4, 20, 0);
    var endDate=new Date(2000, 4, 20, 0);
    var TestSolarAge = new SolarAge(1918, 5, 25, 100);
    expect(TestSolarAge.TimeBetweenDatesInDays(startDate, endDate)).toEqual(1*1000)
  });

});
