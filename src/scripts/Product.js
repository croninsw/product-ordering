import blank from "./ReviewList"

// This page builds a product representation in HTML

const productHTML = (product) => {
    return `
        <section>
            <h2>${product.name}</h2>
            <div>${product.description}</div>
            <div>${product.price}</div>
            <img src="${product.img}">
        </section>

        <section>
            <div>${}</div>
        </section>
    `
}

export default productHTML