import { Asset, getAssetsAsync, PagedInfo } from "expo-media-library";

async function LoadImages() {
  const photos: PagedInfo<Asset> = await getAssetsAsync({
    mediaType: "photo",
  });

  return photos;
}
export { LoadImages };
