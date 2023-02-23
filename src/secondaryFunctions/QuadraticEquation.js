export const QuadraticEquation = (A, B, C) => {
    const D = B ** 2 - 4*A*C;

    const x1 = (-B + Math.sqrt(D)) / (2 * A)
    const x2 = (-B - Math.sqrt(D)) / (2 * A)

    return [x1, x2]
}