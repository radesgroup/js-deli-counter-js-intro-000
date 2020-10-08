function currentLine(line){
  if(!line.length){
    return "The line is currently empty."
  }

  const numAndName = [];

   for(let i = 0; i < line.length; i++){
     numAndName.push(`${i + 1}. ${line[i]}`)
   }
   return `The line is currently: ${numAndName.join(', ')}`;

}
