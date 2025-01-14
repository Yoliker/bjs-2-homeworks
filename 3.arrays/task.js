function compareArrays(arr1, arr2) {
	if (arr1.length === arr2.length) {
		return arr1.every((element, index) => element === arr2[index]);
	} else {
		return false;
	}
}

function getUsersNamesInAgeRange(users, gender) {
    const usersGender = users.filter(user => user.gender === gender);
	if (usersGender.length === 0) {
		return 0;
	}
	const usersAges = usersGender.map(user => user.age);
	const averageAge = (usersAges.reduce((acc, age) => (acc + age), 0)) / usersGender.length;
	return averageAge;
}