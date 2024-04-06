

class DateConverter {
 months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  format(date) {
    const day = date.getDate();
    const month = this.months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return {
      day,
      month,
      year,
      hours,
      minutes: minutes.toString().padStart(2, '0'),
    };
  }
}

export default DateConverter;