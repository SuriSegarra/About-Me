test('Guess was right!', function(assert) {
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