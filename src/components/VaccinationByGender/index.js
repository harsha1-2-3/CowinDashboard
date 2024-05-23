import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {VaccinationByGenderList} = props
  console.log(VaccinationByGenderList, 'gender')

  return (
    <div className="halfPieChartCont">
      <h1 className="halfPieHead">Vaccination by gender</h1>
      <div>
        <PieChart width={1000} height={300}>
          <Pie
            data={VaccinationByGenderList}
            dataKey="count"
            cx="50%"
            cy="70%"
            innerRadius={80}
            outerRadius={160}
            startAngle={180}
            endAngle={0}
            fill="#8884d8"
          >
            <Cell name="Male" className="male" fill="#f54394" />
            <Cell name="Female" className="female" fill="#5a8dee" />
            <Cell name="Others" className="others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            dataKey="gender"
            verticalAlign="bottom"
            height={40}
          />
        </PieChart>
      </div>
    </div>
  )
}

export default VaccinationByGender
