function taggedStr(formats, ...args) {
  console.log('----------------formats');
  console.log(formats);
  console.log('--------------------args');
  console.log(args);
  console.log(formats.length);
  return formats[0] + args[0] + formats[1] + args[1] + formats[2];
}

let greeting = 'Hello', name = 'Yamada';

console.log(taggedStr`${ greeting }, ${ name } !!`);
