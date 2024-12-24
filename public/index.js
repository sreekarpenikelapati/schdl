import { timer } from './timer.js';
import { advisoryTimings, regularTimings, test, temp, temp2, halfDayTimings, delayTimings, pepRallyStadTimings, pepRallyGymTimings, homeroomStartTimings} from './timings.js';

var today = new Date();

if(today.getDay() == 6 || today.getDay() == 0) { 
   timer("00:00:00","its the weekend");
   
} else if(today.getDay() == 1) {
  let promise = Promise.resolve();
  let monday = regularTimings
  for (const [time, message] of monday) {
    promise = promise.then(() => lol(time, message));
  }
} else if(today.getDay() == 2) {
  let tuesday = advisoryTimings
  let promise = Promise.resolve();
  for (const [time, message] of tuesday) {
    promise = promise.then(() => timer(time, message));
  }
} else if(today.getDay() == 3) {
  let promise = Promise.resolve();
  let wednesday = regularTimings
  for (const [time, message] of wednesday) {
    promise = promise.then(() => timer(time, message));
  }
} else if(today.getDay() == 4) {
  let promise = Promise.resolve();
  let thursday = halfDayTimings
  for (const [time, message] of thursday) {
    promise = promise.then(() => timer(time, message));
  }
} else if(today.getDay() == 5) {
  let promise = Promise.resolve();
  let friday = regularTimings
  for (const [time, message] of friday) {
    promise = promise.then(() => timer(time, message));
  }
}
