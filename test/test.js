var assert = require('assert');
let bmi_execute_v1 = require("../bmi_v1").bmi_execute_v1;
let fixtures = require("./bmi_v1_fixture").fixtures;
describe('bmi_v1', function () {
    describe('#bmi_execute_v1()', function () {
        it('should return expected json - Test 1', function () {
            let actual_json = bmi_execute_v1(fixtures.test1.input_json);
            assert.deepStrictEqual(actual_json, fixtures.test1.expected_json);
        });
    });
});