'use strict';

/*
Transpiler from ES6 to ES5. Remove when NodeJS natively supports ES6.
*/

require('babel/register');
require('./app/backend/server');
