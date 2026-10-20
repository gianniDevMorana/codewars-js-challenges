function was_package_received_yesterday(tz_from, tz_to, start, duration) {
  if (tz_to >= tz_from && start - (tz_to + tz_from) - duration >= 0) {
    return false;
  } else if (tz_to < tz_from && start + duration - (tz_to + tz_from) < 0) {
    return true;
  }
}

console.log(was_package_received_yesterday(1, 1, 0, 1));
console.log(was_package_received_yesterday(1, 5, 6, 3));
console.log(was_package_received_yesterday(-11, -8, 3, 12));
console.log(was_package_received_yesterday(7, -3, 5, 8));
console.log(was_package_received_yesterday(7, 1, 5, 6));
// console.log(was_package_received_yesterday());s