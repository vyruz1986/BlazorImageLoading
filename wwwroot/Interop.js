window.setImage = async (imageElementId, imageStream) => {
  const arrayBuffer = await imageStream.arrayBuffer();
  const blob = new Blob([arrayBuffer]);
  const url = URL.createObjectURL(blob);
  const image = document.getElementById(imageElementId);
  if (image === null) {
    return;
  }

  image.onload = () => {
    URL.revokeObjectURL(url);
  };
  image.src = url;
};
