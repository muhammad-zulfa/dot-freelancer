import {useHttp} from "../../../libs/api/hooks/useAxios";
import {useEffect} from "react";

type propTypes = {
  province?: string,
  onCityChanged: (value: string) => void
}

type apiResponseTypes = {
  city_id: string,
  city_name: string
}

const CitySelector = ({onCityChanged,province}: propTypes) => {
  const [{data, loading, error}, fetchData, cancelRequest] = useHttp({}, {manual: true})

  useEffect(() => {
    if(province) {
      fetchRajaOngkir(province)
      return () => cancelRequest()
    }
  },[province])

  const fetchRajaOngkir = (province: string) => {
    try{
      fetchData({
        url: '/city',
        method: "GET",
        params:{
          province
        }
      })
    }catch (e){
      console.log(e)
    }
  }

  return (
    <select
      className="form-control form-control-sm"
      disabled={!province || !data}
      onChange={(e) => onCityChanged(e.target.value)}>
      <option>--- City ---</option>
      {
        (data && !loading) &&
          data.map((v: apiResponseTypes, index: number) => (
            <option key={index} value={v.city_id}>{v.city_name}</option>
          ))
      }
    </select>
  )
}

export default CitySelector
