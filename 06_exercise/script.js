function weekNumbersToWords(numbers) {
  const weekdays = [];

  for (let i = 0; i < numbers.length; i++) {
    switch (numbers[i]) {
      case 1:
        weekdays.push('Monday');
        break;
      case 2:
        weekdays.push('Tuesday');
        break;
      case 3:
        weekdays.push('Wednesday');
        break;
      case 4:
        weekdays.push('Thursday');
        break;
      case 5:
        weekdays.push('Friday');
        break;
      case 6:
        weekdays.push('Saturday');
        break;
      case 7:
        weekdays.push('Sunday');
        break;
      default:
        weekdays.push('Invalid day number');
    }
  }

  return weekdays;
}

const input = [4, 3, 1, 8];
const output = weekNumbersToWords(input);

console.log(output);
