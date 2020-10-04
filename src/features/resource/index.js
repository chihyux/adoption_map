import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { AlarmIcon, CityDataWrapper } from './style/alarmIcon'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { LoadingWrapper } from '../../components/style/loading'
import ErrorBox from '../../components/error'
import Loading from '../../components/loading'
import LoadingIcon from '../../assets/image/loading_icon.svg'

const Resource = () => {
  let resourceParams = {
    route: '/resource',
    params: {
      UnitId: 'p9yPwrCs2OtC',
      rpt_year: 109,
      rpt_month: 7,
    },
  }
  const { resourceData, isFetching, isFetchingError } = useFetch(resourceParams)
  // let value = resourceData.map((data, index) => {
  //   return {
  //     value: data.rpt_country,
  //     type: 'square',
  //     id: `legen${index}`,
  //   }
  // })

  const transferString = (value) => {
    console.log(value)
    return Number(value.slice(0, -4))
  }

  return (
    <>
      {isFetching ? (
        <LoadingWrapper>
          <Loading icon={LoadingIcon} />
        </LoadingWrapper>
      ) : isFetchingError ? (
        <ErrorBox />
      ) : (
        <>
          <h1>各地數據</h1>
          <ResponsiveContainer width="100%" height={700}>
            <BarChart
              data={resourceData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" unit="%" />
              <YAxis dataKey="rpt_country" type="category" />
              <Tooltip />
              <Legend />
              <Bar
                name="(犬)在養占可留容比例"
                dataKey={(value) => {
                  return Number(value.end_dog_max_percent.slice(0, -4))
                }}
                stackId="end_dog_max_percent"
                fill="#7DC8D8"
              />
              <Bar
                name="(貓)在養占可留容比例"
                dataKey={(value) => {
                  return Number(value.end_cat_max_percent.slice(0, -4))
                }}
                stackId="end_cat_max_percent"
                fill="#C68255"
              />
            </BarChart>
          </ResponsiveContainer>
          <span>資料更新時間：2020/07</span>

          <h2>超過收容數占可留容比警示</h2>
          <CityDataWrapper>
            {resourceData.map((data) => {
              return (
                <div key={data.ID}>
                  <span>{data.rpt_country}</span>
                  <span>
                    <AlarmIcon num={transferString(data.end_cat_max_percent)}>
                      貓
                    </AlarmIcon>
                    <AlarmIcon num={transferString(data.end_dog_max_percent)}>
                      狗
                    </AlarmIcon>
                  </span>
                </div>
              )
            })}
          </CityDataWrapper>
        </>
      )}
    </>
  )
}

export default Resource
