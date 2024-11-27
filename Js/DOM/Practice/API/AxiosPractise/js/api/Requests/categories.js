

export async function GettAllCategories(url) {
    let categories
    let error

    await axios.get(url)
        .then(res => categories = res.data)
        .catch(err => error = err)

    return {
        categories,
        error
    }
}



export async function GetCategoriesById(url, id) {
    let categories
    let error

    await axios.get(`${url}/${id}`)
        .then(res => categories = res.data)
        .then(err => error = err)

    return {
        categories,
        error
    }



}

export async function PostCategories(url, newCategories) {
    let categories
    let error

    await axios.post(url, newCategories)
        .then(res => categories = res.data)
        .then(err => error = err)

    return {
        categories,
        error
    }

}


export async function UpdateCategory(url, id, updatedCategory) {
    let categories
    let error
    await axios.put(`${url}/${id}`, updatedCategory)
        .then(res => categories = res.data)
        .catch(err => error = err)

    return {
        categories,
        error
    }
}


export async function DeleteCategory(url,id){
    let categories
    let error

  await axios.delete(`${url}/${id}`)
    .then(res=>categories=res.data)
    .catch(err=>error=err)
    return{
    categories,
     error
    }
}