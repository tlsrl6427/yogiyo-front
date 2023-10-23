export const locationDecoder = (kakao: any, geocoder: any, coord: any) => {
  return new Promise((resolve, reject) => {
    geocoder.coord2Address(coord.lng, coord.lat, (result: any, status: any) => {
      if (status === kakao.maps.services.Status.OK) {
        resolve(result[0].address.address_name);
      } else {
        reject(new Error('Failed to decode address'));
      }
    });
  });
}