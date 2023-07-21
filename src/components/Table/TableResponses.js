import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import classes from './TableResponses.module.css';
import { useEffect } from 'react';
import { useState } from 'react';

function createData(sourceCode, sourceName, sentCases, responsedCases) {
  return { sourceCode, sourceName, sentCases, responsedCases };
}

const BasicTable = () => {
  const [dataStastic, setSataStastic] = useState([]);

  const fetchDataStastic = async () => {
    const response = await fetch("http://localhost:3001/");
    const data = await response.json();

    setSataStastic(data);
    // console.log('static', dataStastic)
  };

  useEffect(() => {
    fetchDataStastic();
  }, []);

  const {getTotalCases, getTotalResponses} = dataStastic;

  console.log('galofkasdf', getTotalCases);
  // getTotalCases.map(case => console.log(case.resources_code));
  // console.log(Object.keys(getTotalCases));

  const rows = [
    createData('S0001', 'musubu', 150, 1),
    createData('S0002', 'Ipros', 200, 0),
    createData('S0003', 'levtech', 50, 0),
    createData('S0004', 'musubu', 150, 1),
    createData('S0005', 'Ipros', 200, 0),
    createData('S0006', 'levtech', 50, 0),
  ];

  return (
    <TableContainer component={Paper} className={classes.container} style={{width: 653, height: 275, overflowX: "hidden"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.title}>Code nguồn</TableCell>
            <TableCell className={classes.title} align="left">Tên nguồn</TableCell>
            <TableCell className={classes.title} align="center">Số case đã gửi</TableCell>
            <TableCell className={classes.title} align="center">Số case phản hồi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.sourceCode}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.sourceCode}</TableCell>
              <TableCell align="left">{row.sourceName}</TableCell>
              <TableCell align="center">{row.sentCases}</TableCell>
              <TableCell align="center" className={row.responsedCases ? classes.active : null}>{row.responsedCases}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;