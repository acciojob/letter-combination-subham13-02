function letterCombinations(input_digit) {
  let table={
	  2:"abc" ,
	  3:"def" ,
	  4:"ghi" ,
	  5:"jkl" ,
	  6:'mno',
	  7:"pqrs" ,
	  8:"tuv" ,
	  9:"wxyz"
  }
	let sol=[];

	function solve(index,String){
		if(input_digit.lenth<=index){
			sol.push(String);
			return;
		}
		let char=input_digit[index];
		for(let i=0;i<table[char].length;i++){
			solve(index+1,String+table[char][i])
		}
	}
	solve(0,"");
	return sol;
}

module.exports = letterCombinations;
