// @ts-check
const renderError = require("../../render/error");

module.exports = async (req, res) => {
  const b64String = req.query.base64 || "";
  console.log("b64String: ", b64String);
  try {
    var byteString = atob(b64String);
    var arrayBuffer = new ArrayBuffer(byteString.length);
    var intArray = new Uint8Array(arrayBuffer);
    for (var i = 0; i < byteString.length; i++) {
      intArray[i] = byteString.charCodeAt(i);
    }
    var imageBlob = new Blob([intArray], { type: "image/png" });

    res.setHeader("Content-Type", "image/png");
    res.setHeader("Content-Length", imageBlob.size);
    res.send(imageBlob);
  } catch (e) {
    console.log("e : ", e);
    return res.send(renderError());
  }
};
