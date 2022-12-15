import React,{useState} from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const Date = ({value,placeholder,setDateFunction,lblText,error,...rest}) => {
  return (

    <div>
         <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">{lblText}</label>
            <div className="col-sm-8">
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Stack spacing={3}>
                        <DesktopDatePicker
                        label={placeholder}
                        inputFormat="DD/MM/YYYY"
                        value={value}
                        onChange={setDateFunction}
                        renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
                <small className="form-text text-danger">{error}</small>
            </div>
        </div>
    </div>

    
  )
}

export default Date


// import React,{useState} from 'react';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

// const Date = () => {
//     const [value, setValue] = useState('2014-08-18T21:11:54')
//       const handleChange = (newValue) => {
//         setValue(newValue);
//       };
    
//       return (
//         <LocalizationProvider dateAdapter={AdapterMoment}>
//           <Stack spacing={3}>
//             <DesktopDatePicker
//               label="Date desktop"
//               inputFormat="MM/DD/YYYY"
//               value={value}
//               onChange={handleChange}
//               renderInput={(params) => <TextField {...params} />}
//             />
//             <MobileDatePicker
//               label="Date mobile"
//               inputFormat="MM/DD/YYYY"
//               value={value}
//               onChange={handleChange}
//               renderInput={(params) => <TextField {...params} />}
//             />
//             <TimePicker
//               label="Time"
//               value={value}
//               onChange={handleChange}
//               renderInput={(params) => <TextField {...params} />}
//             />
//             <DateTimePicker
//               label="Date&Time picker"
//               value={value}
//               onChange={handleChange}
//               renderInput={(params) => <TextField {...params} />}
//             />
//           </Stack>
//         </LocalizationProvider>
//       );
// }

// export default Date