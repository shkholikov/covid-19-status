import React from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from './App.module.css';
import { fetchData } from "./api";
import StickyFooter from "./components/Footer/Footer";

class App extends React.Component {
    state = {
        data: {},
        country: '',
    };

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });
        console.log(fetchedData)
    }


    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <h3 className={styles.virusTitle}>C🦠VID-19 ONLINE STATUS</h3>
                <h5 className={styles.subTitle}>Stay at Home🏠</h5>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Cards data={data} />
                <Chart data={data} country={country} />
                <StickyFooter />
            </div>
        )
    }
};

export default App;