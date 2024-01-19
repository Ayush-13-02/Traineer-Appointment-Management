import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    fname: null,
    lname: null,
    phoneNo: null,
    date: null,
    MeetTimeFrom: null,
    MeetTimeTo: null,
    area: null,
    city: null,
    state: null,
    pinCode: null
}
const updateAppointmentSlice = createSlice({
    name: 'updateState',
    initialState,
    reducers: {
        changeState: (state, action) => {
            state.id = action.payload.id;
            state.fname = action.payload.fname;
            state.lname = action.payload.lname;
            state.phoneNo = action.payload.phoneNo;
            state.date = action.payload.date;
            state.MeetTimeFrom = action.payload.MeetTimeFrom;
            state.MeetTimeTo = action.payload.MeetTimeTo;
            state.area = action.payload.area;
            state.city = action.payload.city;
            state.state = action.payload.state;
            state.pinCode = action.payload.pinCode;
            // console.log("updateState: ", action.payload)
        }
    }
})

export const { changeState } = updateAppointmentSlice.actions;

export default updateAppointmentSlice.reducer;