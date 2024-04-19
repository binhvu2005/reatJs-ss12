
enum WeekDays {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday'
  }
  

  function printEnumValues<T extends WeekDays>(enumObj: T): void {
    const values = Object.keys(enumObj);
    for (const key of values) {
      console.log(key);
    }
  }
  

  let weekDays: WeekDays;
  console.log("Các ngày trong tuần là:");

  