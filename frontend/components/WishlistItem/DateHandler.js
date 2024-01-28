export const processDate = (timestamp) => {
  const date = new Date(timestamp);

  const day = date.getDate(); // Get the day (1-31)
  const month = date.getMonth() + 1; // Get the month (0-11); January is 0, so add 1
  const year = date.getFullYear() % 100; // Get the year (e.g., 2024 -> 24)

  // Format day, month, and year to have two digits
  const formattedDay = String(day).padStart(2, '0');
  const formattedMonth = String(month).padStart(2, '0');
  const formattedYear = String(year).padStart(2, '0');

  // const formattedDate = `${formattedDay}/${formattedMonth}/${formattedYear}`;

  return [formattedDay, formattedMonth, formattedYear];
}