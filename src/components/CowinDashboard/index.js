import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    VaccinationCoverageList: [],
    VaccinationByGenderList: [],
    VaccinationByAgeList: [],
  }

  componentDidMount() {
    this.getVaccinationData()
  }

  getVaccinationData = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      const {last7DaysVaccination, vaccinationByAge, vaccinationByGender} =
        updatedData
      const updated7daysVaccination = last7DaysVaccination.map(each7days => ({
        vaccineDate: each7days.vaccine_date,
        dose1: each7days.dose_1,
        dose2: each7days.dose_2,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        VaccinationCoverageList: updated7daysVaccination,
        VaccinationByGenderList: vaccinationByGender,
        VaccinationByAgeList: vaccinationByAge,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {
      VaccinationByGenderList,
      VaccinationByAgeList,
      VaccinationCoverageList,
    } = this.state

    return (
      <>
        <VaccinationCoverage
          VaccinationCoverageList={VaccinationCoverageList}
        />
        <VaccinationByGender
          VaccinationByGenderList={VaccinationByGenderList}
        />
        <VaccinationByAge VaccinationByAgeList={VaccinationByAgeList} />
      </>
    )
  }

  renderLoadingView = () => (
    <div className="loading" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={100} width={100} />
    </div>
  )

  renderFailureView = () => (
    <div className="bgFailureCont">
      <div className="failureCont">
        <img
          className="failureImg"
          alt="failure view"
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        />
        <h1 className="failureHead">Something Went Wrong!</h1>
      </div>
    </div>
  )

  renderAllViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.loading:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bgCowinChartsCont">
        <div className="CowinChartsCont">
          <div className="logoCont">
            <img
              className="logo"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            />
            <h1 className="logoHead">Co-Win</h1>
          </div>
          <h1 className="cowinHead">CoWIN Vaccination in India.</h1>
          {this.renderAllViews()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
