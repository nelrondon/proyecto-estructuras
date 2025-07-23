const preset_name = "preset_estructuras";
const cloud_name = "ddebbrja1";

export const uploadImage = async (files) => {
  const MAX_SIZE = 10485760; // 10 MB
  const file = files[0];
  if (file.size > MAX_SIZE) {
    throw new Error("Imagen demasiado grande");
  }

  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", preset_name);
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    if (!response.ok) {
      const errorData = await response
        .json()
        .catch(() => ({ message: response.statusText }));
      const errorMessage = String(errorData.message).split(".")[0];
      throw new Error(errorMessage);
    }

    const file = await response.json();
    return file.secure_url;
  } catch (error) {
    throw new Error(`Error al cargar la imagen: ${error.message}`);
  }
};
