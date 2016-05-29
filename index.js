if (!global.fetch) {
    global.fetch = require('node-fetch');
}
require('./built/src/index');