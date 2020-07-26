const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log('Listening on port: ' + PORT));

//helper to cut every third letter of string out
const cutString = (str) => {
  let finalStr = '', pointer = 1;
  for(const char of str) {
    if(pointer === 3) {
      finalStr += char;
      pointer = 0
    }
    pointer++;
  }
  return finalStr
}

app.post("/test", async (req, res) => {
  try {
    const string_to_cut = cutString(req.body);
    res.status(200).send(string_to_cut);
  } catch (error) {
    res.status(400).send(error);
  }
});