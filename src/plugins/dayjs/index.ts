import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import isBetween from 'dayjs/plugin/isBetween';
import utc from 'dayjs/plugin/utc';

export function setupDayjs() {
  dayjs.extend(duration);
  dayjs.extend(isBetween);
  dayjs.extend(utc);
}
