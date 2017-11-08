var user = {

    name :'Ali',
    logName:()=>{
        // console.log(arguments);//different result
        console.log('My name is: ',user.name); //wont work
    },
    logName2 () {
        console.log(arguments);
        console.log('My name is: ',this.name);
    }
};

user.logName(1,2,3);