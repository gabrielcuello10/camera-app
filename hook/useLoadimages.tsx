import { useState, useEffect } from "react";
import { Asset } from "expo-media-library";
import { LoadImages } from "@/utils/load.images";

function useLoadImages() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Asset[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const photos = await LoadImages();
        setData(photos.assets.reverse());
      } catch (err) {
        setError("Error al cargar las imágenes");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return { loading, data, error };
}

export default useLoadImages;
