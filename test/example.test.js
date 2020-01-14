// IMPORT MODULES under test here:
import isYes from '../isYes.js';

// import example from '../src/example.js';

const test = QUnit.test;

test('Yes is true', function(assert) {
    //Arrange
    const input = 'Yes';
    const expected = true;


    const result = isYes(input);
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('No is false', function(assert) {
    //Arrange
    const input = 'no';
    const expected = false;


    const result = isYes(input);
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('Y is true', function(assert) {
    //Arrange
    const input = 'Y';
    const expected = true;


    const result = isYes(input);
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});







