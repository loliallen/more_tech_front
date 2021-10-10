import { Delete, Edit, Search, Add } from '@mui/icons-material'
import { Button, Checkbox, Chip, Paper, Table, TableBody, TableCell, tableCellClasses, TableHead, TableRow, Toolbar, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { IRole } from '../../interfaces/role'
import { IUser } from '../../interfaces/user'
import { IReduxStore } from '../../store/interfaces'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.common.black
    },
    [`&.${tableCellClasses.body}`]: {
        color: theme.palette.common.black
    },
}));


export const PersonalComponent = () => {
    const users = useSelector<IReduxStore, IUser[]>(s => s.user.list)
    const roles = useSelector<IReduxStore, IRole[]>(s => s.role.list)

    const [selectedUsers, setSelectedUsers] = useState<Record<string, IUser>>({})
    const [selectedRoles, setSelectedRoles] = useState<Record<string, IRole>>({})

    const handleSelectUser = (index: number) => {
        setSelectedUsers(p => {
            if (p[index]) {
                delete p[index]
                return p
            }
            return { ...p, [index]: users[index] }
        })
    }
    const handleSelectRole = (index: number) => {
        setSelectedRoles(p => {
            if (p[index]) {
                delete p[index]
                return p
            }
            return { ...p, [index]: roles[index] }
        })
    }
    const handleSelectAllUser = () => {
        if (Object.keys(selectedRoles).length > 0) {
            setSelectedUsers({})
        } else {
            const data: Record<string, IUser> = {}
            users.forEach((u, i) => data[i] = u)
            setSelectedUsers(data)
        }
    }
    const handleSelectAllRole = () => {
        if (Object.keys(selectedRoles).length > 0) {
            setSelectedRoles({})
        } else {
            const data: Record<string, IRole> = {}
            roles.forEach((u, i) => data[i] = u)
            setSelectedRoles(data)
        }
    }
    return (
        <div style={{ paddingLeft: 50 }}>
            <Paper style={{ width: 800, marginBottom: 40 }}>
                <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
                    <div>
                        <Button color="secondary" startIcon={<Delete />} size="small">Удалить</Button>
                        <Button color="secondary" startIcon={<Edit />} size="small">Редактировать</Button>
                    </div>
                    <div>
                        <IconButton>
                            <Add />
                        </IconButton>
                    </div>
                </Toolbar>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell padding="checkbox">
                                <Checkbox
                                    color="secondary"
                                    onClick={handleSelectAllUser}
                                    checked={Object.keys(selectedUsers).length > 0}
                                />
                            </StyledTableCell>
                            <StyledTableCell>Имя</StyledTableCell>
                            <StyledTableCell>Фамилия</StyledTableCell>
                            <StyledTableCell>Почта</StyledTableCell>
                            <StyledTableCell>Роли</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((u, i) => (
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        color="secondary"
                                        checked={Boolean(selectedUsers[i])}
                                        onClick={() => handleSelectUser(i)}
                                    />
                                </TableCell>
                                <TableCell>{u.name.split(' ')[0]}</TableCell>
                                <TableCell>{u.name.split(' ')[1]}</TableCell>
                                <TableCell>{u.email}</TableCell>
                                <TableCell>{u.role}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>

            <Paper style={{ width: 800, marginBottom: 40 }}>
                <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
                    <div>
                        <Button color="secondary" startIcon={<Delete />} size="small">Удалить</Button>
                        <Button color="secondary" startIcon={<Edit />} size="small">Редактировать</Button>
                    </div>
                    <div>
                        <IconButton>
                            <Add />
                        </IconButton>
                    </div>
                </Toolbar>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell padding="checkbox">
                                <Checkbox
                                    color="secondary"
                                    onClick={handleSelectAllRole}
                                    checked={Object.keys(selectedRoles).length > 0}
                                />
                            </StyledTableCell>
                            <StyledTableCell>Имя</StyledTableCell>
                            <StyledTableCell>Фамилия</StyledTableCell>
                            <StyledTableCell>Почта</StyledTableCell>
                            <StyledTableCell>Роли</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {roles.map((r, i) => (
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        color="secondary"
                                        checked={Boolean(selectedUsers[i])}
                                        onClick={() => handleSelectUser(i)}
                                    />
                                </TableCell>
                                <TableCell>{r.name}</TableCell>
                                <TableCell>{r.datasets.map(d => (
                                    <Chip label={
                                        typeof d == "number" ?
                                            d
                                            :
                                            d.name
                                    } />
                                ))}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    )
}
