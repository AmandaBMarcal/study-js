/**What is your favourite day of the week? Check if it's the most frequent day of the week in the year.
You are given a year as integer (e. g. 2001). 
You should return the most frequent day(s) of the week in that year. 
The result has to be a list of days sorted by the order of days in week (e. g. ['Monday', 'Tuesday'], ['Saturday', 'Sunday'], ['Monday', 'Sunday']). 
Week starts with Monday.

Input: Year as an int.

Output: The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

Preconditions:
Week starts on Monday.
Year is between 1583 and 4000.
Calendar is Gregorian.

Example:
mostFrequentDays(2427) => ['Friday']
mostFrequentDays(2185) => ['Saturday']
mostFrequentDays(2860) => ['Thursday', 'Friday']
**/



// check for first day & last day of year
// obj holding all days
// conditional to see if the first day = the last day
// see if the day of the week lands on the first day
// make sure to get the first day of the year and last day of the year

function mostFrequentDays(year){
    const daysOfTheWeek = {
      1: 'Monday', 
      2: 'Tuesday', 
      3: 'Wednesday', 
      4: 'Thursday', 
      5: 'Friday', 
      6: 'Saturday',
      7: 'Sunday'
    }
    const firstDay = getFirstDayOfYear(year)
    const lastDay = getLastDayOfYear(year)
  
    if(firstDay === lastDay) {
      return [daysOfTheWeek[firstDay]]
    } else {
      const mostFrequentDays = [firstDay, lastDay].sort()
      return [daysOfTheWeek[mostFrequentDays[0]], daysOfTheWeek[mostFrequentDays[1]]]
    }
  }
  
  function getFirstDayOfYear(year) {
    const d = new Date(`01 Jan ${year}`)
    const firstDay = d.getDay()
    return firstDay || 7
  }
  
  function getLastDayOfYear(year) {
      const d = new Date(`31 Dec ${year}`)
    const lastDay = d.getDay()
    return lastDay || 7
  }


//Sample:
// Test.assertSimilar(mostFrequentDays(1770), ['Monday'], "Should be: ['Monday']");
// Test.assertSimilar(mostFrequentDays(1785), ['Saturday'], "Should be: ['Saturday']");
// Test.assertSimilar(mostFrequentDays(1794), ['Wednesday'], "Should be: ['Wednesday']");