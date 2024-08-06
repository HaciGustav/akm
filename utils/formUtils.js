export const imageToBase64 = (file) => {
  let base64String = "";

  let reader = new FileReader();

  reader.onload = function () {
    base64String = reader.result.replace("data:", "").replace(/^.+,/, "");

    imageBase64Stringsep = base64String;

    // alert(imageBase64Stringsep);
  };
  reader.readAsDataURL(file);
  return base64String;
};
