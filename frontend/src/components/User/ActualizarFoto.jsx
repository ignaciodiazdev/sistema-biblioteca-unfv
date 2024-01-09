import { useState } from "react";
import { uploadFile } from "../../firebase/config";
import { useApp, useUser } from "../../hooks";

export const ActualizarFoto = ({ onClose }) => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const { auth } = useApp();
  const { patchUser } = useUser();
  const nameDefault = auth.me.codigo_insti;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await uploadFile(file, nameDefault);
      await patchUser({ image: result });
      console.log(result);
      console.log(file);
      setUrl(result);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="my-4">
          <input
            type="file"
            className="form-control"
            name=""
            id=""
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button 
          className="btn btn-primary w-100"
          disabled={ !file ? true : false } 
          onClick={onClose}
        >
          Actualizar
        </button>
      </form>
      {url && <img src={url} alt="" className="w-100" />}
    </>
  );
};
