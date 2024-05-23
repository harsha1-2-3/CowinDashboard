import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {VaccinationByAgeList} = props
  console.log(VaccinationByAgeList, 'age')

  return (
    <div className="pieChartCont">
      <h1 className="pieHead">Vaccination by Age</h1>
      <div>
        <PieChart width={1000} height={300}>
          <Pie
            cx="50%"
            cy="50%"
            data={VaccinationByAgeList}
            startAngle={0}
            endAngle={360}
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#5a8dee" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#2cc6c6" />
          </Pie>
          <Legend iconType="circle" layout="horizontal" />
        </PieChart>
      </div>
    </div>
  )
}
export default VaccinationByAge
