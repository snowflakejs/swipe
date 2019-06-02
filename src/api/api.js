import moment from "moment";
import data from '../../assets/data.js';

export const getDay = (time) => {
  const arr = moment(time).toString().split(' ');
  return `${arr[0]}, ${arr[1]} ${Number(arr[2])}`;
}

export const dollarsFromCents = cents => {
  return (Number(cents) / 100).toFixed(2);
};

/* Mocks fetch function call */
export function fetchData() {
  const {
    title,
    company,
    shifts,
    wagePerHourInCents,
    branch,
    branchPhoneNumber
  } = data;

  const {name, address, logo} = company;
  const rate = dollarsFromCents(wagePerHourInCents);
  const startDate = getDay(shifts[0].startDate);
  const endDate = getDay(shifts[shifts.length-1].startDate);
  const duration = `${startDate} - ${endDate}`;

  const value = {
    title,
    company,
    shifts,
    rate,
    branch,
    branchPhoneNumber,
    name,
    address,
    logo,
    duration
  };
  const response = {
    value
  };

  return new Promise(resolve => {
    setTimeout(() => resolve(response), 2000);
  });
}
