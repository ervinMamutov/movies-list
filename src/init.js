import loadEvent from './events/loadEvent.js';
import addMovieEvent from './events/addMovieEvent.js';
import cancelEvent from './events/cancelEvent.js';
import yearsEvent from './events/yearsEvent.js';
import yearsHandler from './handlers/yearsHandler.js';

loadEvent();
addMovieEvent();
cancelEvent();
yearsEvent();
yearsHandler();
