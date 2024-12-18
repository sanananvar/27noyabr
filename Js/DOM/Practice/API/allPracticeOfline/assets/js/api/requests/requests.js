

export async function GetDatas(url) {
    let datas
    let error
    await axios.get(url)
        .then(res => datas = res.data)
        .then(err => error = err)

    return {
        datas,
        error
    }
}

export async function GetDataById(url, id) {
    let data
    let error

    await axios.get(`${url}/${id}`)
        .then(res => data = res.data)
        .then(err => error = err)

    return {
        data,
        error
    }
}

export async function UpdateData(url, id, updateData) {
    let data
    let error

    await axios.put(`${url}/${id}`, updateData)
        .then(res => data = res.data)
        .then(err => error = err)

    return {
        data,
        error
    }

}

export async function PostData(url, newData) {
    let data
    let error

    await axios.post(url, newData)
        .then(res => data = res.data)
        .then(err => error = err)
    return{
        data,
        error
    }
}
