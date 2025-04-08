// import { makeStyles } from "@mui/styles";

// export default makeStyles((theme) => ({
//     // root: {
//     //     margin: "10px",
//     // },
//     root: {
//         '& .MuiTextField-root': {
//             margin: '0px',
//         },
//     },
//     paper: {
//         padding: '10px',
//     },
//     form: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//     },
//     fileInput: {
//         width: '97%',
//         margin: '10px 0',
//     },
//     buttonSubmit: {
//         marginBottom: 10,
//     },
// }));

import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: '2px',
        },
    },
    paper: {
        padding: '4px',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: 10,
    },
}));