import {
  Input,
  TextArea,
  PushError,
  Select,
} from "../components/ComponentsForm";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Loading } from "../components/Loading";
import { registerProperty } from "../api/properties";
import { uploadImage } from "../api/cloudinary";

//"title" "description" "status" "property_type" "address" "city" "state" "zip_code" "price" "bedrooms" "bathrooms" "square_feet":
export const SellPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setApiError("");
    const dataProperty = {
      title: data.title,
      description: data.description,
      status: data.status,
      property_type: data.property_type,
      address: data.address,
      city: data.city,
      state: data.state,
      price: parseInt(data.price),
      bedrooms: parseInt(data.bedrooms),
      bathrooms: parseInt(data.bathrooms),
      square_feet: parseInt(data.square_feet),
      parking_lots: parseInt(data.parking_lots),
    };

    try {
      const files = data.img;
      const img_url = await uploadImage(files);
      await registerProperty({
        ...dataProperty,
        img_url,
      });
      reset();
      setLoading(false);
    } catch (e) {
      setApiError(e.message || e.response.data.error);
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <>
      <h1 className="main-title">Nueva Publicación</h1>

      <form
        className="user-form wide split card-style "
        onSubmit={handleSubmit(onSubmit)}
      >
        {apiError && <PushError error={apiError} />}
        <div className="wrap">
          <Input
            className={errors.title ? "error" : ""}
            label="Titulo de Publicación"
            name="title"
            placeholder="Casa de Verano"
            {...register("title", { required: true })}
          />
          {errors.title && <p className="errors">Ingresa un titulo</p>}

          <Select
            className={errors.property_type ? "error" : ""}
            label="Tipo de Propiedad"
            name="property_type"
            {...register("property_type", { required: true })}
          >
            <option value="Casa">Casa</option>
            <option value="Apartamento">Apartamento</option>
            <option value="Terreno">Terreno</option>
            <option value="Comercial">Comercial</option>
          </Select>
          {errors.property_type && <p className="errors">Ingresa una opción</p>}

          <Select
            className={errors.status ? "error" : ""}
            label="Tipo de Oferta"
            name="status"
            {...register("status", { required: true })}
          >
            <option value="Venta">Venta</option>
            <option value="Alquiler">Alquiler</option>
            <option value="Ambas">Venta ó Alquiler</option>
          </Select>
          {errors.status && <p className="errors">Ingresa una opción</p>}

          <Input
            className={errors.price ? "error" : ""}
            label="Precio/Mesualidad de la Propiedad"
            name="price"
            type="number"
            min={0}
            placeholder="Digita el precio"
            {...register("price", { required: true })}
          />
          {errors.price && <p className="errors">Ingresa el precio</p>}
          <Input
            className={errors.bedrooms ? "error" : ""}
            label="Habitaciones"
            name="bedrooms"
            type="number"
            min={0}
            placeholder="Digita el número de habitaciones"
            {...register("bedrooms", { required: true })}
          />
          {errors.bedrooms && (
            <p className="errors">Ingresa el número de habitaciones</p>
          )}
          <Input
            className={errors.bathrooms ? "error" : ""}
            label="Baños"
            name="bathrooms"
            type="number"
            min={0}
            placeholder="Digita el número de baños"
            {...register("bathrooms", { required: true })}
          />
          {errors.bathrooms && (
            <p className="errors">Ingresa el número de baños</p>
          )}

          <TextArea
            className={errors.description ? "error" : ""}
            label="Descripción"
            name="description"
            placeholder="Describenos tu propiedad..."
            {...register("description", { required: true })}
          />
          {errors.description && (
            <p className="errors">Ingresa la descripción de tu propiedad</p>
          )}
        </div>

        <div className="wrap">
          <Input
            className={errors.address ? "error" : ""}
            label="Dirección"
            name="address"
            placeholder="Coloca aquí la dirección"
            {...register("address", { required: true })}
          />
          {errors.address && <p className="errors">Ingresa la dirección</p>}
          <Input
            className={errors.state ? "error" : ""}
            label="Estado"
            name="state"
            placeholder="Coloca aquí el estado"
            {...register("state", { required: true })}
          />
          {errors.state && (
            <p className="errors">Ingresa el estado donde se encuentra</p>
          )}
          <Input
            className={errors.city ? "error" : ""}
            label="Ciudad"
            name="city"
            placeholder="Coloca aquí la ciudad"
            {...register("city", { required: true })}
          />
          {errors.city && (
            <p className="errors">Ingresa la ciudad donde se encuentra</p>
          )}
          <Input
            className={errors.parking_lots ? "error" : ""}
            label="Espacios de estacionamiento"
            name="parking_lots"
            type="number"
            min={0}
            placeholder="Digita el número de estacionamientos"
            {...register("parking_lots", { required: true })}
          />
          {errors.parking_lots && (
            <p className="errors">Ingresa el número de estacionamientos</p>
          )}
          <Input
            className={errors.square_feet ? "error" : ""}
            label="Superficie"
            name="square_feet"
            type="number"
            min={0}
            placeholder="Coloque la superficie del terreno en m²"
            {...register("square_feet", { required: true })}
          />
          {errors.square_feet && (
            <p className="errors">Ingresa la superficie de la propiedad</p>
          )}

          <Input
            className={errors.img ? "error" : ""}
            label="Carga una imagen"
            name="img"
            type="file"
            accept="image/*"
            {...register("img", { required: true })}
          ></Input>
          {errors.img && <p className="errors">Carga una imagen</p>}

          <button className="boton" type="submit">
            Crear Publicación
          </button>
        </div>
      </form>
    </>
  );
};
