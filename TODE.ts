 class TODE {
	static zeros(matrix: number[][]):void{
		let cell:number = 0
		for (var i:number = 0; i < matrix.length; i++){
			var currentRow = matrix[i];
			for (var j = 0; i < currentRow.length; i++){
				matrix[i][j] = 0		
			}
		}
	}

	 static sumMatElements(matrix:number[][]):number{
		let sum:number = 0
		 for (let i:number = 0; i <matrix.length; i++){
			 var currentRow = matrix[i]
		 	for (let j = 0; j < currentRow.length; j++){
				sum += matrix[i][j]
			}
		 }
		 return sum

	 }
}




let MatA: number[][] = [[2, 1, 3], [2,2,2]]

console.log(TODE.sumMatElements(MatA))
