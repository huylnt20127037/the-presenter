class NumberExtension {
     static getRandomInt = (min, max) => {
          return Math.floor(Math.random() * max) + min;
     }
}

export default NumberExtension