function dotProduct(v1, v2) {
    let prod = 0;
    for (let i = 0; i < v1.length; i++) {
        prod += v1[i] * v2[i];
    }
    return prod;
}

function Orthogonal(n, vectors) {
    for (let i = 0; i < n; i++) {
        let v1 = vectors[i][0];
        let v2 = vectors[i][1];
        let result = dot_product(v1, v2);
    if (result === 0) {
        console.log("vectors r orthogonal");
    } else {
        console.log("vectors r not orthogonal");
    }
}
