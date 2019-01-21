function formatTimeStamp() {

  var date = new Date(Date.now());
  var formattedTimeStamp;
  var dayOfMonthNumString;

  var dayOfMonthNumber = date.getDate();
  var monthIndex = date.getMonth();//0-11
  var yearNumber = date.getFullYear();

  if (dayOfMonthNumber < 10 ) {
    dayOfMonthNumString = '0'+ dayOfMonthNumber;
  } else {
    dayOfMonthNumString = ''+ dayOfMonthNumber;
  }

  var twoDigitDayOfMonthNumberString = dayOfMonthNumString;

  var monthNumAsString = '' + (monthIndex+1);
  var twoDigitMonthNumberString = (monthNumAsString).length < 2 ? '0'+monthNumAsString:monthNumAsString;

  var fourDigitYearNumberString = '' + yearNumber;

  formattedTimeStamp = fourDigitYearNumberString + twoDigitMonthNumberString + twoDigitDayOfMonthNumberString ;

  return formattedTimeStamp;
}