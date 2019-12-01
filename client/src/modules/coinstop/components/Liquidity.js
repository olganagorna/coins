import React, { PureComponent } from 'react';
import Plotly from 'plotly.js-gl3d-dist';

class Liquidity extends PureComponent {
    componentDidMount(prevProps) {
        const { data } = this.props;
        if(data.length) {
            this.renderPlot(data, false);
        }
    }

    componentDidUpdate(prevProps) {
        const { data } = this.props;
        if(prevProps.data.length !== data.length) {
            this.renderPlot(data, prevProps.data.length > 0);
        }
    }

    getPlotData = data => {
        // X axis is Market Capitalization
        // Y axis is Volume (24h)
        // Z axis (or size of the point) is absolute price change (24h)
        let x = [], y = [], z = [],  names = [];
        data.forEach(item => {
            const { quote: { USD: { market_cap, volume_24h, percent_change_24h } }, name } = item;
            x.push(market_cap);
            y.push(volume_24h);
            z.push(percent_change_24h);
            names.push(name);
        });
        const trace = {
            x, y, z,
            type: 'scatter3d',
            mode: 'markers',
            marker: {
                color: 'rgb(127, 127, 127)',
                size: 8,
                symbol: 'circle',
                line: {
                    color: 'rgb(204, 204, 204)',
                    width: 1},
                opacity: 0.8},
            text: names,
            hovertemplate: '%{text}' +
                '<br>Market Capitalization: %{x}' +
                '<br>Volume (24h): %{y}' +
                '<br>Price change (24h): %{z}'
        };
        const layout = { margin: { l: 0, r: 0, b: 0, t: 0 } };
        return { trace, layout }
    }

    renderPlot(data, isRestyle) {
        const { trace, layout } = this.getPlotData(data);
        isRestyle ? this.reStylePlot(trace) : Plotly.plot( 'scatter', [trace], layout, {responsive: true} );
    }

    reStylePlot = trace => {
        Plotly.restyle( 'scatter', {"x": [trace.x], "y": [trace.y], z: [trace.z], text: [trace.names]});
    }

    render() {
        return (
            <div className="chart">
                <div id="scatter"></div>
            </div>
        );
    }
}
export default Liquidity;
