import Image from "next/image";
import { Brand, Model, VehicleRows } from "../../types/vehicle";
import CustomSelect from "../select";
import CustomInput from "../textinput";

type FormProps = {
  vehicleBrands: Brand[];
  vehicleModels: Model[];
  vehicle: VehicleRows;
  handleVehicle: (field: string, value: string) => void;
};

export default function VehicleForm({ vehicle, vehicleBrands, vehicleModels, handleVehicle }: FormProps) {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        handleVehicle("logo", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="w-[90%] h-full flex mx-auto justify-between">
        <div className="w-[45%] h-full flex flex-col items-center justify-between">
          <div className="w-full flex items-center justify-between">
            <CustomSelect
              options={vehicleBrands.map((el) => ({ key: el.brand, label: el.brand }))}
              value={[]}
              onChange={(e) => handleVehicle("brand", e.target.value)}
              placeholder="Marcas"
              size="sm"
            />
            <CustomSelect
              options={vehicleModels.map((el) => ({ key: el.model, label: el.model }))}
              value={[]}
              onChange={(e) => handleVehicle("model", e.target.value)}
              placeholder="Modelos"
              size="sm"
            />
          </div>
          <CustomInput
            value={vehicle.brand}
            onChange={(e) => handleVehicle("brand", e.target.value)}
            placeholder="Marca"
            size="lg"
          />
          <CustomInput
            value={vehicle.model}
            onChange={(e) => handleVehicle("model", e.target.value)}
            placeholder="Modelo"
            size="lg"
          />
        </div>
        <div className="w-[45%] h-full flex flex-col items-center justify-between py-[0.5rem]">
          <div className="w-[200px] h-[140px] flex items-center justify-center rounded-lg">
            {vehicle.logo ? (
              <Image src={vehicle.logo} alt="logo" width={120} height={120} />
            ) : (
              <div className="w-full h-full bg-slate-600/30 rounded-lg backdrop-blur-lg"></div>
            )}
          </div>
          <div className="w-full h-[20%] flex items-center justify-center">
            <label
              htmlFor="logo"
              className={`
              bg-slate-700 text-white px-[1.5rem] py-[0.8rem] rounded-[8px] my-[1rem]
              text-sm font-medium cursor-pointer hover:bg-slate-600 transition-colors duration-300 ease-in-out
              `}
            >
              Cargar logo
            </label>
            <input
              id="logo"
              type="file"
              className="hidden w-0 h-0"
              accept="image/png, image/jpeg"
              onChange={handleFileUpload}
            />
          </div>
        </div>
      </div>
    </>
  );
}
