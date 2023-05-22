enum EntornosURL {
  LOCAL = "localhost"
}

enum Entornos {
  LOCAL = "http://localhost:4000"
}

const resolve = () => {
  switch (location.hostname) {
    case EntornosURL.LOCAL:
      return Entornos.LOCAL;
    default:
      return Entornos.LOCAL;
  }
};
export const resolveUrl = () => {
  return import.meta.env.VITE_API_URL ?? resolve();
};
