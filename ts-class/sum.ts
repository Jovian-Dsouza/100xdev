function calculate(a: number, 
                   b: number, 
                   type: "sum" | "div" | "diff" | "mult"
                  ): number {
  if(type === "sum") {
    return a + b;
  }  
  if(type === "div") {
    return a / b;
  }  
  if(type === "diff") {
    return a - b;
  }  
  if (type === "mult") {
    return a * b;
  }  
  return -1;
}

var ans = calculate(3, 4, "susm");
console.log(ans);