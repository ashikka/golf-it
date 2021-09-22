const conf = {
  Black: (arg:String) => '\u001b[30m' + arg + '\u001b[0m',
  Red: (arg:String) => '\u001b[31m' + arg + '\u001b[0m',
  Green: (arg:String) => '\u001b[32m' + arg + '\u001b[0m',
  Yellow: (arg:String) => '\u001b[33m' + arg + '\u001b[0m',
  Blue: (arg:String) => '\u001b[34m' + arg + '\u001b[0m',
  Magenta: (arg:String) => '\u001b[35m' + arg + '\u001b[0m',
  Cyan: (arg:String) => '\u001b[36m' + arg + '\u001b[0m',
  White: (arg:String) => '\u001b[37m' + arg + '\u001b[0m',

  copyright:'\u00A9',

  format: {

  },
  
  colors: {
    Black: '\u001b[30m',
    Red: '\u001b[31m',
    Green: '\u001b[32m',
    Yellow: '\u001b[33m',
    Blue: '\u001b[34m',
    Magenta: '\u001b[35m',
    Cyan: '\u001b[36m',
    White: '\u001b[37m',
    Reset: '\u001b[0m',
  }
}

export default conf;