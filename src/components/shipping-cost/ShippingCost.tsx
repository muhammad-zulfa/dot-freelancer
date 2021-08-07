import {useEffect, useState} from "react";
import useSWR from "swr";
import {useHttp} from "../../libs/api/hooks/useAxios";
import ProvinceSelector from "./province-selector/ProvinceSelector";
import CitySelector from "./city-selector/CitySelector";
import {useDispatch} from "react-redux";
import {clearCart} from "../../redux/app/actions";
import {useRouter} from "next/router";

type propTypes = {
  totalWeight: number
}
type apiResponseTypes = {
  cost: [{
    value: number,
    etd: string,
    note: string
  }],
  description: string,
  service: string
}

const ShippingCost = ({totalWeight}: propTypes) => {
  const [province, setProvince] = useState<string>()
  const [city, setCity] = useState<string>()
  const [courier, setCourier] = useState<string>()
  const [{data, loading, error}, fetchData, cancelRequest] = useHttp({}, {manual: true})
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if(city && courier && totalWeight) {
      fetchRajaOngkir(city, totalWeight, courier)
      return () => cancelRequest()
    }
  },[courier, city, totalWeight])

  const fetchRajaOngkir = (destination: string, weight: number, courier: string) => {
    try{
      fetchData({
        url: '/cost',
        method: "POST",
        data:{
          origin: "78",
          destination,
          weight,
          courier
        }
      })
    }catch (e){
      console.log(e)
    }
  }

  const RenderCost = () => !data || loading ? <div className="mt-2"> Loading...</div> : data.costs.length > 0 ? (
    <div className="d-flex flex-column">
      {data.costs.map((v: apiResponseTypes, index: number) => {
        return (
          <div key={index} className="mt-2 d-flex justify-content-between">
            <div>{v.service}</div>
            <div>{v.cost[0].etd} Days Estimated</div>
            <div>Rp {Intl.NumberFormat("en").format(v.cost[0].value)}</div>
          </div>
        )
      })}
    </div>
  ) : <div className="mt-2"> Courier Not Available </div>;

  const submitOrder = () => {
    alert("Thank You for your order")
    router.push("/")
    dispatch(clearCart())
  }

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <select className="form-control form-control-sm" onChange={(e) => setCourier(e.target.value)}>
            <option>--- SELECT COURIER ---</option>
            <option value="jne">JNE</option>
            <option value="pos">POS</option>
            <option value="tiki">TIKI</option>
          </select>
        </div>
        <div className="col-md-4">
          <ProvinceSelector onProvinceChanged={(v) => setProvince(v)}/>
        </div>
        <div className="col-md-4">
          <CitySelector onCityChanged={(v) => setCity(v)} province={province} />
        </div>
      </div>
      <RenderCost/>
      <button className="mt-3 btn btn-primary form-control" onClick={() => submitOrder()}>Order Now</button>
    </>
  )
}

export default ShippingCost
