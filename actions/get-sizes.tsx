import { Size } from "@/types";

const URL = `http://localhost:3001/api/9200e80b-0555-4b88-8948-f53a46ead8eb/sizes`;

const getSizes = async () : Promise<Size[]> => {
  const response = await fetch(URL);
  
  return response.json();
};

export default getSizes;
