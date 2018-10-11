require('./db');

const Company = require('./company');

Company.create({
	name: 'Apple',
	founded: new Date('1976-04-01'),
	employees: 2,
	active: false,
	products: ['computers'],
	CEO: {
		name: 'Steve Jobs',
		age: 21
	}
}, (err,createdCompany) => {
	if(err) {
		console.log(err);
	} else {
		// console.log(createdCompany);
		Company.updateOne(
			{
				name: 'Apple'
			}, {
				$set: {
					name: 'Apple Inc', 
					employees: 66000, 
					active: true, 
					products: ['computers','phones','tablets'], 
					CEO: {
						name: 'Time Cook', 
						age: 56
					}}}, {new: true}, (err, updatedCompany) => {
			if(err) {
				console.log(err);
			} else {
				console.log(updatedCompany);
			Company.find({name: 'Apple Inc'}, (err, foundCompanies) => {
				if(err) {
					console.log(err);
				} else {
					console.log(foundCompanies[0].employees);//show employees--no duplication
					console.log(foundCompanies);//show whole object--no duplication
				Company.deleteOne({name: 'Apple Inc'}, (err, response) => {
					if(err) {
						console.log(err);
					} else {
						console.log(response);
							}
						})
					}
				})
			}
		});
	}
});
					

Company.create({
	name: 'Google',
	founded: new Date('1998-09-04'),
	employees: 57100,
	active: true,
	products: ['search','maps','email'],
	CEO: {
		name: 'Larry Page',
		age: 43
	}
}, (err,createdCompany) => {
			if(err) {
				console.log(err);
			} else {
				// console.log(createdCompany + "this is your FIRST object");
				Company.find({name: 'Google'}, (err, foundCompanies) => {
					if(err) {
						console.log(err);
					} else {
						console.log(foundCompanies[0].employees);//show employees--no duplication
						console.log(foundCompanies);//show whole object--duplication
					Company.deleteOne({name: 'Google'}, (err, response) => {
						if(err) {
							console.log(err);
						} else {
						console.log(response);
					}
				})
			}
		})
	}
});


