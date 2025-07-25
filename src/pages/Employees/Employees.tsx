import {
  Box,
  InputBase,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
  Pagination,
} from '@mui/material';
import { WrappedTypography } from '@/components';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { employeeTableWrapper, searchBox, tableHeaderCell } from './styles.ts';
import { EMPLOYEE_DATA } from '@/common';

const ITEMS_PER_PAGE = 7;

export const Employees = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [lastPage, setLastPage] = useState(1);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (query && value === '') {
      setPage(lastPage);
    }
    setQuery(value);
  };

  const filteredData = EMPLOYEE_DATA.filter(emp =>
    emp.name.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    if (page > totalPages && totalPages > 0) {
      setPage(totalPages);
    }
  }, [filteredData.length, page]);

  useEffect(() => {
    if (query === '') {
      setLastPage(page);
    }
  }, [page, query]);

  const paginatedData = filteredData.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <Box sx={employeeTableWrapper}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <WrappedTypography type="h4" fontWeight={500}>
          All Active Employees
        </WrappedTypography>
        <Box sx={searchBox}>
          <SearchIcon sx={{ color: '#E5E4E2' }} />
          <InputBase
            placeholder="Enter Employee Name"
            value={query}
            onChange={handleSearch}
            sx={{ ml: 1, flex: 1 }}
          />
        </Box>
      </Box>

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ border: '1px solid rgb(154, 149, 149)', p: { xs: 1, md: 4 } }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={tableHeaderCell}>Name</TableCell>
              <TableCell sx={tableHeaderCell}>Job Title</TableCell>
              <TableCell sx={tableHeaderCell}>Reporting Manager</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((emp, index) => (
              <TableRow key={index}>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.title}</TableCell>
                <TableCell>{emp.manager}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={2} display="flex" justifyContent="flex-end">
        <Pagination
          count={Math.ceil(filteredData.length / ITEMS_PER_PAGE)}
          page={page}
          onChange={(_, value) => setPage(value)}
          color="primary"
          size="small"
          shape="rounded"
        />
      </Box>
    </Box>
  );
};
