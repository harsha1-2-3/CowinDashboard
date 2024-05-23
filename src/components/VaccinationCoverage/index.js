import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {VaccinationCoverageList} = props
  console.log(VaccinationCoverageList, 'coverage')

  return (
    <div className="barChartCont">
      <h1 className="barHead">Vaccination Coverage</h1>
      <div>
        <BarChart width={1000} height={300} data={VaccinationCoverageList}>
          <XAxis dataKey="vaccineDate" className="xAxis" />
          <YAxis className="yAxis" />
          <Legend
            iconType="rect"
            layout="horizontal"
            wrapperStyle={{padding: 30}}
            className="legend"
          />
          <Bar
            dataKey="dose1"
            fill="#5a8dee"
            name="Dose 1"
            barSize="40%"
            className="dose_1_Bar"
          />
          <Bar
            dataKey="dose2"
            fill="#f54394"
            name="Dose 2"
            barSize="20%"
            className="dose_2_Bar"
          />
        </BarChart>
      </div>
    </div>
  )
}
export default VaccinationCoverage
