function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "Asim", url: "https://chaicode.com"})
        }, 3000)
    })
}

// fetchUserData()
// .then()
// .catch()

async function getUserData() {
    try {
        console.log("Fetching user data");
        const userData = await fetchUserData()

        console.log("User data Fetched successfully")

        console.log("User data: ", userData)
    } catch (error) {
        console.log("Error fetching data", error)
    }
}

getUserData()