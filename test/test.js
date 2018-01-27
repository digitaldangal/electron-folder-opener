let chai = require('chai');
let should = chai.should();

describe('Am I too lazy to write unit tests ?', function() {
    it('Yes', (done) => {
        "Absolutely".should.equals("Absolutely")
        done()
    })
})
