export function getNextBirthday(birthday) {
  const today = new Date();

  const currentYear = today.getFullYear();

  let nextBirthday = new Date(
    currentYear,
    birthday.month - 1,
    birthday.day
  );

 
  if (
    nextBirthday <
    new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    )
  ) {
    nextBirthday = new Date(
      currentYear + 1,
      birthday.month - 1,
      birthday.day
    );
  }

  return nextBirthday;
}

export function getDaysUntilBirthday(birthday) {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const nextBirthday = getNextBirthday(birthday);

  const difference =
    nextBirthday.getTime() - today.getTime();

  return Math.round(
    difference / (1000 * 60 * 60 * 24)
  );
}

export function getTurningAge(birthday) {
  const nextBirthday = getNextBirthday(birthday);

  return nextBirthday.getFullYear() - birthday.year;
}

export function isBirthdayToday(birthday) {
  const today = new Date();

  return (
    today.getDate() === birthday.day &&
    today.getMonth() + 1 === birthday.month
  );
}