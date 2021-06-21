type Shape =
    { kind: "circle", color: string, readonly radius: number } |
    { kind: "cylinder", color: string, radius: number, height: number }

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "cylinder":
            return (Math.PI * shape.radius ** 2) * shape.height;
    }
    throw new Error("Ups!");
}

function getPerimeter(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * 2;
        case "cylinder":
            return 2 * (Math.PI * 2 * shape.radius + shape.height)
    }
}

function shapeToString(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return `kind: ${shape.kind}, color: ${shape.color}, radius: ${shape.radius}`;
        case "cylinder":
            return `kind: ${shape.kind}, color: ${shape.color}, radius: ${shape.radius}, height: ${shape.height}`;
    }
}


const shape: Shape = {kind: "circle", radius: 500, color: "red"};
console.log(getArea(shape));
