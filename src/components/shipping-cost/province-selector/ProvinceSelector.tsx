import {useHttp} from "../../../libs/api/hooks/useAxios";
import {useEffect} from "react";

type propTypes = {
  onProvinceChanged: (value: string) => void
}

type apiResponseTypes = {
  province_id: string,
  province: string
}

const ProvinceSelector = ({onProvinceChanged}: propTypes) => {
  const [{data, loading, error}, fetchData, cancelRequest] = useHttp({}, {manual: true})

  useEffect(() => {
    fetchRajaOngkir()
    return () => cancelRequest()
  },[])

  const fetchRajaOngkir = () => {
    try{
      fetchData({
        url: '/province',
        method: "GET",
      })
    }catch (e){
      console.log(e)
    }
  }

  return (
    <select
      className="form-control form-control-sm"
      onChange={(e) => onProvinceChanged(e.target.value)}>
      <option>--- Province ---</option>
      {
        (data && !loading) &&
          data.map((v: apiResponseTypes, index: number) => (
            <option key={index} value={v.province_id}>{v.province}</option>
          ))
      }
    </select>
  )
}

export default ProvinceSelector
