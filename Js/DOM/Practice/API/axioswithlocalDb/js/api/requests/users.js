
export async function GetAllUsers(url) {
    let users
    let error

    await axios.get(url)
        .then(res => users = res.data)
        .then(err => error = err)

    return {
        users,
        error
    }

}

export async function userPost(url, newUsers) {
    let users
    let error

    await axios.post(url, newUsers)
        .then(res => users = res.data)
        .ther(err => error = err)

    return {
        users,
        error
    }



}


export async function GetUsersById(url, id) {
    let users
    let error

    await axios.get(`${url}/${id}`)
        .then(res => users = res.data)
        .then(err => error = err)

    return {
        users,
        error
    }



}


export async function UpdateUser(url, id, UpdatedUser) {
    let users
    let error

    await axios.put(`${url}/${id}`, UpdatedUser)
        .then(res => users = res.data)
        .then(err => error = err)

    return {
        users,
        error
    }

}


export async function DeleteUser(url, id) {
    let users
    let error

    await axios.delete(`${url}/${id}`)
        .then(res => users = res.data)
        .catch(err => error = err)
    return {
        users,
        error
    }
}