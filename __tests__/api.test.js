import {fetchData, dollarsFromCents, getDay} from '../src/api/api.js';

const time = "2016-09-04T21:00:00Z";

const cents = '850';

const expectedValue = {"address": "123 Main Street, Tacoma, WA 98409", "branch": "Tacoma", "branchPhoneNumber": "253", "company": {"address": "123 Main Street, Tacoma, WA 98409", "logo": "https://static.wixstatic.com/media/dc0d61_854a54df0f1049bcbb20e2f9a64236eb.png/v1/fill/w_112,h_112,al_c,usm_0.66_1.00_0.01/dc0d61_854a54df0f1049bcbb20e2f9a64236eb.png", "name": "C.D. Barnes and Associates", "reportTo": "Joe Blogs"}, "duration": "Mon, Sep 5 - Fri, Sep 16", "logo": "https://static.wixstatic.com/media/dc0d61_854a54df0f1049bcbb20e2f9a64236eb.png/v1/fill/w_112,h_112,al_c,usm_0.66_1.00_0.01/dc0d61_854a54df0f1049bcbb20e2f9a64236eb.png", "name": "C.D. Barnes and Associates", "rate": "8.50", "shifts": [{"endDate": "2016-09-05T05:00:00Z", "startDate": "2016-09-04T21:00:00Z"}, {"endDate": "2016-09-06T05:00:00Z", "startDate": "2016-09-05T21:00:00Z"}, {"endDate": "2016-09-07T05:00:00Z", "startDate": "2016-09-06T21:00:00Z"}, {"endDate": "2016-09-08T05:00:00Z", "startDate": "2016-09-07T21:00:00Z"}, {"endDate": "2016-09-09T05:00:00Z", "startDate": "2016-09-08T21:00:00Z"}, {"endDate": "2016-09-12T05:00:00Z", "startDate": "2016-09-11T21:00:00Z"}, {"endDate": "2016-09-13T05:00:00Z", "startDate": "2016-09-12T21:00:00Z"}, {"endDate": "2016-09-14T05:00:00Z", "startDate": "2016-09-13T21:00:00Z"}, {"endDate": "2016-09-15T05:00:00Z", "startDate": "2016-09-14T21:00:00Z"}, {"endDate": "2016-09-16T05:00:00Z", "startDate": "2016-09-15T21:00:00Z"}], "title": "Construction and Releated Workers - General"};

describe('api functions', () => {
  it('fetchData returns correctly formatted jobs data', async () => {
    const response = await fetchData();
    expect(response.value).toEqual(expectedValue);
  });

  it('getDay returns correct day from time', () => {
    const day = getDay(time);
    const expectedDay = 'Mon, Sep 5';
    expect(day).toEqual(expectedDay);
  });

  it('dollarsFromCents returns correct dollars from cents', () => {
    const dollars = dollarsFromCents(cents);
    const expectedDollars = '8.50';
    expect(dollars).toEqual(expectedDollars);
  });
});
