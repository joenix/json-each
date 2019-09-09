function jsonEach(json = {}, callback = () => {}, deconstruct = false) {
  for (let i in json) {
    deconstruct
      ? callback({
          key: i,
          value: json[i]
        })
      : callback(json[i], i);
  }
}

export default jsonEach;
