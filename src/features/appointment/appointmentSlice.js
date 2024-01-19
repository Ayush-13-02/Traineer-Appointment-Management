import { createSlice, nanoid } from "@reduxjs/toolkit";

let data = [];
if (localStorage.getItem("Appointment") !== null)
    data = JSON.parse(localStorage.getItem("Appointment"));
const initialState = data;

export const appointmentSlice = createSlice({
    name: 'Appointments',
    initialState,
    reducers: {
        addAppointment: (state, action) => {
            const appointment = {
                id: nanoid(),
                fname: action.payload.fname,
                lname: action.payload.lname,
                phoneNo: action.payload.phoneNo,
                date: action.payload.date,
                MeetTimeFrom: action.payload.MeetTimeFrom,
                MeetTimeTo: action.payload.MeetTimeTo,
                area: action.payload.area,
                city: action.payload.city,
                state: action.payload.state,
                pinCode: action.payload.pinCode
            };
            state.push(appointment);
            // localStorage.setItem("Appointment", JSON.stringify(state));
        },
        removeAppointment: (state, action) => {
            // Modify the existing state directly
            state = state.filter(appointment => appointment.id !== action.payload.id);
            localStorage.setItem("Appointment", JSON.stringify(state));
            return state;
        },
        updateAppointment: (state, action) => {
            // Modify the existing state directly
            state.forEach(appointment => {
                if (appointment.id === action.payload.id) {
                    appointment.fname = action.payload.fname;
                    appointment.lname = action.payload.lname;
                    appointment.phoneNo = action.payload.phoneNo;
                    appointment.date = action.payload.date;
                    appointment.MeetTimeFrom = action.payload.MeetTimeFrom;
                    appointment.MeetTimeTo = action.payload.MeetTimeTo;
                    appointment.area = action.payload.area;
                    appointment.city = action.payload.city;
                    appointment.state = action.payload.state;
                    appointment.pinCode = action.payload.pinCode;
                }
            });
            localStorage.setItem("Appointment", JSON.stringify(state));
        }
    }
});

export const { addAppointment, removeAppointment, updateAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;
