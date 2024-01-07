//First, parse the input data

var inputTriangle = `75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`;

var triangle = inputTriangle.split("\n");

for (let i = 0; i < triangle.length; i++) {
    triangle[i] = triangle[i].split(" ").map((x) => parseInt(x));
}

/* Algorithm: we work from the bottom up:
Start at the second-to-bottom row of the triangle (row index triangle.length-2), which has n elements
Add each number to the 2 numbers beneath it, and keep the higher number (add it to a temporary array)
Make this array the new bottom row of the triangle (at the level of the current row) and repeat the algorithm with the row above it as the new "second-to-bottom row"
*/

for (let i = triangle.length - 2; i >= 0; i--) {
    let newCurrentRow = []; //array of elements to replace the row above with

    for (let j = 0; j < triangle[i].length; j++) {
        let sumWithBottomLeft = triangle[i][j] + triangle[i+1][j];
        let sumWithBottomRight = triangle[i][j] + triangle[i+1][j+1];

        if (sumWithBottomLeft > sumWithBottomRight) {
            newCurrentRow.push(sumWithBottomLeft);
        } else {
            newCurrentRow.push(sumWithBottomRight);
        }
    }

    triangle[i] = newCurrentRow;
}

console.log(triangle[0][0]); //our answer will be the new value at the top of the triangle