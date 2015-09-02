var friends = {};
    friends.eric = {
        firstName: 'Eric',
        lastName: 'Foner',
        number: '(503) 867-5309',
        address: ['One University Way', 'Columiba University','New York', 'NY','10001']
};
    friends.felica = {
        firstName: 'Felica',
        lastName: 'Day',
        number: '(555) 555-5554',
        address: ['1250 12th st.', 'San Franisco', 'CA', '96532']
    };
    
    friends.bill = {
        firstName: 'Bill',
        lastName: 'Clinton',
        number: '(555) 553-4423',
        address: ['1600 Pennsylvania Avenue NW', 'Washington', 'DC', '20500'] 
    };
    
    friends.elizabeth = {
        firstName: 'Elizabeth',
        lastName: 'Warren',
        number: '(504) 555-2247',
        address: ['1425 SW 5th st.', 'Boston', 'Mass', '105060']
    };
    
    friends.steve = {
        firstName: 'Steve',
        lastName: 'Hawking',
        number: '(221) 951-2258',
        address: ['The Old Schools', 'Trinity Lane','Cambridge CB2 1TN',
'United Kingdom']
    };

    var search = function (name) {
        for(var prop in friends) {
            if(friends[prop].firstName === name){
                for(var value in friends[prop]) {
                    var person = friends[prop];
                    console.log(value+": "+person[value]);
                }
            }
        }
    };
search('Steve')
