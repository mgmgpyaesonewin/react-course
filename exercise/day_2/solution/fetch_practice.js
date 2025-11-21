async function getRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const user = data.results[0];

        console.log('--- Random User Data ---');
        console.log(`Name: ${user.name.first} ${user.name.last}`);
        console.log(`Email: ${user.email}`);
        console.log(`Picture: ${user.picture.large}`);
        console.log('------------------------');

    } catch (error) {
        console.error('Error fetching random user:', error);
    }
}

getRandomUser();
