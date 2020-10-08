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

function nowServing(line){
  if(!line.length){
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`;
}

function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.indexOf(name)} in line.`
}
