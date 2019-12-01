import React, { PureComponent } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CurrencyFormat from 'react-currency-format';
import { helpers } from '../../core'

const TABLE_HEADER = [
    'Rank', 'Name', 'Price', 'Price Change (24h)', 'Market Cap', 'Volume (24h)'
];

class MarketOverview extends PureComponent {
    render() {
        return (
            <Paper className="paper page">
                <Table>
                    <TableHead>
                    <TableRow>
                        {TABLE_HEADER.map(item => <TableCell key={item}>{item}</TableCell>)}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.data.map(item => {
                            const { quote: { USD: { market_cap, volume_24h, percent_change_24h, price } }, name, cmc_rank,
                            id } = item;
                            return (
                                <TableRow key={id}>
                                    <TableCell>{cmc_rank}</TableCell>
                                    <TableCell>{name}</TableCell>
                                    <TableCell>
                                        <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                    </TableCell>
                                    <TableCell>
                                        {helpers.numberPercentageFormat(percent_change_24h)}
                                    </TableCell>
                                    <TableCell>
                                        <CurrencyFormat value={market_cap} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                    </TableCell>
                                    <TableCell>
                                        <CurrencyFormat value={volume_24h} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                    </TableCell>
                                </TableRow>
                            );
                        })
                        }
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
export default MarketOverview;
