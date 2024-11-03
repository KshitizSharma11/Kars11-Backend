
const getCars=async()=>{
  const response=await fetch('https://api.example.com/cars')
  return await response.json()
};

export const CarsController={
    getCars
}
