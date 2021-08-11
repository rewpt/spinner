//NOTE TO SELF THAT WHEN I TRIED TO USE A FOR OF LOOP
//WITHOUT USING 'let' IT BROKE THIS CODE!! 

const spinStr = '|/-\\';

const spinner2 = function(animationStr) {
  let delay = 0;
  let repeats = 3;

  for(let i = 0; i < repeats; i++) {
    for (let component of animationStr) {
      setTimeout( () => {
        process.stdout.write(`\r${component}`);
      }, delay)
      delay += 200;
    }
  }
  setTimeout( () => process.stdout.write(`\r|`) , delay)
}

spinner2(spinStr);