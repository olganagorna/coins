import React, { PureComponent } from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

const FILTER_OPTIONS = [
    { value: 10, label: 10 },
    { value: 50, label: 50 },
    { value: 100, label: 100 },
    { value: 5000, label: "All" },
];

class LimitFilter extends PureComponent {

    handleChange = event => {
        this.props.handleChange(event.target.value);
    }

    render() {
        return (
            <FormControl className="formControl">
                <InputLabel htmlFor="limit">Show</InputLabel>
                <NativeSelect
                    value={this.props.value}
                    onChange={this.handleChange}>
                    {FILTER_OPTIONS.map(item => <option value={item.value} key={item.value}>{item.label}</option>)}
                </NativeSelect>
                <FormHelperText>coins</FormHelperText>
            </FormControl>
        );
    }
}
export default LimitFilter;
